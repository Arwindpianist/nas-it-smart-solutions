import puppeteer from "puppeteer"
import { writeFile } from "fs/promises"
import { join } from "path"

async function generateOGImage() {
  console.log("Starting OG image generation...")
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 630 })

    // Create HTML for OG image
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              width: 1200px;
              height: 630px;
              background: linear-gradient(135deg, #091010 0%, #0a1414 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
              position: relative;
              overflow: hidden;
            }
            .stars {
              position: absolute;
              width: 100%;
              height: 100%;
              background-image: 
                radial-gradient(2px 2px at 20% 30%, #33cccc, transparent),
                radial-gradient(2px 2px at 60% 70%, #1cfcfc, transparent),
                radial-gradient(1px 1px at 50% 50%, #33cccc, transparent),
                radial-gradient(1px 1px at 80% 10%, #1cfcfc, transparent),
                radial-gradient(2px 2px at 90% 60%, #33cccc, transparent);
              background-size: 200% 200%;
              opacity: 0.3;
              animation: move 20s ease infinite;
            }
            @keyframes move {
              0%, 100% { background-position: 0% 0%; }
              50% { background-position: 100% 100%; }
            }
            .container {
              position: relative;
              z-index: 1;
              text-align: center;
              padding: 60px;
              max-width: 1000px;
            }
            .logo-text {
              font-size: 72px;
              font-weight: 700;
              background: linear-gradient(135deg, #33cccc 0%, #1cfcfc 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 24px;
              letter-spacing: -2px;
            }
            .tagline {
              font-size: 32px;
              color: #eceded;
              margin-bottom: 40px;
              font-weight: 400;
            }
            .features {
              display: flex;
              gap: 40px;
              justify-content: center;
              margin-top: 40px;
            }
            .feature {
              color: #6b7e85;
              font-size: 20px;
            }
            .feature strong {
              color: #33cccc;
            }
          </style>
        </head>
        <body>
          <div class="stars"></div>
          <div class="container">
            <div class="logo-text">NAS IT Smart Solutions</div>
            <div class="tagline">Trusted Refurbished IT Devices in Malaysia</div>
            <div class="features">
              <div class="feature"><strong>15+</strong> Years Experience</div>
              <div class="feature"><strong>70%</strong> Cost Savings</div>
              <div class="feature"><strong>6</strong> Month Warranty</div>
            </div>
          </div>
        </body>
      </html>
    `

    await page.setContent(html, { waitUntil: "networkidle0" })
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait for animations

    const screenshot = await page.screenshot({
      type: "png",
      path: join(process.cwd(), "public", "og-image.png"),
      fullPage: false,
    })

    console.log("✓ OG image generated successfully at public/og-image.png")

    // Also generate a jpg version
    const screenshotJpg = await page.screenshot({
      type: "jpeg",
      quality: 90,
      path: join(process.cwd(), "public", "og-image.jpg"),
      fullPage: false,
    })

    console.log("✓ OG image (JPG) generated successfully at public/og-image.jpg")
  } catch (error) {
    console.error("Error generating OG image:", error)
    throw error
  } finally {
    await browser.close()
  }
}

generateOGImage()
  .then(() => {
    console.log("OG image generation completed!")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Failed to generate OG image:", error)
    process.exit(1)
  })

