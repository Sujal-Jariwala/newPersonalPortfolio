import { useState, useEffect } from "react";
import { TbDownload, TbMenu2, TbX } from "react-icons/tb";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    // Frameowrk-agnostic way to read the current path on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const navLinks = [
        { href: "/", label: "/about" },
        { href: "/projects", label: "/projects" },
        { href: "/contact", label: "/contact" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-white/75 backdrop-blur-md z-30 w-full px-7 py-4 flex">
                <div className="flex justify-between w-full items-center">
                    {/* Logo */}
                    <a href="/" className="font-semibold text-[20px]">Sujal</a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <nav className="flex items-center gap-10">
                            {navLinks.map((link) => {
                                const isActive = currentPath === link.href;

                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`font-semibold flex gap-2.5 items-center transition-all duration-200 ${isActive
                                                ? "text-black font-extrabold"
                                                : "text-zinc-600 hover:text-black"
                                            }`}
                                    >
                                        <span className={`text-zinc-400 font-mono transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"
                                            }`}>
                                            {">"}
                                        </span>
                                        {link.label}
                                    </a>
                                );
                            })}
                        </nav>

                        <a
                            href="/Jariwala-Sujal-Resume.pdf"
                            download
                            className="
                                group
                                inline-flex items-center gap-3
                                px-5 py-2
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
                            <TbDownload
                                size={18}
                                className="
                                    transition-transform
                                    duration-150
                                    group-active:scale-90
                                "
                            />
                            <span>Download Resume</span>
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <TbMenu2 size={22} />
                    </button>
                </div>
            </header>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-end px-6 py-5 border-b border-gray-100">
                    <button
                        className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <TbX size={20} />
                    </button>
                </div>

                {/* Drawer links */}
                <nav className="flex flex-col px-6 pt-6 gap-2 flex-1">
                    {navLinks.map((link, i) => {
                        const isActive = currentPath === link.href;

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`font-semibold text-[15px] px-4 py-3 rounded-md flex gap-3 items-center ${isActive
                                        ? "bg-zinc-100 text-black font-extrabold"
                                        : "text-zinc-600 hover:bg-gray-50 hover:text-black"
                                    }`}
                                style={{
                                    transform: menuOpen ? "translateX(0)" : "translateX(16px)",
                                    opacity: menuOpen ? 1 : 0,
                                    transitionProperty: "transform, opacity, background-color",
                                    transitionDuration: "300ms, 300ms, 150ms",
                                    transitionTimingFunction: "ease, ease, linear",
                                    transitionDelay: menuOpen ? `${i * 40 + 60}ms, ${i * 40 + 60}ms, 0ms` : "0ms",
                                }}
                            >
                                <span className={`text-zinc-400 font-mono transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"
                                    }`}>
                                    {">"}
                                </span>
                                {link.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Drawer footer */}
                <div className="px-6 py-6 border-t border-gray-100">
                    <a
                        href="/Jariwala-Sujal-Resume.pdf"
                        download
                        className="
                            group
                            inline-flex items-center gap-3
                            px-5 py-3
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
                        <TbDownload
                            size={18}
                            className="
                                transition-transform
                                duration-150
                                group-active:scale-90
                            "
                        />
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </>
    );
}