import { techBagesBasic } from "@data/techBages"

export function TechBage() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techBagesBasic.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                    <span className="text-lg font-semibold">{tech.name}</span>
                </div>
            ))}
        </div>
    )
}   