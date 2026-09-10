import type { TechnologyGroup } from "@/sections/stack/types/technology.type";
import {
    SiReact,
    SiVuedotjs,
    SiTypescript,
    SiTailwindcss,
    SiLaravel,
    SiPhp,
    SiPython,
    SiFlask,
    SiMysql,
    SiPostgresql,
    SiSupabase,
    SiGit,
    SiGithub,
    SiDocker,
    SiVercel,
    SiMariadb,
    SiPostman,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const technologyGroups: TechnologyGroup[] = [
    {
        title: "Frontend",
        technologies: [
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
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "#06B6D4",
            },
        ],
    },

    {
        title: "Backend",
        technologies: [
            {
                name: "Laravel",
                icon: SiLaravel,
                color: "#FF2D20",
            },
            {
                name: "PHP",
                icon: SiPhp,
                color: "#777BB4",
            },
            {
                name: "Python",
                icon: SiPython,
                color: "#3776AB",
            },
            {
                name: "Flask",
                icon: SiFlask,
                color: "#999999",
            },
        ],
    },

    {
        title: "Database & Services",
        technologies: [
            {
                name: "MySQL",
                icon: SiMysql,
                color: "#4479A1",
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
                color: "#4169E1",
            },
            {
                name: "Supabase",
                icon: SiSupabase,
                color: "#3FCF8E",
            },
            {
                name: "MariaDB",
                icon: SiMariadb,
                color: "#C0765A",
            },
        ],
    },

    {
        title: "Tools & Cloud",
        technologies: [
            {
                name: "Git",
                icon: SiGit,
                color: "#F05032",
            },
            {
                name: "GitHub",
                icon: SiGithub,
                color: "#8B949E",
            },
            {
                name: "Docker",
                icon: SiDocker,
                color: "#2496ED",
            },
            {
                name: "Vercel",
                icon: SiVercel,
                color: "#A1A1AA",
            },
            {
                name: "Azure",
                icon: VscAzure,
                color: "#0078D4",
            },
            {
                name: "Postman",
                icon: SiPostman,
                color: "#FF6C37",
            },
        ],
    },
];