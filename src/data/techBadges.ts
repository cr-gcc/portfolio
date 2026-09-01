import {
    SiReact,
    SiVuedotjs,
    SiTypescript,
    SiLaravel,
    SiPython,
} from "react-icons/si";
import type { IconType } from "react-icons";

type TechBadge = {
    name: string;
    icon: IconType;
};

export const techBadgesBasic: TechBadge[] = [
    { name: "React", icon: SiReact },
    { name: "Vue", icon: SiVuedotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Laravel", icon: SiLaravel },
    { name: "Python", icon: SiPython },
];