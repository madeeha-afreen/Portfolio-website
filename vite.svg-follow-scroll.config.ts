import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
    },
  },
  build: {
    lib: {
      entry: path.resolve(root, "svg-follow-scroll-main.tsx"),
      name: "svgFollowScroll",
      formats: ["es"],
      fileName: "svg-follow-scroll",
    },
    outDir: "dist-island",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "svg-follow-scroll[extname]",
        entryFileNames: "svg-follow-scroll.js",
      },
    },
  },
});
