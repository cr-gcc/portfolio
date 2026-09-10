import { useLanguage } from "@/context/LanguageContext";

export function ProfileTerminal() {
    const { t } = useLanguage();

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
                    <span className="text-accent">{`> cristobal`}</span>.{t.hero.terminal.profile}
                </p>
                <div className="grid gap-2 grid-cols-[40%_60%]">
                    <div className="text-text-secondary">{t.hero.terminal.file_name}:</div>
                    <div className="text-text-secondary">Cristobal Gutierrez Chavez</div>
                    <div className="text-text-secondary">{t.hero.terminal.file_role}:</div>
                    <div className="text-text-secondary">{t.hero.role}</div>
                    <div className="text-text-secondary">{t.hero.terminal.file_location}:</div>
                    <div className="text-text-secondary">{t.hero.terminal.location}</div>
                    <div className="text-text-secondary">{t.hero.terminal.file_focus}:</div>
                    <div className="text-text-secondary">{t.hero.terminal.focus}</div>
                    <div className="text-text-secondary">{t.hero.terminal.file_experience}:</div>
                    <div className="text-text-secondary">{t.hero.terminal.experience}</div>
                    <div className="text-text-secondary">{t.hero.terminal.file_availability}:</div>
                    <div className="text-text-secondary">{t.hero.terminal.availability}</div>
                </div>
                <p className="text-accent mt-6">
                    {`> _`}
                </p>
            </div>
        </div>
    );
}