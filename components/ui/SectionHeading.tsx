import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"

interface SectionHeadingProps {
  badge?: string
  heading: string
  subheading?: string
  align?: "left" | "center"
}

export function SectionHeading({
  badge,
  heading,
  subheading,
  align = "center"
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left"

  return (
    <div className={cn("flex flex-col gap-4", alignment)}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-primary">
        {heading}
      </h2>
      {subheading && (
        <p className="max-w-2xl text-sm sm:text-base text-secondary">
          {subheading}
        </p>
      )}
    </div>
  )
}

