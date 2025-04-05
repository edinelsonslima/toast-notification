import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      // rollupTypes: true,
      // insertTypesEntry: true,
      include: ['src'],
      exclude: ["src/app"],
      outDir: 'lib/dist'
    }),
  ],
  build: {
    outDir: 'lib/dist',
    lib: {
      entry: path.resolve("src", "index.ts"),
      name: "toast.notification",
      formats: ["es",],
      fileName: (format) => `index.${format}.js`,
      cssFileName: 'style'
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
