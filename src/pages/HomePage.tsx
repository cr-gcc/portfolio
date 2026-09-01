import { Hero } from "@sections/hero/Hero";
import { Projects } from "@sections/projects/Projects";
import { Experience } from "@sections/experience/Experience";
import { TechStack } from "@sections/stack/TechStack";
/*
import { Contact } from "@sections/contact/Contact";
*/

export function HomePage() {
    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            {/* <Contact /> */}
        </>
    );
}