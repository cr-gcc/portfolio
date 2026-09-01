import { Outlet } from 'react-router'

export function MainLayout() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <main id="main" className="min-h-screen">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
