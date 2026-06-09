import { TbArrowUpRight } from "react-icons/tb";
import { socialData } from "../data";

export default function Contact() {
    // Combine Email with your existing socialData

    return (
        <section className="py-16 px-6 sm:px-15 mb-8 border-t border-zinc-200 mt-16">
            <div className="max-w-5xl">
                
                <h2 className="text-xl font-bold">
                    /contact
                </h2>

                <div className="grid md:grid-cols-2 gap-16 md:gap-8 mt-16 md:mt-24 mb-20 md:mb-32">
                    
                    {/* Left Column: CTA & Status */}
                    <div className="flex flex-col items-start">
                        {/* Status Badge */}
                        <div className="
                            inline-flex items-center gap-2 
                            px-3 py-1.5 
                            rounded-full 
                            border border-emerald-200 
                            bg-emerald-50 
                            text-emerald-700 
                            text-sm font-medium 
                            mb-8
                        ">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for work
                        </div>

                        <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                            Have an idea? <br />
                            <span className="text-zinc-500 italic">Let's build it.</span>
                        </h3>

                        <p className="mt-6 text-zinc-600 leading-relaxed max-w-sm">
                            Whether you have a question, a project proposal, or just want to connect, feel free to reach out. I'll try my best to get back to you!
                        </p>
                    </div>

                    {/* Right Column: Numbered Link Rows */}
                    <div className="flex flex-col justify-center">
                        <div className="border-t border-zinc-200">
                            {socialData.map((Social, index) => {
                                // Format index to "01", "02", etc.
                                const id = (index + 1).toString().padStart(2, "0");
                                
                                return (
                                    <a
                                        key={Social.name}
                                        href={Social.name==="email"?`mailto:${Social.url}`:Social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group
                                            flex items-center justify-between
                                            py-6 px-2
                                            border-b border-zinc-200
                                            hover:bg-zinc-50
                                            transition-colors duration-300
                                        "
                                    >
                                        <div className="flex items-center gap-6 md:gap-12">
                                            <span className="text-sm text-zinc-400 font-mono">
                                                {id}
                                            </span>
                                            <span className="text-xl font-medium text-zinc-900 capitalize group-hover:translate-x-2 transition-transform duration-300">
                                                {Social.name}
                                            </span>
                                        </div>
                                        
                                        <TbArrowUpRight 
                                            size={24} 
                                            className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-300" 
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Bottom Footer Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-400 font-mono">
                    <p>&copy; {new Date().getFullYear()} Sujal Jariwala.</p>
                    <p>Designed & Built from scratch.</p>
                </div>

            </div>
        </section>
    );
}