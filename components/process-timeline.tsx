"use client"

import { Check } from "lucide-react"

interface TimelineStep {
  title: string
  description: string
}

interface ProcessTimelineProps {
  steps: TimelineStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-8 top-0 bottom-0 w-1"
        style={{ backgroundImage: "linear-gradient(to bottom, #33cccc, #158c8c, #091010)" }}
      ></div>

      <div className="space-y-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-24 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            {/* Circle node */}
            <div className="absolute left-0 w-16 h-16 glass-neon-active rounded-full flex items-center justify-center animate-glow-neon">
              <Check style={{ color: "#1cfcfc" }} className="w-8 h-8" />
            </div>

            {/* Content */}
            <div className="glass-neon p-6 rounded-xl">
              <h3 style={{ color: "#1cfcfc" }} className="text-xl font-bold mb-2">
                {step.title}
              </h3>
              <p style={{ color: "#eceded" }} className="opacity-80">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
