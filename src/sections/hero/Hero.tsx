import { ProfileTerminal } from "./ProfileTerminal";
import { TechBadge } from "./TechBadge";
import { Actions } from "./Actions";

export function Hero() {
    return (
        <section className="flex min-h-screen items-center py-20 lg:py-24">
            <div className="grid w-full items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">

                <div className="space-y-7">

                    <p className="text-base font-semibold uppercase tracking-[0.22em] text-blue-400">
                        Full Stack Developer
                    </p>

                    <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
                        I build web applications, APIs and business-oriented software.
                    </h1>

                    <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                        Transforming business needs into scalable solutions.
                        Specialized in building full-stack applications,
                        integrations and data-driven systems.
                    </p>

                    <TechBadge />

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Actions
                            label="View projects"
                            icon="fa-solid fa-arrow-right"
                            action={() => { alert("Coming soon...") }}
                        />
                        <Actions
                            label="Github"
                            icon="fa-brands fa-github"
                            action={() => { alert("Coming soon...") }}
                        />
                        <Actions
                            label="Download CV"
                            icon="fa-solid fa-download"
                            action={() => { alert("Coming soon...") }}
                        />
                    </div>

                </div>

                <div className="lg:pl-8">
                    <ProfileTerminal />
                </div>

            </div>

        </section>
    );
}