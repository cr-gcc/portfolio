import { RiCodeSSlashLine } from "react-icons/ri";
import { IoLogoGithub, IoIosArrowUp, IoLogoLinkedin } from "react-icons/io";
import { IoMail } from "react-icons/io5";

export function Footer() {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="border-t border-zinc-200/10 backdrop-blur-xl">
            <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pt-12">
                {/* Back to top */}
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <button
                        type="button"
                        onClick={goToTop}
                        className="
                            inline-flex h-12 w-12 cursor-pointer
                            items-center justify-center
                            rounded-full
                            border border-blue-500/20
                            bg-blue-600/90
                            text-zinc-200
                            shadow-lg shadow-blue-950/20
                            transition duration-200
                            hover:-translate-y-0.5
                            hover:bg-blue-500
                            hover:text-white
                            "
                    >
                        <span className="sr-only">Back to top</span>
                        <IoIosArrowUp
                            className="block -translate-y-px"
                            size={22}
                        />
                    </button>
                </div>
                {/* Main footer content */}
                <div className="mb-12 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-start">
                    {/* Left */}
                    <div>
                        <div className="flex justify-center lg:justify-start">
                            <RiCodeSSlashLine
                                size={32}
                                className="
                                    text-blue-400
                                    transition duration-200
                                    hover:scale-110
                                    hover:text-blue-300"
                            />
                        </div>
                        <h2 className="mt-6 text-center text-2xl font-semibold tracking-tight text-zinc-100 lg:text-left" >
                            Building software with purpose.
                        </h2>
                        <p className="mx-auto mt-4 max-w-lg text-center leading-7 text-zinc-400 lg:mx-0 lg:text-left">
                            Full Stack Developer focused on building maintainable web
                            applications, APIs and integrations that solve real business
                            problems.
                        </p>
                    </div>
                    {/* Contact */}
                    <div>
                        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 lg:text-left" >
                            Contact
                        </p>
                        <h3 className="mt-3 text-center text-2xl font-semibold text-zinc-100 lg:text-left" >
                            Let&apos;s connect
                        </h3>
                        <div className="mt-6 space-y-4">
                            <a href="mailto:cris.gcc@outlook.com" className="group flex items-center gap-4
                                rounded-lg border border-blue-500/10 bg-zinc-950/30 px-4 py-3
                                transition duration-200 hover:border-blue-400/25 hover:bg-blue-500/[0.05]"
                            >
                                <div className="flex size-10 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/[0.06] text-blue-400">
                                    <IoMail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
                                    <p className="text-sm font-medium text-zinc-300 group-hover:text-white">cris.gcc@outlook.com</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 rounded-lg border border-blue-500/10 bg-zinc-950/30 px-4 py-3
                                transition duration-200 hover:border-blue-400/25 hover:bg-blue-500/[0.05]"
                            >
                                <div className="flex size-10 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/[0.06] text-blue-400">
                                    <IoLogoLinkedin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-zinc-500">LinkedIn</p>
                                    <p className="text-sm font-medium text-zinc-300 group-hover:text-white">Professional profile</p>
                                </div>
                            </a>
                            <a href="https://github.com/cr-gcc"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 rounded-lg
                                border border-blue-500/10
                                bg-zinc-950/30 px-4 py-3
                                transition duration-200
                                hover:border-blue-400/25 hover:bg-blue-500/[0.05]"
                            >
                                <div className="flex size-10 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/[0.06] text-blue-400">
                                    <IoLogoGithub size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-zinc-500">GitHub</p>
                                    <p className="text-sm font-medium text-zinc-300 group-hover:text-white">github.com/cr-gcc</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div>
                    <p className="text-center text-base text-zinc-500 lg:text-right">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-medium text-zinc-300">
                            Cris GC
                        </span>
                        <span className="mx-2 text-blue-500">•</span>
                        Built with{" "}
                        <span className="text-zinc-300">React</span>
                        {" + "}
                        <span className="text-zinc-300">TypeScript</span>
                        <span className="mx-2 text-blue-500">•</span>
                        Fueled by <span title="Coffee">☕</span> and <span title="Heart">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}