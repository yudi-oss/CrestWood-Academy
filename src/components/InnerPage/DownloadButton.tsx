/**
 * The download call-to-action used by every notice and magazine page. Crimson
 * to match the nav's Apply Now button.
 */
export default function DownloadButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-2 rounded-sm bg-ca-crimson px-6 py-3 text-[13.5px] font-medium text-white transition-colors hover:bg-ca-crimson-deep"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      <span>{children}</span>
    </a>
  );
}
