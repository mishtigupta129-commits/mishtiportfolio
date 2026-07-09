import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ index, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-primary uppercase">
        <span>{index}</span>
        <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
