import { useLanguage } from "@/context/LanguageContext";
import { RiCodeSSlashLine } from "react-icons/ri";
import { IoLogoGithub, IoIosArrowUp, IoLogoLinkedin } from "react-icons/io";
import { IoMail } from "react-icons/io5";

export function Footer() {
    const { t } = useLanguage();
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="border-t border-border backdrop-blur-xl">
            <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-20 sm:px-6 sm:pt-16 lg:px-8 lg:pt-12">
                {/* Back to top */}
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <button
                        type="button"
                        onClick={goToTop}
                        className="
                            inline-flex h-12 w-12 cursor-pointer
                            items-center justify-center
                            rounded-full
                            border border-border
                            bg-accent-soft
                            text-text-primary
                            shadow-lg shadow-blue-950/20
                            transition duration-200
                            hover:-translate-y-0.5
                            hover:bg-accent-soft
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
                <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
                    {/* Left */}
                    <div>
                        <div className="flex justify-center lg:justify-start">
                            <RiCodeSSlashLine
                                size={32}
                                className="
                                    text-accent
                                    transition duration-200
                                    hover:scale-110
                                    hover:text-accent"
                            />
                        </div>
                        <h2 className="mt-6 text-center text-2xl font-semibold tracking-tight text-text-primary lg:text-left" >
                            {t.footer.title}
                        </h2>
                        <p className="mx-auto mt-4 max-w-lg text-center leading-7 text-text-secondary lg:mx-0 lg:text-left">
                            {t.footer.description}
                        </p>
                    </div>
                    {/* Contact */}
                    <div>
                        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent lg:text-left" >
                            {t.footer.contact}
                        </p>
                        <h3 className="mt-3 text-center text-2xl font-semibold text-text-primary lg:text-left" >
                            {t.footer.goContact}
                        </h3>
                        <div className="mt-6 space-y-4">
                            <a href="mailto:cris.gcc@outlook.com" className="group flex items-center gap-4
                                rounded-lg border border-border bg-surface-soft px-4 py-3
                                transition duration-200 hover:border-border hover:bg-accent-soft"
                            >
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-accent-soft text-accent">
                                    <IoMail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-text-primary0">Email</p>
                                    <p className="text-sm font-medium text-text-secondary group-hover:text-white">cris.gcc@outlook.com</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/cristobal-gutierrez-chavez/"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 rounded-lg border border-border bg-surface-soft px-4 py-3
                                transition duration-200 hover:border-border hover:bg-accent-soft"
                            >
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-accent-soft text-accent">
                                    <IoLogoLinkedin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-text-primary0">LinkedIn</p>
                                    <p className="text-sm font-medium text-text-secondary group-hover:text-white">{t.footer.links.linkedin}</p>
                                </div>
                            </a>
                            <a href="https://github.com/cr-gcc"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 rounded-lg
                                border border-border
                                bg-surface-soft px-4 py-3
                                transition duration-200
                                hover:border-border hover:bg-accent-soft"
                            >
                                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-accent-soft text-accent">
                                    <IoLogoGithub size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-text-primary0">GitHub</p>
                                    <p className="text-sm font-medium text-text-secondary group-hover:text-white">github.com/cr-gcc</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div>
                    <p className="text-center text-sm leading-6 text-text-primary0 lg:text-right lg:text-base">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-medium text-text-secondary">
                            Cris GC
                        </span>
                        <span className="mx-2 text-accent">•</span>
                        {t.footer.copy1}{" "}
                        <span className="text-text-secondary">React</span>
                        {" + "}
                        <span className="text-text-secondary">TypeScript</span>
                        <span className="mx-2 text-accent">•</span>
                        {t.footer.copy2}
                    </p>
                </div>
            </div>
        </footer>
    );
}