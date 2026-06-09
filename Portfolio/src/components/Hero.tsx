import { TbDownload } from "react-icons/tb";
import { socialData } from "../data";

export default function Hero() {
    return (
        <section className="py-16 px-6 sm:px-15">
            <div className="max-w-7xl">
                {/* System Tag */}
                <div className="text-lg font-bold mb-8">
                    /about me
                </div>

                {/* Two-column layout: intro left, JSON right */}
                <div className="flex flex-col xl:flex-row xl:items-start xl:gap-16 gap-12">

                    {/* Left: Headline + Paragraph + Buttons */}
                    <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex flex-col gap-6 mb-12">
                            <h2 className="text-3xl sm:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.2]">
                                Sujal Jariwala. <br />
                                <p className="text-3xl sm:text-6xl">
                                    I build functional web apps and backend systems.

                                </p>
                            </h2>

                            <p className="lg:text-lg text-sm text-zinc-600 leading-relaxed max-w-xl">
                                Software that feels simple to use and stays reliable behind the scenes is always the goal. Usually working with Astro, React, Tailwind CSS, Go, PostgreSQL, Redis, and REST APIs, while staying adaptable to whatever a project needs.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-2">
                            <a
                                href="/Jariwala-Sujal-Resume.pdf"
                                download
                                className="
                                    group
                            inline-flex items-center gap-3
                            px-6 py-3.5
                            rounded-2xl
                            bg-black
                            text-white
                            text-sm
                            font-medium
                            shadow-[0_1px_3px_rgba(0,0,0,0.12)]
                            hover:bg-neutral-900
                            active:scale-[0.98]
                            active:shadow-none
                            transition-all
                            duration-150
                            ease-out

                            select-none
                                "
                            >
                                <TbDownload size={18} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-active:translate-y-0" />
                                <span>Download Resume</span>
                            </a>

                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                {socialData.map((Social) => (
                                    <a
                                        key={Social.name}
                                        href={Social.name === "email" ? `mailto:${Social.url}` : Social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={Social.name}
                                        aria-label={Social.name}
                                        className="
                                            group
                                            flex items-center justify-center
                                            w-12 h-12
                                            rounded-xl
                                            bg-zinc-50
                                            border border-zinc-200
                                            text-zinc-600
                                            hover:bg-white
                                            hover:border-zinc-300
                                            hover:text-zinc-900
                                            hover:shadow-sm
                                            hover:-translate-y-0.5
                                            active:translate-y-0
                                            transition-all duration-200
                                        "
                                    >
                                        <Social.icon
                                            size={20}
                                            className="transition-transform duration-200 group-hover:scale-110"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: JSON block */}
                    <div className="w-full xl:w-auto xl:min-w-85 xl:max-w-105 self-start">
                        <div className="bg-[#0d0d0d] rounded-lg p-5 sm:p-6 border border-zinc-800 shadow-xl overflow-x-auto">
                            <pre className="font-mono text-sm sm:text-base leading-relaxed">
                                <span className="text-zinc-400">{"{"}</span>
                                <br />
                                <span className="text-blue-400 ml-4">"role"</span>
                                <span className="text-zinc-400">: </span>
                                <span className="text-emerald-400">"Software Engineer"</span>
                                <span className="text-zinc-400">,</span>
                                <br />
                                <span className="text-blue-400 ml-4">"location"</span>
                                <span className="text-zinc-400">: </span>
                                <span className="text-emerald-400">"India"</span>
                                <span className="text-zinc-400">,</span>
                                <br />
                                <span className="text-blue-400 ml-4">"coreFocus"</span>
                                <span className="text-zinc-400">: [</span>
                                <br />
                                <span className="text-emerald-400 ml-8">"Software Quality"</span>
                                <span className="text-zinc-400">,</span>
                                <br />
                                <span className="text-emerald-400 ml-8">"Performance"</span>
                                <span className="text-zinc-400">,</span>
                                <br />
                                <span className="text-emerald-400 ml-8">"Simplicity"</span>
                                <br />
                                <span className="text-zinc-400 ml-4">],</span>
                                <br />
                                <span className="text-blue-400 ml-4">"currently"</span>
                                <span className="text-zinc-400">: </span>
                                <span className="text-emerald-400">"Building Resuvo"</span>
                                <br />
                                <span className="text-zinc-400">{"}"}</span>
                            </pre>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}