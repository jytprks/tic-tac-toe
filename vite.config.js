import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // this exposes the dev server to your local network
  },
  plugins: [react()],
});
