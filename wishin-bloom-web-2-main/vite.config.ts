
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path from "path"; // Removed, not needed for Vite alias
// import { resolve } from 'path'; // Not needed, use Vite's alias string directly
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
