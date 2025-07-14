import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// Configuración de Astro para el portafolio de Dcano96
// Repositorio: https://github.com/Dcano96/Dcano96.github.io
// Si no vas a usar vercel analytics puedes eliminar analytics
// Si quieres remover vercel de tu proyecto puedes hacer npm uninstall vercel
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  // Configuración específica para GitHub Pages
  site: 'https://dcano96.github.io',
  base: '/',
});

// Si no tienes vercel, la configuración sería:
// export default defineConfig({
//   site: 'https://dcano96.github.io',
//   base: '/'
// });
