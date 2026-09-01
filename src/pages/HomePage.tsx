import { Hero } from "@sections/hero/Hero";
import { Projects } from "@sections/projects/Projects";
import { Experience } from "@sections/experience/Experience";
import { TechStack } from "@sections/stack/TechStack";

export function HomePage() {
    return (
        <div id="home">
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
        </div>
    );
}
