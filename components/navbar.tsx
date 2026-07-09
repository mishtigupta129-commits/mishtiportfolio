"use client"

import { useEffect, useState } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { navItems, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid size-8 place-items-center rounded-md bg-primary/10 text-primary">
            <Terminal className="size-4" />
          </span>
          <span className="hidden sm:inline">
            {site.name.toLowerCase().replace(" ", ".")}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === item.href && "text-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="size-5" />
          </a>

          {/* LinkedIn */}
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden sm:flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedinIcon className="size-5" />
          </a>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    active === item.href && "bg-muted text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="mt-2 flex items-center gap-2 px-3">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>

              <span className="text-border">/</span>

              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}