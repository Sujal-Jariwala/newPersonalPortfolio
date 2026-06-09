const projects = [
    {
        id: "01",
        name: "Resuvo",
        description:
            "AI-powered resume builder that helps job seekers create ATS-friendly resumes, generate stronger content, and export professional resumes in minutes.",
        stack: "Astro · React · Go · PostgreSQL · Redis",
        cta: "Build Your Resume",
        link: "https://resuvo.net",
    },
    {
        id: "02",
        name: "Space Tourism Website",
        description:
            "Responsive multi-page marketing website built from a Frontend Mentor challenge with a focus on layout precision and accessibility.",
        stack: "React · TypeScript · Tailwind CSS",
        cta: "View Project",
        link: "https://sujal-jariwala.github.io/spaceTourism/",
    },
    {
        id: "03",
        name: "Products With Cart",
        description:
            "E-commerce product page featuring cart management, quantity controls, and a clean shopping experience.",
        stack: "React · TypeScript",
        cta: "View Project",
        link: "https://sujal-jariwala.github.io/productsWithCart/",
    },
];

export default function FeaturedWork() {
    return (
        <section className="py-16 px-6 sm:px-15">
            <div className="max-w-5xl">

                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">
                        /featured work
                    </h2>

                    <a
                        href="/projects"
                        className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                        View all projects →
                    </a>
                </div>

                <div className="mt-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`grid md:grid-cols-[80px_1fr] gap-6 py-10 ${index !== projects.length - 1
                                    ? "border-b border-zinc-200"
                                    : ""
                                }`}
                        >
                            <div>
                                <span className="text-sm text-zinc-400 font-mono">
                                    {project.id}
                                </span>
                            </div>

                            <div className="max-w-3xl">
                                <h3 className="text-3xl font-semibold tracking-tight text-zinc-900">
                                    {project.name}
                                </h3>

                                <p className="mt-4 text-zinc-600 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-5 text-sm text-zinc-500">
                                    {project.stack}
                                </div>

 <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className={
    project.id === "01"
      ? `
        group
        inline-flex items-center gap-2
        mt-8
        px-5 py-3
        rounded-full
        border border-zinc-200
        bg-white
        text-zinc-900
        text-sm font-medium
        shadow-sm
        hover:shadow-md
        hover:border-zinc-300
        hover:bg-zinc-50
        hover:-translate-y-0.5
        active:translate-y-0
        transition-all duration-200
      `
      : `
        inline-flex items-center gap-2
        mt-6
        text-sm font-medium text-zinc-900
        hover:gap-3
        transition-all
      `
  }
>
  {project.id === "01" ? "Build Your Resume" : "View Project"}

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={
      project.id === "01"
        ? "transition-transform duration-200 group-hover:translate-x-0.5"
        : ""
    }
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
</a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}