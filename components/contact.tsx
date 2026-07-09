"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Phone, Send, CircleCheckBig } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/site"

const contactChannels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: site.location, href: undefined },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="07 / contact"
          title="Let's build something"
          description="Have a role, project, or idea in mind? My inbox is always open — I'll get back to you within a day or two."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <ul className="space-y-3">
              {contactChannels.map((channel) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <channel.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs tracking-wide text-muted-foreground uppercase">
                        {channel.label}
                      </p>
                      <p className="text-sm font-medium">{channel.value}</p>
                    </div>
                  </div>
                )
                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a href={channel.href} className="block transition-opacity hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <CircleCheckBig className="size-10 text-primary" />
                <h3 className="text-lg font-medium">Thanks for reaching out!</h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Your mail client should have opened. If not, email me directly at {site.email}.
                </p>
                <Button variant="outline" className="mt-2" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <Button type="submit" className="h-11 w-full px-6 text-sm sm:w-auto">
                  <Send className="size-4" />
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
