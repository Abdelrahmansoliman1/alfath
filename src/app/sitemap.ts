import type { MetadataRoute } from "next";
import { navItems } from "@/components/common/Navbar/constant";

export const dynamic = "force-static";

const BASE_URL = "https://alfathshipping.com";

// Built from the navbar links, so new pages added there are included automatically.
// Paths end with "/" to match next.config.ts (trailingSlash: true).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = navItems.flatMap((item) => [
    item.path,
    ...(item.list?.map((sub) => sub.path) ?? []),
  ]);

  return paths.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "/" : `${path}/`}`,
    lastModified: new Date(),
    priority: path === "/" ? 1 : 0.8,
  }));
}
