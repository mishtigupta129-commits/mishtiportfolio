import { SectionHeading } from "@/components/section-heading"

const experience = [
  {
    role: "Network Security & AI/ML Research Intern",
    company: "RailTel Corporation of India Ltd.",
    period: "July 2026",
    points: [
      "Contributed to a Network Anomaly Detection using Machine Learning project by analyzing network traffic and identifying abnormal behavior.",
      "Performed data preprocessing, explored anomaly detection techniques, and applied machine learning models to improve network monitoring.",
      "Strengthened my knowledge of AI/ML, data analysis, cybersecurity concepts, and real-world problem-solving while working in an enterprise networking environment.",
    ],
    tags: ["Machine Learning", "Python", "Network Security"],
  },
  {
    role: "Product Development & Research Intern",
    company: "Venture X India",
    period: "June – July 2026",
    points: [
      "Worked on BoardMate, a board game discovery and booking platform connecting users with board game cafés and communities.",
      "Conducted market research, analyzed user requirements, designed solution concepts, and contributed to product development planning.",
      "Enhanced my research, product thinking, collaboration, and problem-solving skills while working on a real-world startup project.",
    ],
    tags: ["Product Research", "Startup", "Problem Solving"],
  },
  {
    role: "Social Intern",
    company: "Way of Life Foundation",
    period: "July 2025",
    points: [
      "Supported the foundation's mission of promoting education for underprivileged children through community service initiatives.",
      "Sorted and organized donated books, maintained inventory records, and assisted in distributing educational resources to children.",
      "Developed teamwork, communication, organizational, and social responsibility skills while contributing to a meaningful cause.",
    ],
    tags: ["Community Service", "Inventory Management", "Teamwork"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="04 / experience"
          title="Where I've Worked"
          description="Internships and experiences that have strengthened my technical, research, and professional skills."
        />

        <div className="relative">
          <span
            className="absolute left-0 top-2 bottom-2 w-px bg-border sm:left-40"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((item) => (
              <div
                key={item.role}
                className="relative grid gap-4 pl-8 sm:grid-cols-[10rem_1fr] sm:pl-0"
              >
                <span
                  className="absolute left-[-3px] top-1.5 size-2 rounded-full bg-primary ring-4 ring-background sm:left-[9.4rem]"
                  aria-hidden="true"
                />

                <p className="font-mono text-xs text-muted-foreground sm:text-right sm:pr-8">
                  {item.period}
                </p>

                <div className="rounded-xl border border-border bg-card p-5 sm:ml-8">
                  <h3 className="text-base font-medium">{item.role}</h3>

                  <p className="mt-0.5 text-sm text-primary">
                    {item.company}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-primary/60"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
