import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 btn-sheen cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5",
        outline:
          "border-slate-200/80 bg-white/90 backdrop-blur-md text-slate-800 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
        secondary:
          "bg-cyan-50 text-cyan-900 hover:bg-cyan-100/80 hover:shadow-md hover:-translate-y-0.5 dark:bg-cyan-950 dark:text-cyan-100",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        destructive:
          "bg-rose-500 text-white hover:bg-rose-600 shadow-md shadow-rose-500/20 hover:shadow-lg",
        link: "text-blue-600 underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/45 hover:-translate-y-0.5 border-0",
      },
      size: {
        default:
          "h-10 gap-2 px-5 py-2 text-sm",
        xs: "h-7 gap-1 px-3 text-xs",
        sm: "h-8.5 gap-1.5 px-4 text-xs",
        lg: "h-12 gap-2.5 px-7 text-base font-semibold",
        xl: "h-14 gap-3 px-8 text-lg font-bold",
        icon: "size-10",
        "icon-xs": "size-7",
        "icon-sm": "size-8.5",
        "icon-lg": "size-12",
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

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
