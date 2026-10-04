import InnerPageLayout from "@/components/InnerPage/InnerPageLayout";
import { ABOUT_US_SECTION } from "@/components/AboutUS/AboutUsSideBar";

/**
 * Every About Us subpage renders through this one shell. `active` is the href
 * of the page being viewed, so the rail highlights it.
 */
export default function AboutUsPageLayout({
  title,
  crumbLabel,
  active,
  children,
}: {
  title: string;
  /** Breadcrumb text when it should read differently from the heading. */
  crumbLabel?: string;
  /** Href of the current page, matching one of ABOUT_US_PAGES. */
  active: string;
  children: React.ReactNode;
}) {
  return (
    <InnerPageLayout
      title={title}
      crumbLabel={crumbLabel}
      sectionLabel="About Us"
      sectionHref="/about-us"
      sections={[ABOUT_US_SECTION]}
      active={active}
    >
      {children}
    </InnerPageLayout>
  );
}
