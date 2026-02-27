import { ArrowRight, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon
}

export function InteractiveHoverButton({
  children,
  className,
  icon: Icon,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden border p-2 px-6 text-center font-semibold transition-all duration-300 ease-out hover:shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {Icon ? (
          <Icon className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
        ) : (
          <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        )}
        <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-14 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-14 items-center justify-center gap-2 opacity-0 transition-all duration-300 ease-out group-hover:-translate-x-3 group-hover:opacity-100 text-purple-700">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </button>
  )
}
