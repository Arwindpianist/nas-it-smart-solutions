"use client"

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, HTMLMotionProps } from 'framer-motion'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        primary: 'bg-[#33cccc] text-[#091010] hover:bg-[#2ab8b8] shadow-lg shadow-[#33cccc]/20',
        secondary:
          'bg-transparent text-[#eceded] border border-[#33cccc]/30 hover:bg-[#33cccc]/10 hover:border-[#33cccc]/60',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  animated?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animated = true, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : animated ? motion.button : 'button'

    const buttonClasses = cn(buttonVariants({ variant, size, className }))

    // Animation variants
    const baseAnimations = {
      initial: { scale: 1 },
      whileHover: disabled ? {} : {
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      },
      whileTap: disabled ? {} : {
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }

    const content = (
      <>
        {/* Animated background glow for primary buttons */}
        {(variant === 'primary' || variant === 'default') && (
          <motion.div
            className="absolute inset-0 rounded-md"
            style={{ 
              background: "linear-gradient(to right, rgba(51, 204, 204, 0.2), rgba(28, 252, 252, 0.3), rgba(51, 204, 204, 0.2))",
              zIndex: -1 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Ripple effect on click */}
        {animated && (
          <motion.span
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: [0.5, 0] }}
            transition={{ duration: 0.4 }}
            style={{ zIndex: 0 }}
          />
        )}

        {/* Content with animation */}
        <motion.span
          className="relative z-10 flex items-center gap-2"
          initial={{ x: 0 }}
          whileHover={disabled ? {} : { x: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {children}
        </motion.span>
      </>
    )

    if (asChild) {
      return (
        <Slot ref={ref} className={buttonClasses} {...(props as any)}>
          {children}
        </Slot>
      )
    }

    if (animated && Comp === motion.button) {
      return (
        <motion.button
          ref={ref}
          data-slot="button"
          className={buttonClasses}
          disabled={disabled}
          {...baseAnimations}
          {...(props as HTMLMotionProps<'button'>)}
        >
          {content}
        </motion.button>
      )
    }

    return (
      <button
        ref={ref}
        data-slot="button"
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
