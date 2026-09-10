export type TypeExperience = "Full-time" | "Part-time";

export type LocalizedText = {
    es: string;
    en: string;
};

export interface Experience {
    company: string;
    rangeDate: LocalizedText;
    role: LocalizedText;
    description: LocalizedText;
    type: TypeExperience;
}

export interface ExperienceLineProps {
    experiences?: Experience[];
    className?: string;
}