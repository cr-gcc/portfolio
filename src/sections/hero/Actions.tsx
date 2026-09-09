import type { IconType } from "react-icons";

interface Props {
    label: string;
    icon: IconType;
    action: () => void;
}

export function Actions({ label, icon: Icon, action }: Props) {
    return (
        <button
            onClick={action}
            className="
            cursor-pointer
            inline-flex items-center justify-center gap-2
            rounded-md border border-border
            px-5 py-3
            text-sm font-medium text-text-primary
            transition
            hover:border-border
            hover:backdrop-blur-xs
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
            focus-visible:ring-offset-zinc-950"
        >
            <span>{label}</span>
            <Icon className="h-4 w-4" />
        </button>
    );
}