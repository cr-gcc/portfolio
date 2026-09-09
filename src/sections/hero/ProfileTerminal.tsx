export function ProfileTerminal() {
    return (
        <div className="
            font-mono
            overflow-hidden
            rounded-xl
            border border-border
            shadow-2xl shadow-blue-950/30
            backdrop-blur-xs"
        >
            <div className="flex items-center gap-2 border-b border-border bg-accent-soft px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-accent-soft" />
                <span className="h-3 w-3 rounded-full bg-accent-soft" />
                <span className="h-3 w-3 rounded-full bg-accent-soft" />
            </div>
            <div className="space-y-3 p-6 font-mono text-sm sm:text-base">
                <p className="mb-6">
                    <span className="text-accent">{`> cristobal`}</span>.profile
                </p>
                <div className="grid gap-2 grid-cols-[40%_60%]">
                    <div className="text-text-secondary">name:</div>
                    <div className="text-text-secondary">Cristobal Gutierrez Chavez</div>
                    <div className="text-text-secondary">role:</div>
                    <div className="text-text-secondary">Full Stack Developer</div>
                    <div className="text-text-secondary">location:</div>
                    <div className="text-text-secondary">Mexico City, Mexico</div>
                    <div className="text-text-secondary">focus:</div>
                    <div className="text-text-secondary">Web Applications, APIs, Integrations & Data</div>
                    <div className="text-text-secondary">experiences:</div>
                    <div className="text-text-secondary">7+ Years</div>
                    <div className="text-text-secondary">available:</div>
                    <div className="text-text-secondary">for new opportunities</div>
                </div>
                <p className="text-accent mt-6">
                    {`> _`}
                </p>
            </div>
        </div>
    );
}