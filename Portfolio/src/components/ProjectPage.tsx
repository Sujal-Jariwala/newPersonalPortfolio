import { useState } from "react";
import { TbArrowUpRight, TbGitBranch } from "react-icons/tb";

const projectsData = [
    {
        id: "01",
        name: "Resuvo",
        status: "active_production",
        category: "full-stack",
        description: "Built end-to-end resume builder web app. Designed with AstroJS for lightning-fast static pages and a highly optimized React/TypeScript editor engine for real-time interactivity.",
        techStack: ["Go", "Astro", "React", "TypeScript", "Tailwind", "Redis"],
        liveUrl: "https://resuvo.net",
    },
    {
        id: "02",
        name: "Ecom Page",
        status: "completed",
        category: "frontend",
        description: "Built a responsive single-page e-commerce website featuring product listing, cart functionality, and smooth UI interactions for an optimized shopping experience.",
        techStack: ["ReactJs", "Typescript", "SCSS"],
        liveUrl: "https://sujal-jariwala.github.io/eCom-1Page-/",
        codeUrl: "https://github.com/Sujal-Jariwala/eCom-1Page-"
    },
    {
        id: "03",
        name: "Space Tourism Website",
        status: "completed",
        category: "frontend",
        description: "Responsive multi-page marketing website built from a Frontend Mentor challenge with a focus on layout precision and accessibility.",
        techStack: ["ReactJs", "Typescript", "SCSS"],
        liveUrl: "https://sujal-jariwala.github.io/spaceTourism/",
        codeUrl: "https://github.com/Sujal-Jariwala/spaceTourism"
    }
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects = projectsData.filter(project =>
        activeFilter === "all" ? true : project.category === activeFilter
    );

    const filterOptions = ["all", "full-stack", "frontend"];

    return (
        <div className="w-full flex flex-col">
            {/* Minimalist Filter Navigation */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-14 font-semibold text-sm border-t border-zinc-100 pt-10">
                {filterOptions.map((option) => {
                    const isActive = activeFilter === option;
                    return (
                        <button
                            key={option}
                            onClick={() => setActiveFilter(option)}
                            className={`flex items-center gap-1.5 transition-all duration-150 capitalize ${isActive
                                ? "text-black font-extrabold"
                                : "text-zinc-500 hover:text-black"
                                }`}
                        >
                            <span className={`text-zinc-400 font-mono transition-opacity ${isActive ? "opacity-100" : "opacity-0"
                                }`}>
                                {">"}
                            </span>
                            /{option}
                        </button>
                    );
                })}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="
                            group relative flex flex-col justify-between
                            p-6 sm:p-7 rounded-xl
                            border border-zinc-200 bg-zinc-50/30
                            cursor-default
                            transform-gpu
                            shadow-[0px_0px_0px_0px_rgba(13,13,13,0)]
                            transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
                            hover:cursor-pointer
                            hover:bg-white
                            hover:border-black
                            hover:-translate-y-2 
                            hover:translate-x-2
                            hover:shadow-[-8px_8px_0px_0px_#0d0d0d]
                        "
                        style={{
                            willChange: "transform, box-shadow",
                        }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between font-mono text-xs select-none">
                                <span className="text-zinc-400 font-medium">sys_idx: {project.id}</span>
                                <span className={`tracking-wide font-medium transition-colors duration-300 ${project.status === "active_production"
                                    ? "text-emerald-600 group-hover:text-emerald-500"
                                    : "text-zinc-400 group-hover:text-zinc-500"
                                    }`}>
                                    // {project.status}
                                </span>
                            </div>

                            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 group-hover:text-black transition-colors duration-300 mt-1">
                                {project.name}
                            </h3>

                            <p className="text-zinc-600 text-sm leading-relaxed max-w-md transition-colors duration-300 group-hover:text-zinc-800">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 mt-10 pt-4 border-t border-zinc-200/60 group-hover:border-black/20 transition-colors duration-300">
                            <div className="font-mono text-xs text-zinc-500 flex items-baseline flex-wrap gap-x-1">
                                <span className="text-zinc-400 select-none">stack:</span>
                                <span>{"{"}</span>
                                {project.techStack.map((tech, idx) => (
                                    <span key={tech} className="text-zinc-800 font-medium transition-colors duration-300 group-hover:text-black">
                                        {tech}
                                        {idx < project.techStack.length - 1 ? "," : ""}
                                    </span>
                                ))}
                                <span>{"}"}</span>
                            </div>

                            <div className="flex items-center gap-5 font-semibold text-xs tracking-tight">
                                {project.liveUrl !== "#" && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group/link
                                            inline-flex items-center gap-1
                                            text-zinc-800 hover:text-black
                                            underline underline-offset-4
                                            decoration-zinc-200 hover:decoration-black
                                            transition-all duration-200
                                        "
                                    >
                                        <span>live_app</span>
                                        <TbArrowUpRight
                                            size={13}
                                            className="text-zinc-400 transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-black"
                                        />
                                    </a>
                                )}
                                {project.codeUrl && (
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group/link
                                            inline-flex items-center gap-1
                                            text-zinc-800 hover:text-black
                                            underline underline-offset-4
                                            decoration-zinc-200 hover:decoration-black
                                            transition-all duration-200
                                        "
                                    >
                                        <span>view_source</span>
                                        <TbGitBranch
                                            size={13}
                                            className="text-zinc-400 transition-colors duration-200 group-hover/link:text-black"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}