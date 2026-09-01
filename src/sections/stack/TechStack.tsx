import { technologyGroups } from "@/data/technologyGroups";
import { TechItem } from "./TechItem";

export function TechStack() {
    return (
        <section className="border-t border-zinc-200/10 py-10">
            <header className="mb-10">
                <span className="text-base font-semibold uppercase text-blue-400 pb-4">
                    Tech Stack
                </span>
                <p className="mt-3 max-w-2xl text-zinc-400">
                    Tools and technologies I use to build, integrate and deploy
                    web applications.
                </p>
            </header>
            <div className="overflow-hidden rounded-2xl border border-blue-500/15 bg-zinc-950/35 backdrop-blur-md">
                {technologyGroups.map((group, index) => (
                    <div
                        key={group.title}
                        className={`p-6 sm:p-8 ${index !== 0 ? "border-t border-zinc-800/80" : ""}`}
                    >
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                            {group.title}
                        </h3>
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                            {group.technologies.map((technology) => (
                                <TechItem
                                    key={technology.name}
                                    technology={technology}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}