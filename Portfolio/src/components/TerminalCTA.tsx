import { useState } from "react";
import { TbCopy, TbCheck, TbTerminal } from "react-icons/tb";

export default function TerminalCTA() {
    const [copied, setCopied] = useState(false);
    const curlCommand = `curl -X POST https://sujal.net/api/v1/contact \\\n  -d "message=Let's build together"`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(curlCommand);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy pipeline string", err);
        }
    };

    return (
        /* Outer Layout Wrapper: Explicitly handles full-width centering via Flexbox */
        <div className="w-full flex justify-center mt-16">
            
            {/* Inner Terminal Card: Pure block layout with size constraints */}
            <div className="p-5 rounded-xl border border-zinc-200 bg-zinc-950 text-zinc-100 font-mono max-w-2xl w-full transition-all duration-300">
                
                {/* Header / Top Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3 mb-4 select-none">
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                        <TbTerminal size={13} className="text-zinc-500" />
                        <span>establish_connection.sh</span>
                    </div>
                    <button 
                        onClick={handleCopy}
                        className="flex items-center gap-1 text-[10px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-800 transition-colors duration-150 group"
                        title="Copy shell payload"
                    >
                        {copied ? (
                            <>
                                <TbCheck size={11} className="text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">copied</span>
                            </>
                        ) : (
                            <>
                                <TbCopy size={11} className="text-zinc-400 group-hover:text-zinc-200" />
                                <span>copy_cmd</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Explainer Comment */}
                <p className="text-zinc-500 text-[11px] leading-relaxed mb-3 select-none">
                    # Trigger pipeline execution to connect infrastructure profiles.
                </p>

                {/* Code Field */}
                <div className="bg-zinc-900/40 p-3 rounded-lg border border-zinc-900 overflow-x-auto text-xs text-zinc-300 whitespace-pre leading-5">
                    <span className="text-zinc-600 select-none">sujal@infra:~$</span> {curlCommand}
                </div>

                {/* Inline Footer Links */}
                <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-zinc-500 select-none">
                    <span>// secondary_gateways:</span>
                    <a href="mailto:thisisjariwalasujal@gmail.com" className="text-zinc-300 hover:text-emerald-400 underline underline-offset-2 transition-colors">email</a>
                    <a href="https://github.com/Sujal-Jariwala" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-emerald-400 underline underline-offset-2 transition-colors">github</a>
                    <a href="https://www.linkedin.com/in/sujal-jariwala-b9b814267/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-emerald-400 underline underline-offset-2 transition-colors">linkedin</a>
                </div>
            </div>

        </div>
    );
}