import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8"));
const homepage = pkg.homepage;

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === "production" ? homepage : "/",
	plugins: [react(), postcssImport(), tailwindcss("./tailwind.config.js")],
});
