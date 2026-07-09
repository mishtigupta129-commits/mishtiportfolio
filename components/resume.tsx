import { Download, FileText, Eye } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const quickFacts = [
  { label: "Degree", value: site.degree },
  { label: "University", value: site.university },
  { label: "Graduation", value: site.gradYear },
  { label: "Location", value: site.location },
]

export function Resume() {
  return (
    <section id="resume" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-primary uppercase">
                <span>06 / resume</span>
                <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Grab my full resume
              </h2>
              <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                Want the details on paper? Download a PDF with my complete education, experience,
                projects, and technical skills — or preview it right in your browser.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.links.resume}
                  download
                  className={cn(buttonVariants({ variant: "default" }), "h-11 px-6 text-sm")}
                >
                  <Download className="size-4" />
                  Download PDF
                </a>
                <a
                  href={site.links.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(buttonVariants({ variant: "outline" }), "h-11 px-6 text-sm")}
                >
                  <Eye className="size-4" />
                  Preview
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <FileText className="size-5" />
                <span className="font-mono text-xs tracking-wide uppercase">resume.pdf</span>
              </div>
              <dl className="divide-y divide-border">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
