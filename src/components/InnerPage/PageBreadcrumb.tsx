import Link from "next/link";

export type Crumb = { label: string; href?: string };

/**
 * Shared breadcrumb strip for every inner page. Crimson for links (the same
 * accent as the nav's Apply Now button), navy for the current page, on the
 * site's off-white paper tone.
 */
export default function PageBreadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-neutral-200/80 bg-ca-paper"
    >
      <ol className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-2 gap-y-1 px-6 py-3 text-[13px]">
        {trail.map((item, i) => {
          const last = i === trail.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-neutral-400">
                  /
                </span>
              )}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="text-ca-crimson transition-colors hover:text-ca-crimson-deep hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={last ? "font-medium text-ca-navy" : "text-neutral-600"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
