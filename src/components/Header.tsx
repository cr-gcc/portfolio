import { RiCodeSSlashLine } from "react-icons/ri";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export function Header() {
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Stack", href: "#stack" }
    ];
    return (
        <header className="backdrop-blur-xl border-b border-zinc-200/10">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
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
                </div>
            </div>
        </header>
    );
}