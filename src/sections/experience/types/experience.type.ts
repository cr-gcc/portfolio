export type TypeExperience = "Full-time" | "Part-time";

export interface Experience {
    company: string;
    rangeDate: string;
    role: string;
    description: string;
    type: TypeExperience;
}

export interface ExperienceLineProps {
    experiences?: Experience[];
    className?: string;
}