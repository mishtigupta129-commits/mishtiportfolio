import { GraduationCap, CodeXml, Rocket, Coffee } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const highlights = [
  {
    icon: GraduationCap,
    title: "AI & Machine Learning",
    body: "Building ML models, exploring Artificial Intelligence, and creating data-driven solutions.",
  },
  {
    icon: CodeXml,
    title: "Software Development",
    body: "Developing modern web applications using React, Next.js, TypeScript, and other technologies.",
  },
  {
    icon: Rocket,
    title: "Projects & Research",
    body: "Working on AI-based projects, hackathons, and research-oriented solutions.",
  },
  {
    icon: Coffee,
    title: "Continuous Learning",
    body: "Always learning new technologies and improving practical development skills.",
  },
]

const stats = [
  { label: "Projects shipped", value: "6", suffix: "+" },
  { label: "Internships", value: "3", suffix: "" },
  { label: "Certifications", value: "10", suffix: "+" },
   { label: "Hackathons", value: "3", suffix: "+" },
]

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="01 / about"
          title="A little about me"
        />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I'm Mishti Gupta, a B.Tech Computer Science & Engineering student
              at Manav Rachna University. I'm passionate about Artificial
              Intelligence, Machine Learning, and software development. I enjoy
              transforming ideas into real-world applications while continuously
              exploring new technologies.

              <br />
              <br />

              I have gained industry exposure through my internship at RailTel
              Corporation of India Ltd., where I am contributing to a Network
              Anomaly Detection project using Machine Learning techniques.

              <br />
              <br />

              I believe in learning by building, which drives me to work on
              AI/ML projects, web applications, and research-based solutions to
              strengthen my technical and problem-solving skills.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <item.icon className="mb-3 size-5 text-primary" />
                  <h3 className="text-sm font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <p className="font-mono text-3xl font-semibold text-primary">
                  {stat.value}
                  <span className="text-lg text-muted-foreground">
                    {stat.suffix}
                  </span>
                </p>

                <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}