import type { Technology } from "./types/technology.type";

export function TechItem({ technology }: { technology: Technology }) {
    const Icon = technology.icon;
    return (
        <div className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition duration-200 hover:bg-blue-500/[0.06]">
            <div className="flex size-9 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/[0.06] text-zinc-400 transition duration-200 group-hover:border-blue-400/30 group-hover:text-blue-400">
                <Icon className="size-5" />
            </div>
            <span className="text-sm font-medium text-zinc-300 transition group-hover:text-zinc-100">
                {technology.name}
            </span>
        </div>
    );
}