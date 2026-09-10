import type { IconType } from "react-icons";

export interface Technology {
    name: string;
    icon: IconType;
    color: string;
}

export interface TechnologyGroup {
    title: string;
    technologies: Technology[];
}