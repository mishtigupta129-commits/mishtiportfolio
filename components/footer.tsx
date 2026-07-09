import { Mail, ArrowUp } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { navItems, site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="font-mono text-sm font-semibold">
              {site.name.toLowerCase().replace(" ", ".")}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {site.role} &amp; {site.degree} student building for the web. Always happy to connect.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
