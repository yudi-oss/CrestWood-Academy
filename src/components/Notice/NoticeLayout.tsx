import InnerPageLayout from "@/components/InnerPage/InnerPageLayout";
import { NOTICE_SECTION, noticeHref } from "@/lib/notices-data";

/**
 * Shell shared by every notice subpage. `title` is the notice headline, which
 * is also the label it carries in the two-column notice rail.
 */
export default function NoticeLayout({
  title,
  crumbLabel,
  children,
}: {
  title: string;
  /** Breadcrumb text when it should read differently from the heading. */
  crumbLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <InnerPageLayout
      title={title}
      crumbLabel={crumbLabel}
      sectionLabel="Notice"
      sectionHref="/notice"
      sections={[NOTICE_SECTION]}
      active={noticeHref(title)}
      sidebarColumns={2}
    >
      {children}
    </InnerPageLayout>
  );
}
