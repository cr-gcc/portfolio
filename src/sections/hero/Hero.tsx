import { ProfileTerminal } from "./ProfileTerminal";
import { TechBage } from "./TechBage";
import { Actions } from "./Actions";

export function Hero() {
    return (
        <section className="min-h-[calc(100vh-4rem)]">
            <div className="mx-auto grid items-center gap-12 px-6 py-20 lg:grid-cols-2">
                <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                        <span className="uppercase">Full stack developer</span>
                    </h3>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        I build web applications, APIs and business-oriented software solutions.
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Transforming business needs into scalable solutions.<br />Specialized in building full-stack applications,<br />integrations and data-driven systems.
                    </p>
                    <div className="mb-4">
                        < TechBage />
                    </div>
                    <div className="flex mb-4">
                        <Actions
                            label="View Projects"
                            icon="fa-solid fa-arrow-right-long"
                            action={() => { alert("Projects") }}
                        />
                        <Actions
                            label="GitHub"
                            icon="fa-brands fa-github"
                            action={() => window.open("https://github.com/Cris-023", "_blank")}
                        />
                        <Actions
                            label="Download CV"
                            icon="fa-solid fa-download"
                            action={() => { alert("Download CV") }}
                        />
                    </div>

                </div>
                <div className="order-1 lg:order-2">
                    <ProfileTerminal />
                </div>
            </div>
        </section>
    )
}