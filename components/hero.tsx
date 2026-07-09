import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to internships &amp; new-grad roles
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {site.name}
            </h1>
            <p className="mt-3 font-mono text-lg text-primary sm:text-xl">
              {site.role}{" "}
              <span className="text-muted-foreground">/ {site.degree}</span>
            </p>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.tagline} CSE student at {site.university}, focused on
              scalable backends, clean interfaces, and shipping real products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className={cn(buttonVariants({ variant: "default" }), "h-11 px-6 text-sm")}>
                View Projects
                <ArrowUpRight className="size-4" />
              </a>
              <a href="#contact" className={cn(buttonVariants({ variant: "outline" }), "h-11 px-6 text-sm")}>
                Get in touch
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-11 text-muted-foreground hover:text-foreground")}
                >
                  <GithubIcon className="size-5" />
                </a>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-11 text-muted-foreground hover:text-foreground")}
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="size-3.5" />
              {site.location}
              <span className="text-border">•</span>
              Class of {site.gradYear}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border glow">
              <img
                src="/profile.jpg"
                alt={`Portrait of ${site.name}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">const</span> role ={" "}
                  <span className="text-foreground">&quot;{site.role}&quot;</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mx-auto mt-14 flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4 animate-bounce" />
          scroll to explore
        </a>
      </div>
    </section>
  )
}
