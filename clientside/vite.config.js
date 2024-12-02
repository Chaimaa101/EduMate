import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../public/build", // Output build files to Laravel's public/react directory
    emptyOutDir: true, // Clear the output directory before building
  },
  server: {
    open: true,
    proxy: {
      "/api": "http://127.0.0.1:8000", // Proxy API requests to Laravel during development
    },
  },
});
