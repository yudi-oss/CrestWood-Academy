import PageBanner from "@/components/PageBanner";
import Footer from "@/components/HomePage/Footer";
import Reveal from "@/components/Reveal";
import PageBreadcrumb from "./PageBreadcrumb";
import PageSidebar, { type SidebarSection } from "./PageSidebar";

/**
 * The single inner-page shell for About Us, Academics, Notice and Bhanjyang
 * and all of their subpages.
 *
 * It owns everything that used to be copy-pasted across 17 layout files: the
 * hero banner, the breadcrumb, the content/sidebar grid and the footer. Pages
 * only supply their title, their links and their body copy, so every section
 * reads as one site.
 */
export default function InnerPageLayout({
  title,
  crumbLabel,
  sectionLabel,
  sectionHref,
  sections,
  active,
  sidebarColumns = 1,
  children,
}: {
  /** Page title. Rendered as the banner's h1. */
  title: string;
  /** Breadcrumb text for the last crumb when it should differ from `title`. */
  crumbLabel?: string;
  /** Small caps label above the body copy, e.g. "About Us". */
  sectionLabel?: string;
  /** Route the section label links to, e.g. "/about-us". */
  sectionHref?: string;
  /** Links for the right-hand rail. */
  sections: SidebarSection[];
  /** Href of the current link in the rail. */
  active?: string;
  /** Notice lists are long, so they run two columns wide — and the rail that
   *  holds them needs to be wider to match. */
  sidebarColumns?: 1 | 2;
  children: React.ReactNode;
}) {
  const railWidth = sidebarColumns === 2 ? "520px" : "320px";

  return (
    <>
      <PageBanner
        title={title}
        minHeightClass="min-h-[320px] lg:min-h-[360px]"
        titlePaddingClass="pt-[130px] lg:pt-[155px]"
      />

      <PageBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          ...(sectionLabel
            ? [{ label: sectionLabel, href: sectionHref }]
            : []),
          { label: crumbLabel ?? title },
        ]}
      />

      <main className="bg-white">
        <div
          className="mx-auto max-w-[1240px] px-6 py-14 lg:grid lg:gap-x-16 lg:py-16 xl:gap-x-20"
          style={{
            gridTemplateColumns: `minmax(0, 1fr) ${railWidth}`,
          }}
        >
          <article className="min-w-0">
            {sectionLabel && (
              <Reveal direction="right">
                <p className="ca-eyebrow mb-4 text-ca-crimson">{sectionLabel}</p>
              </Reveal>
            )}
            <Reveal direction="right">{children}</Reveal>
          </article>

          {sections.length > 0 && (
            <div className="mt-12 lg:mt-0">
              <PageSidebar
                sections={sections}
                active={active}
                columns={sidebarColumns}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
