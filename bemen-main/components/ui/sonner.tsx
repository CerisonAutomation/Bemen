"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-platinum group-[.toaster]:text-deep-black group-[.toaster]:border-gold group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-deep-black",
          actionButton:
            "group-[.toast]:bg-gold group-[.toast]:text-deep-black",
          cancelButton:
            "group-[.toast]:bg-platinum group-[.toast]:text-deep-black",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
