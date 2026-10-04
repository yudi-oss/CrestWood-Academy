import type { SidebarSection } from "@/components/InnerPage/PageSidebar";
import { bhanjyangVolumesSorted } from "@/lib/bhanjyang-data";

export const BHANJYANG_SECTION: SidebarSection = {
  title: "Bhanjyang — Annual Magazine",
  items: bhanjyangVolumesSorted.map((v) => ({
    label: v.title,
    href: `/bhanjyang/${v.slug}`,
    meta: `${v.year}`,
  })),
};
