import { useLanguage } from "@/context/LanguageContext"
import { ExperienceLine } from "./ExperienceLine";
import { experiences } from "@data/experience";

export function Experience() {
    const { t } = useLanguage();
    const fullTimeExperiences = experiences.filter((experience) => experience.type === "Full-time");
    const partTimeExperiences = experiences.filter((experience) => experience.type === "Part-time");

    return (
        <section id="experience" className="scroll-mt-20 md:scroll-mt-16 w-full border-t border-border py-10 sm:py-16 lg:py-20">
            <header className="mb-4">
                <span className="text-base font-semibold uppercase text-accent pb-4">
                    {t.experience.title}
                </span>
                <p className="mt-3 text-text-secondary">
                    {t.experience.subtitle}
                </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="px-4">
                    <span className="text-base font-semibold uppercase text-accent pb-4">
                        {t.experience.type.fullTime}
                    </span>
                    <ExperienceLine experiences={fullTimeExperiences} className="mt-6" />
                </div>
                <div className="px-4">
                    <span className="text-base font-semibold uppercase text-accent pb-4">
                        {t.experience.type.partTime}
                    </span>
                    <ExperienceLine experiences={partTimeExperiences} className="mt-6" />
                </div>
            </div>
        </section>
    )
}