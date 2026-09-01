export function ProfileTerminal() {
    return (
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 shadow-2xl shadow-black/30">

            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-blue-600" />
                <span className="h-3 w-3 rounded-full bg-blue-700" />
                <span className="h-3 w-3 rounded-full bg-blue-800" />
            </div>

            <div className="space-y-3 p-6 font-mono text-sm sm:text-base">
                <p className="mb-6">
                    <span className="text-blue-600">{`> cristobal`}</span>.profile
                </p>
                <p className="text-zinc-300">
                    <span>name:</span>{" "}<span>Cristobal Gutierrez Chavez</span>
                </p>
                <p className="text-zinc-300">
                    <span>role:</span>{" "}<span>Full Stack Developer</span>
                </p>
                <p className="text-zinc-300">
                    <span>location:</span>{" "}
                    <span>Mexico City, Mexico
                    </span>
                </p>
                <p className="text-zinc-300">
                    <span>focus:</span>{" "}
                    <span>
                        Web Application, APIs, Integrations & Data
                    </span>
                </p>
                <p className="text-zinc-300">
                    <span>experiences:</span>{" "}
                    <span>7+ Years</span>
                </p>
                <p className="text-zinc-300 mb-6">
                    <span>available:</span>{" "}
                    <span className="text-blue-600">for new opportunities</span>
                </p>
                <p>
                    <span className="text-blue-600">{`> _`}</span>
                </p>
            </div>
        </div>
    );
}