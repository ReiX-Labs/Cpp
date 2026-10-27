import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo name = "Cpp" -> GitHub Pages serves it at https://<user>.github.io/Cpp/
// Preview must use the same base as the production bundle; dev stays at root.
export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/Cpp/" : "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1200,
  },
}));
