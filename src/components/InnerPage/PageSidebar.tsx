import Link from "next/link";
import Reveal from "@/components/Reveal";

export type SidebarItem = {
  label: string;
  href: string;
  /** Optional meta line shown under the label, e.g. a magazine's year. */
  meta?: string;
};

export type SidebarSection = {
  /** Heading on the navy cap of the panel. */
  title: string;
  items: SidebarItem[];
};

/**
 * The one sidebar used by every inner page (About Us, Academics, Notice,
 * Bhanjyang). A navy cap carries the section name, then the links sit in a
 * hairline-bordered list. The active link fills navy with white type; the rest
 * reveal a crimson rule on hover, so accent colour always means "action".
 */
export default function PageSidebar({
  sections,
  active,
  columns = 1,
}: {
  sections: SidebarSection[];
  /** Href of the link to mark as current. */
  active?: string;
  /** Notice lists are long, so they run two columns wide. */
  columns?: 1 | 2;
}) {
  const twoUp = columns === 2;

  return (
    <Reveal direction="left" delay={120} className="lg:sticky lg:top-28">
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="bg-ca-navy px-4 py-2.5 font-display text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              {section.title}
            </h2>

            <ul
              className={`border-x border-b border-neutral-200 ${
                twoUp
                  ? "sm:grid sm:grid-cols-2"
                  : "divide-y divide-neutral-200"
              }`}
            >
              {section.items.map((item) => {
                const isActive = item.href === active;

                return (
                  <li
                    key={item.href}
                    className={
                      twoUp
                        ? "border-b border-neutral-200 last:border-b-0 sm:border-r sm:border-neutral-200 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                        : ""
                    }
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative block py-3 pl-4 pr-3 text-[13.5px] leading-snug transition-colors before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:transition-colors ${
                        isActive
                          ? "bg-ca-navy font-medium text-white before:bg-ca-crimson"
                          : "text-neutral-700 before:bg-transparent hover:bg-ca-paper hover:text-ca-crimson hover:before:bg-ca-crimson"
                      }`}
                    >
                      {item.label}
                      {item.meta && (
                        <span
                          className={`mt-1 block text-[12px] ${
                            isActive ? "text-white/70" : "text-neutral-400"
                          }`}
                        >
                          {item.meta}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </Reveal>
  );
}
