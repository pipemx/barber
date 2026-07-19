import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // process.cwd() en lugar de __dirname: evita el conflicto entre la ruta
    // corta 8.3 de Windows (FELIPE~1) del proceso y la ruta larga del archivo.
    root: process.cwd(),
  },
};

export default nextConfig;
