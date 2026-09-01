import { ExperienceLine } from "./ExperienceLine";
import { experiences } from "@data/experience";

export function Experience() {
    const fullTimeExperiences = experiences.filter((experience) => experience.type === "Full-time");
    const partTimeExperiences = experiences.filter((experience) => experience.type === "Part-time");

    return (
        <div className="w-full border-t border-zinc-200/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                <div className="px-4">
                    <span className="text-base font-semibold uppercase text-blue-400 pb-4">
                        Tiempo completo
                    </span>
                    <ExperienceLine experiences={fullTimeExperiences} className="mt-6" />
                </div>

                <div className="px-4">
                    <span className="text-base font-semibold uppercase text-blue-400 pb-4">
                        Consultor
                    </span>
                    <ExperienceLine experiences={partTimeExperiences} className="mt-6" />
                </div>
            </div>
        </div>
    )
}