export type IconType = "FaHeadphonesAlt" | "IoWalletSharp" | "MdCatchingPokemon" | "GrDocumentUser" | "GrDocumentPerformance" | "GrDocumentText";

export type ProjectType =
    | "Frontend"
    | "Backend"
    | "Full Stack";

export interface Project {
    slug: string;
    name: string;
    icon: IconType;
    description: string;
    technologies: string[];
    github: string;
    demo?: string;
    typeProject: ProjectType;
    featured: boolean;
}

export interface ProjectCardProps {
    project: Project;
}