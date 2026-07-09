import { 
  Code2, 
  BrainCircuit, 
  Database, 
  Wrench 
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const groups = [
  {
    icon: Code2,
    title: "Development",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Android Studio",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Random Forest",
      "Gradient Descent",
      "Data Preprocessing",
    ],
  },
  {
    icon: Database,
    title: "Data & Backend",
    skills: [
      "Firebase",
      "Firestore",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Node.js",
      "SQL",
    ],
  },
  {
    icon: Wrench,
    title: "Languages & Tools",
    skills: [
      "Java",
      "C++",
      "C",
      "DSA",
      "OOP",
      "Git & GitHub",
      "VS Code",
      "Google Colab",
      "Vercel",
      "Netlify",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="02 / skills"
          title="Tools I build with"
          description="Technologies and concepts I use for building AI solutions, full-stack applications, and data-driven projects."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div
              key={group.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <group.icon className="size-5" />
              </div>

              <h3 className="mb-4 text-base font-medium">
                {group.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}