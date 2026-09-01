export function ProfileTerminal() {
    return (
        <div className="
            overflow-hidden
            rounded-xl
            border border-blue-500/20
            shadow-2xl shadow-blue-950/30
            backdrop-blur-xs"
        >
            <div className="flex items-center gap-2 border-b border-blue-500/20 bg-blue-950/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-blue-600" />
                <span className="h-3 w-3 rounded-full bg-blue-700" />
                <span className="h-3 w-3 rounded-full bg-blue-800" />
            </div>
            <div className="space-y-3 p-6 font-mono text-sm sm:text-base">
                <p className="mb-6">
                    <span className="text-blue-600">{`> cristobal`}</span>.profile
                </p>
                <div className="grid gap-2 grid-cols-[40%_60%]">
                    <div className="text-zinc-400">name:</div>
                    <div className="text-zinc-300">Cristobal Gutierrez Chavez</div>
                    <div className="text-zinc-400">role:</div>
                    <div className="text-zinc-300">Full Stack Developer</div>
                    <div className="text-zinc-400">location:</div>
                    <div className="text-zinc-300">Mexico City, Mexico</div>
                    <div className="text-zinc-400">focus:</div>
                    <div className="text-zinc-300">Web Application, APIs, Integrations & Data</div>
                    <div className="text-zinc-400">experiences:</div>
                    <div className="text-zinc-300">7+ Years</div>
                    <div className="text-zinc-400">available:</div>
                    <div className="text-zinc-300">for new opportunities</div>
                </div>
                <p className="text-blue-600 mt-6">
                    {`> _`}
                </p>
            </div>
        </div>
    );
}