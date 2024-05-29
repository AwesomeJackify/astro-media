import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { remarkModifiedTime } from "./remark-modified-time.mjs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astromedia.dev",
  integrations: [tailwind(), sitemap(), react()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});
