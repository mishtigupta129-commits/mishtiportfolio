import { BadgeCheck, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const certifications = [
  {
    name: "IBM Cloud Computing",
    issuer: "IBM",
    year: "2026",
    id: "IBM-CLOUD-2026",
    url: "https://drive.google.com/file/d/1C7Kg_rR9cXzIUgVT3gIHRNAWtu2t1liq/view?usp=drivesdk",
  },
  {
    name: "Machine Learning Concepts",
    issuer: "Microsoft Learn",
    year: "2026",
    id: "MS-ML-CONCEPTS-2026",
    url: "https://drive.google.com/file/d/142BCpX5E5YwbPH0k5GUxKlm3byh7T6Dc/view?usp=drivesdk",
  },
  {
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group (Forage)",
    year: "2026",
    id: "TATA-GENAI-DA-2026",
    url: "https://drive.google.com/file/d/1GnDy0DDHaZlnt4VMQdmxueqBjzTJ70K0/view?usp=drivesdk",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    year: "2026",
    id: "DELOITTE-DA-2026",
    url: "https://drive.google.com/file/d/1f5kId4vQvi6zdze7YggtYI1dOFe_n3hR/view?usp=drivesdk",
  },
  {
    name: "Good Devs Sprint Hackathon Certificate",
    issuer: "Good Devs",
    year: "2026",
    id: "GOOD-DEVS-SPRINT-2026",
    url: "https://drive.google.com/file/d/1O4UyNgaECwg9hotJZZoQTmzT2oufkWXb/view?usp=drivesdk",
  },
  {
    name: "Social Internship Certificate",
    issuer: "Way of Life Foundation",
    year: "2025",
    id: "WAY-OF-LIFE-2025",
    url: "https://drive.google.com/file/d/1SILYe0n7Br7Y61ayjYA0YIg0S-OOaIa1/view?usp=drivesdk",
  },
  {
    name: "Hackmore'26 Hackathon Certificate",
    issuer: "Manav Rachna University",
    year: "2026",
    id: "HACKMORE-26-2026",
    url: "https://drive.google.com/file/d/10j8wJ5JfQt5_W_1m364tV7_QOWJ6z0MF/view?usp=drivesdk",
  },
  {
    name: "Tech Showcase 2.0 Certificate",
    issuer: "Manav Rachna University",
    year: "2026",
    id: "TECH-SHOWCASE-2-2026",
    url: "https://drive.google.com/file/d/1L1ovnGBMTuDvPaBbIIXMajxsxmVTpApN/view?usp=drivesdk",
  },
  {
    name: "Computer Networks",
    issuer: "Cisco Networking Academy",
    year: "2026",
    id: "CISCO-NETWORKS-2026",
    url: "https://drive.google.com/file/d/1VfXSY6ek0TJYQqdgMUYbp17v4YAyBvOR/view?usp=drivesdk",
  },
  {
    name: "LinkedIn Learning Certificates",
    issuer: "LinkedIn Learning",
    year: "2026",
    id: "LINKEDIN-LEARNING-2026",
    url: "https://drive.google.com/file/d/1iEXHgvuL5eqdxvJ4VIV2eS83qRlkrlOT/view?usp=drivesdk",
  },
  {
    name: "Course Completion Certificates",
    issuer: "Infosys Springboard",
    year: "2026",
    id: "INFOSYS-COURSES-2026",
    url: "https://drive.google.com/file/d/1-Sz-1REUrurfVymIj873vsMMgbVQR_2i/view?usp=drivesdk",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="05 / certifications"
          title="Certifications"
          description="Credentials that support my technical skills and continuous learning."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary/40"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BadgeCheck className="size-5" />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-medium">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {cert.issuer} • {cert.year}
                </p>
              </div>

              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}