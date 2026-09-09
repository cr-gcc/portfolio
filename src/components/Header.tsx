import { useEffect, useState } from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import type { Theme } from "@/types/theme.type";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Stack", href: "#stack" }
    ];

    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme) return storedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }

    return (
        <header className="relative sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
            {/* DESKTOP CONTENT */}
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
                <a className="block text-teal-600" href="#home">
                    <span className="sr-only">Home</span>
                    <RiCodeSSlashLine
                        size={30}
                        className="
                        cursor-pointer
                        text-text-secondary
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
                                    <a className="text-text-primary transition hover:text-white" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg text-text-secondary transition duration-200 hover:bg-accent-soft hover:text-accent"
                                    type="button"
                                    onClick={toggleTheme}
                                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                                >
                                    {theme === "dark" ? (
                                        <MdLightMode className="size-5" />
                                    ) : (
                                        <MdDarkMode className="size-5" />
                                    )}
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
                            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface-soft text-text-secondary transition duration-200 hover:border-border hover:bg-accent-soft hover:text-white md:hidden"
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
            <div id="mobile-menu" className={`absolute left-0 top-full w-full overflow-hidden border-t border-border bg-background/95
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
                                    className="block rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition duration-200 hover:bg-accent-soft hover:text-accent"
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