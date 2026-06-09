import { useState } from "react";

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    // Global style overrides to completely neutralize external stylesheet pollution
    const inputOverrideStyle = {
        border: "none",
        outline: "none",
        boxShadow: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none"
    } as const;

    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-16 text-left font-mono">
            
            {/* Header Zone */}
            <div className="mb-10 space-y-2">
                <span className="text-xs text-zinc-400 block tracking-wide">// contact_gateway</span>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl font-sans">
                    Let's talk.
                </h1>
                <p className="text-zinc-500 text-base max-w-xl font-sans leading-relaxed">
                    Have an upcoming project, an open role, or a systems architecture puzzle you want to collaborate on? Drop a message below.
                </p>
            </div>

            {/* Telemetry Status Bar */}
            <div className="w-full bg-zinc-50/60 border border-zinc-200 rounded-xl p-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 mb-8 select-none">
                <span className="bg-zinc-200/80 border border-zinc-300/60 text-zinc-600 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    STATUS
                </span>
                <div>
                    <span className="text-zinc-400">connection:</span> <span className="text-zinc-700">nominal</span>
                </div>
                <div className="text-zinc-200 hidden sm:block">|</div>
                <div className="flex items-center gap-1.5">
                    <span className="text-zinc-400">telemetry:</span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        open_to_new_roles
                    </span>
                </div>
            </div>

            {submitted ? (
                /* Success State Card */
                <div className="border border-zinc-200 rounded-xl p-8 text-left max-w-xl space-y-3 bg-zinc-50/30 animate-in fade-in duration-300">
                    <span className="text-xs text-emerald-600 font-semibold block">// transmission_complete</span>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900">Message Received</h3>
                    <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                        The form data payload was transmitted successfully. I will review your details and respond within 24 hours.
                    </p>
                    <button 
                        onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}
                        className="mt-4 text-xs bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-600 px-4 py-2 rounded-lg transition-colors shadow-sm w-fit"
                    >
                        send_new_message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Input Row 1: Split Field Configuration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Name Field Card */}
                        <div className="border border-zinc-200 rounded-xl p-4 bg-white transition-all duration-200 focus-within:border-zinc-400 focus-within:shadow-sm">
                            <label htmlFor="name" className="block text-zinc-400 text-[10px] uppercase tracking-wider select-none">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Alex Mercer"
                                style={inputOverrideStyle}
                                className="w-full bg-transparent p-0 mt-1.5 text-zinc-900 font-semibold text-base placeholder-zinc-300 focus:ring-0 focus:outline-none"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>

                        {/* Email Field Card */}
                        <div className="border border-zinc-200 rounded-xl p-4 bg-white transition-all duration-200 focus-within:border-zinc-400 focus-within:shadow-sm">
                            <label htmlFor="email" className="block text-zinc-400 text-[10px] uppercase tracking-wider select-none">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="alex@infrastructure.io"
                                style={inputOverrideStyle}
                                className="w-full bg-transparent p-0 mt-1.5 text-zinc-900 font-semibold text-base placeholder-zinc-300 focus:ring-0 focus:outline-none"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>

                    </div>

                    {/* Input Row 2: Message Text Area Card */}
                    <div className="border border-zinc-200 rounded-xl p-4 bg-white transition-all duration-200 focus-within:border-zinc-400 focus-within:shadow-sm mt-5">
                        <label htmlFor="message" className="block text-zinc-400 text-[10px] uppercase tracking-wider select-none">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            placeholder="Describe your timeline, project scope, or open parameters..."
                            style={inputOverrideStyle}
                            className="w-full bg-transparent p-0 mt-1.5 text-zinc-900 font-medium text-sm sm:text-base placeholder-zinc-300 focus:ring-0 focus:outline-none resize-none leading-relaxed"
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                    </div>

                    {/* Actions and Footer Row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-3">
                        
                        {/* Fixed Left-Aligned Button Layout */}
                        <button
                            type="submit"
                            className="w-fit px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest rounded-lg transition-colors shadow-sm select-none"
                        >
                            Send Message
                        </button>

                        {/* Secondary Fallback Channels */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 select-none">
                            <span className="text-zinc-500">// direct_channels:</span>
                            <a href="mailto:thisisjariwalasujal@gmail.com" className="text-zinc-700 hover:text-emerald-600 underline underline-offset-4 decoration-zinc-200 hover:decoration-emerald-500 transition-all">email</a>
                            <a href="https://github.com/Sujal-Jariwala" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-emerald-600 underline underline-offset-4 decoration-zinc-200 hover:decoration-emerald-500 transition-all">github</a>
                            <a href="https://www.linkedin.com/in/sujal-jariwala-b9b814267/" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-emerald-600 underline underline-offset-4 decoration-zinc-200 hover:decoration-emerald-500 transition-all">linkedin</a>
                        </div>

                    </div>

                </form>
            )}
        </div>
    );
}