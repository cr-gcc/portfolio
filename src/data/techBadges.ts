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
    color: string;
};

export const techBadgesBasic: TechBadge[] = [
    {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
    },
    {
        name: "Vue",
        icon: SiVuedotjs,
        color: "#42B883",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
    },
    {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
    },
    {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
    },
];