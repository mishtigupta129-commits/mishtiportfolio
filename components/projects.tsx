import Image from "next/image"
import { Star } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    title: "AI-Powered Train Traffic Optimization System",
    image: "/train-traffic-control.png",
    description:
      "An AI-powered railway traffic optimization system developed during a hackathon to reduce delays and improve section throughput using Machine Learning.",
    tags: ["Python", "Machine Learning", "AI", "Optimization"],
    featured: true,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "AQI vs Health Impact Prediction",
    image: "/aqi-health-impact.png",
    description:
      "A Machine Learning project analyzing the relationship between Air Quality Index and health impact using data preprocessing, Gradient Descent and Random Forest.",
    tags: ["Python", "Pandas", "Random Forest", "ML"],
    featured: true,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "Network Anomaly Detection Using ML",
    image: "/network-anomaly-detection.jpg",
    description:
      "Machine Learning project developed during my RailTel internship to identify abnormal network traffic patterns for improved cybersecurity.",
    tags: ["Python", "Machine Learning", "Cyber Security"],
    featured: true,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "BoardMate – Board Game Booking Platform",
    image: "/boardmate.png",
    description:
      "A modern platform where users can discover, join and book board game events with an engaging and user-friendly experience.",
    tags: ["React", "Next.js", "UI/UX"],
    featured: true,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "Calm Space – Mental Health Assistant",
    image: "/calm-space.png",
    description:
      "A React application featuring mood tracking, journaling, meditation, reminders and an AI chatbot for mental wellness.",
    tags: ["React", "Firebase", "JavaScript", "AI"],
    featured: true,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "She Can Foundation Website",
    image: "/shecan-foundation.png",
    description:
      "A responsive NGO website designed to improve awareness, digital presence and outreach for the She Can Foundation.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    featured: false,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "HostelEase – Android Application",
    image: "/hostelease.png",
    description:
      "Android application for hostel and PG management, allowing students to request maintenance, laundry and other services.",
    tags: ["Android Studio", "Java", "XML"],
    featured: false,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "Ecometrics Dashboard",
    image: "/ecometrics-dashboard.png",
    description:
      "Environmental analytics dashboard visualizing GDP, CO₂ emissions, AQI, energy consumption and population using Python.",
    tags: ["Python", "Pandas", "NumPy", "Folium"],
    featured: false,
    github: "https://github.com/mishtigupta129-commits",
  },
  {
    title: "Library Management System",
    image: "/library-management.png",
    description:
      "Java-based console application implementing book management, issue/return operations and library record handling using OOP.",
    tags: ["Java", "OOP", "Data Structures"],
    featured: false,
    github: "https://github.com/mishtigupta129-commits",
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="03 / projects"
          title="Things I've Built"
          description="A collection of projects showcasing my skills in Artificial Intelligence, Machine Learning, Web Development and Software Engineering."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                {project.featured && (
                  <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold text-primary backdrop-blur">
                    <Star className="size-3" />
                    FEATURED
                  </span>
                )}

                <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover transition-transform duration-500 group-hover:scale-105"
  quality={100}
/>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}