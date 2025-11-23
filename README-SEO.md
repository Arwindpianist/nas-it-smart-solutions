# SEO & Meta Tags Setup for nasitssolutins.com

This document outlines the SEO improvements and meta tags implemented for NAS IT Smart Solutions.

## ✅ Implemented SEO Features

### 1. **OG Image Generation**
- Created Puppeteer script to generate OG images (`scripts/generate-og-image.ts`)
- Generated images: `public/og-image.png` and `public/og-image.jpg` (1200x630px)
- Run with: `npm run generate:og`

### 2. **Metadata Configuration**
- Centralized SEO in `lib/seo.ts`
- Site URL updated to: `https://nasitssolutins.com`
- All pages have proper metadata via layout files

### 3. **Page-Specific Metadata**
Each page has a dedicated layout with optimized metadata:
- **Home** (`app/layout.tsx`): Main landing page metadata
- **About** (`app/about/layout.tsx`): Company story and information
- **Services** (`app/services/layout.tsx`): Service offerings
- **Projects** (`app/projects/layout.tsx`): Case studies and projects
- **Contact** (`app/contact/layout.tsx`): Contact information
- **Privacy** (`app/privacy/layout.tsx`): Privacy policy (noindex)

### 4. **Structured Data (JSON-LD)**
Implemented Schema.org markup in `components/structured-data.tsx`:
- **LocalBusiness** schema with:
  - Contact information
  - Address (Petaling Jaya, Selangor, Malaysia)
  - Phone: +60-16-231-3385
  - Email: info@nasitssolutins.com
- **WebSite** schema with search functionality
- **BreadcrumbList** for navigation

### 5. **Open Graph Tags**
All pages include:
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - OG image (1200x630)
- `og:url` - Canonical URL
- `og:type` - website
- `og:locale` - en_MY (Malaysia)

### 6. **Twitter Card Tags**
- `twitter:card` - summary_large_image
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - OG image
- `twitter:creator` - @nasitssolutins
- `twitter:site` - @nasitssolutins

### 7. **Sitemap & Robots.txt**
- **Sitemap**: `app/sitemap.ts` - Auto-generated XML sitemap
- **Robots**: `app/robots.ts` - Search engine directives
- Static robots.txt in `public/robots.txt`

### 8. **Keywords Optimization**
Default keywords for all pages:
- refurbished laptops Malaysia
- refurbished IT devices Malaysia
- refurbished computers Malaysia
- refurbished servers Malaysia
- IT assets procurement Malaysia
- refurbished workstations Malaysia
- IT solutions Malaysia
- enterprise IT hardware Malaysia
- affordable IT equipment Malaysia

## 🔧 Environment Variables

Set in production:
```env
NEXT_PUBLIC_SITE_URL=https://nasitssolutins.com
```

## 📋 Next Steps for Production

1. **Google Search Console**
   - Verify domain: https://search.google.com/search-console
   - Add verification meta tag to `lib/seo.ts`

2. **Google Analytics**
   - Already integrated via Vercel Analytics
   - Add Google Analytics ID if needed

3. **Social Media Setup**
   - Create Twitter account: @nasitssolutins
   - Update Twitter handle in `lib/seo.ts`

4. **Additional Verification**
   - Add Bing Webmaster Tools verification
   - Add Yandex verification (if targeting Russia)

5. **Performance**
   - Run Lighthouse audit
   - Optimize images
   - Check Core Web Vitals

6. **Content Optimization**
   - Ensure all images have alt text
   - Add internal linking between pages
   - Create blog/content section for fresh content

## 🚀 Deployment Checklist

- [x] OG images generated
- [x] Meta tags configured
- [x] Structured data added
- [x] Sitemap created
- [x] Robots.txt configured
- [x] All pages have metadata
- [ ] Set NEXT_PUBLIC_SITE_URL in production
- [ ] Verify Google Search Console
- [ ] Test OG images with Facebook Debugger
- [ ] Test Twitter Card validator
- [ ] Submit sitemap to search engines


