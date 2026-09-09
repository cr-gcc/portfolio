import type { Technology } from "./types/technology.type";

export function TechItem({ technology }: { technology: Technology }) {
    const Icon = technology.icon;
    return (
        <div className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition duration-200 hover:bg-accent-soft">
            <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-accent-soft text-text-secondary transition duration-200 group-hover:border-border group-hover:text-accent">
                <Icon className="size-5" />
            </div>
            <span className="text-sm font-medium text-text-secondary transition group-hover:text-text-primary">
                {technology.name}
            </span>
        </div>
    );
}