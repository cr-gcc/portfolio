import { useLanguage } from "@/context/LanguageContext";
import { ProfileTerminal } from "./ProfileTerminal";
import { TechBadges } from "./TechBadge";
import { Actions } from "./Actions";
import { FaGithub, FaDownload } from "react-icons/fa6";

export function Hero() {
    const { language, t } = useLanguage();
    const goTo = (url: string) => window.open(url, "_blank");
    const downloadCV = () => {
        if (language === "es") {
            window.open("/cv/CV_GCC_2026_ES.pdf", "_blank");
        } else {
            window.open("/cv/CV_GCC_2026_EN.pdf", "_blank");
        }
    };

    return (
        <section id="hero" className="flex min-h-screen items-center py-20 lg:py-16">
            <div className="grid w-full items-start gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                <div className="space-y-5 sm:space-y-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent sm:text-base sm:tracking-[0.22em]">
                        {t.hero.role}
                    </p>
                    <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                        {t.hero.title}
                    </h1>
                    <p className="max-w-2xl text-sm leading-6 text-text-secondary sm:text-base sm:leading-7 md:text-lg">
                        {t.hero.subtitle}
                    </p>
                    <TechBadges />
                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                        <Actions
                            label={t.hero.actions.github}
                            icon={FaGithub}
                            action={() => goTo("https://github.com/cr-gcc")}
                        />
                        <Actions
                            label={t.hero.actions.cv}
                            icon={FaDownload}
                            action={() => downloadCV()}
                        />
                    </div>
                </div>
                <div className="w-full lg:pl-8">
                    <ProfileTerminal />
                </div>
            </div>
        </section>
    );
}