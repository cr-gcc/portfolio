import type { IconType } from "react-icons";

export interface Technology {
    name: string;
    icon: IconType;
}

export interface TechnologyGroup {
    title: string;
    technologies: Technology[];
}