import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "./src"),
            "@app": path.resolve(import.meta.dirname, "./src/app"),
            "@pages": path.resolve(import.meta.dirname, "./src/pages"),
            "@layouts": path.resolve(import.meta.dirname, "./src/layouts"),
            "@components": path.resolve(import.meta.dirname, "./src/components"),
        },
    },
})
