interface Props {
    label: string
    icon: string
    action: () => void
}

export function Actions({ label, icon, action }: Props) {
    return (
        <button
            onClick={action}
            className="
            inline-flex items-center justify-center gap-2
            rounded-md border border-zinc-700
            bg-zinc-900 px-5 py-3
            text-sm font-medium text-zinc-200
            transition
            hover:border-blue-500
            hover:bg-zinc-800
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
            focus-visible:ring-offset-zinc-950"
        >
            <span>{label}</span>
            <i className={icon} />
        </button>
    );
}