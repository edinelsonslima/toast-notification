import { readFile, writeFile } from "fs/promises";
import path from "path";
import { minify } from 'terser';

async function minifyBuildedFileJs() {
  const filePath = path.resolve(import.meta.dirname, "dist/index.es.js")

  const content = await readFile(filePath, "utf8");

  const minifiedContent = await minify(content, {
    compress: true,
    format: {
      comments: false,
    }
  });

  if (minifiedContent.error) return console.error(minifiedContent.error);

  await writeFile(filePath, minifiedContent.code);

  return console.log("File minified successfully");
}

minifyBuildedFileJs();
