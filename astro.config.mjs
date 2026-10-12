import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://slimsuguru-art.github.io/Ndoka",
  base: "/Ndoka",
  trailingSlash: "always",
  integrations: [tailwind({ applyBaseStyles: false })],
  output: "static"
});
