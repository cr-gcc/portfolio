export type LocalizedText = {
    en: string;
    es: string;
};

export type IconType = "FaHeadphonesAlt" | "IoWalletSharp" | "MdCatchingPokemon" | "GrDocumentUser" | "GrDocumentPerformance" | "GrDocumentText";

export type ProjectType =
    | "Frontend"
    | "Backend"
    | "Full Stack";

export interface Project {
    slug: string;
    name: string;
    icon: IconType;
    description: LocalizedText;
    technologies: string[];
    github: string;
    demo?: string;
    typeProject: ProjectType;
    featured: boolean;
}

export interface ProjectCardProps {
    project: Project;
}