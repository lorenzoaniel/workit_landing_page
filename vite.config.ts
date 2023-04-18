import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), postcssImport(), tailwindcss("./tailwind.config.js")],
});
