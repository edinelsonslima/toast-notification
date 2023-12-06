import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, exclude: ["src/app", "index.html"] }),
  ],
  build: {
    lib: {
      entry: path.resolve("src", "index.ts"),
      name: "toast-notification",
      formats: ["es", "umd"],
      fileName: (format) => `toast-notification.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
