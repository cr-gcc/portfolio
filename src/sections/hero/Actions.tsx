interface Props {
    label: string
    icon: string
    action: () => void
}

export function Actions({ label, icon, action }: Props) {
    return (
        <button onClick={action} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-sm">
            <span className="pr-2">{label}</span><i className={`${icon} w-8 h-8`} />
        </button>
    )
}