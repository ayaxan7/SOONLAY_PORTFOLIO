import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/40 bg-surface/60 px-3 py-1 text-xs font-mono uppercase tracking-wide text-accent",
        className
      )}
    >
      {children}
    </span>
  )
}

