import { useState } from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function Header() {
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Stack", href: "#stack" }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative sticky top-0 z-50 border-b border-zinc-200/10 bg-[#060b18]/80 backdrop-blur-xl">
            {/* DESKTOP CONTENT */}
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
                <a className="block text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <RiCodeSSlashLine
                        size={30}
                        className="
                        cursor-pointer
                        text-zinc-300
                        duration-200
                        hover:text-white
                        hover:scale-110
                        "
                    />
                </a>
                <div className="flex flex-1 items-center justify-end">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            {navLinks.map((link) => (
                                <li key={`header-link-${link.label}`}>
                                    <a className="text-zinc-200 transition hover:text-white" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    className="
                                    cursor-pointer
                                    text-zinc-300
                                    duration-200
                                    hover:text-white
                                    hover:scale-110
                                    "
                                    aria-label="Toggle theme"
                                >
                                    <MdDarkMode />
                                </button>
                                <button
                                    className="
                                    cursor-pointer
                                    text-zinc-300
                                    duration-200
                                    hover:text-white
                                    hover:scale-110
                                    "
                                    aria-label="Toggle theme"
                                >
                                    <MdLightMode />
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation"
                            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-blue-500/15 bg-zinc-950/40 text-zinc-300 transition duration-200 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white md:hidden"
                        >
                            {isMenuOpen ? (
                                <HiX className="size-5" />
                            ) : (
                                <HiMenuAlt3 className="size-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* MOBILE CONTENT */}
            <div id="mobile-menu" className={`absolute left-0 top-full w-full overflow-hidden border-t border-zinc-200/10 bg-[#060b18]/95
            backdrop-blur-xl transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <nav
                    aria-label="Mobile navigation"
                    className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
                >
                    <ul className="space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition duration-200 hover:bg-blue-500/[0.08] hover:text-blue-400"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}