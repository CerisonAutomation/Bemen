import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gold text-deep-black border-gold hover:bg-gold-dark hover:text-pure-white professional-btn",
        destructive:
          "bg-red-500 text-pure-white border-red-500 hover:bg-red-600",
        outline:
          "border-gold bg-platinum text-deep-black hover:bg-gold hover:text-pure-white",
        secondary:
          "border-gold bg-platinum text-deep-black hover:bg-gold hover:text-pure-white",
        ghost: "bg-transparent text-gold hover:bg-gold-light hover:text-deep-black",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3 text-base font-semibold rounded-full",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-14 rounded-2xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
