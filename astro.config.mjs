import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astromedia.dev",
  integrations: [tailwind(), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
