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
            { name: "React", icon: SiReact },
            { name: "Vue", icon: SiVuedotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },

    {
        title: "Backend",
        technologies: [
            { name: "Laravel", icon: SiLaravel },
            { name: "PHP", icon: SiPhp },
            { name: "Python", icon: SiPython },
            { name: "Flask", icon: SiFlask },
        ],
    },
    {
        title: "Database & Services",
        technologies: [
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Supabase", icon: SiSupabase },
            { name: "MariaDB", icon: SiMariadb },
        ],
    },
    {
        title: "Tools & Cloud",
        technologies: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Docker", icon: SiDocker },
            { name: "Vercel", icon: SiVercel },
            { name: "Azure", icon: VscAzure },
            { name: "Postman", icon: SiPostman },
        ],
    },
];