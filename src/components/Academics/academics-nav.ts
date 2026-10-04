import type { SidebarSection } from "@/components/InnerPage/PageSidebar";
import { departments } from "@/lib/academics-data";

export const ACADEMICS_SECTION: SidebarSection = {
  title: "Departments",
  items: departments.map((d) => ({
    label: d.label,
    href: `/academics/${d.slug}`,
  })),
};
