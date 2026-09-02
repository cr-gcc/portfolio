import { Outlet } from 'react-router'
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"

export function MainLayout() {
    return (
        <div className="relative min-h-screen overflow-clip bg-[#060b18] text-zinc-100">
            {/* Fondo de Lineas */}
            <div className="
                pointer-events-none
                absolute inset-0
                opacity-[0.035]
                [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)]
                [background-size:48px_48px]"/>
            {/* Glow superior izquierdo */}
            <div className="
                pointer-events-none
                absolute -left-40 -top-40
                h-[500px] w-[500px]
                rounded-full
                bg-blue-600/20
                blur-[140px]"/>
            {/* Glow derecho */}
            <div className="
                pointer-events-none
                absolute right-[-180px] top-[20%]
                h-[520px] w-[520px]
                rounded-full
                bg-blue-500/15
                blur-[160px]"/>
            {/* Glow inferior */}
            <div className="
                pointer-events-none
                absolute bottom-[-220px] left-[30%]
                h-[480px] w-[480px]
                rounded-full
                bg-sky-500/10
                blur-[150px]"/>
            {/* Contenido principal */}
            <Header />
            <main id="main" className="font-sans relative z-10">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}