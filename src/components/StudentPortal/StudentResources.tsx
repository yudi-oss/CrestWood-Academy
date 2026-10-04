import Link from "next/link";
import Reveal, { RevealGroup } from "@/components/Reveal";
import { quickLinks, studentNotices } from "@/lib/student-data";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function StudentResources() {
  return (
    <section className="bg-[#f8f7f4] py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 lg:grid-cols-2 lg:gap-14">
        {/* Quick links */}
        <Reveal
          id="resources"
          direction="right"
          className="scroll-mt-28 lg:scroll-mt-32"
        >
          <h2 className="ca-section-title mb-8 text-ca-navy">Quick Links</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-4 border border-[#ddd] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#B7012C] hover:shadow-md"
              >
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-[#00224A] transition-colors group-hover:text-[#B7012C]">
                    {link.label}
                  </p>
                  <p className="mt-1 text-[13px] text-[#666]">
                    {link.description}
                  </p>
                </div>

                <ArrowIcon className="h-4 w-4 shrink-0 text-[#B7012C] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Notices */}
        <Reveal
          id="notices"
          direction="left"
          delay={120}
          className="scroll-mt-28 lg:scroll-mt-32"
        >
          <h2 className="ca-section-title mb-8 text-ca-navy">
            Notices For Students
          </h2>

          <ul className="space-y-4">
            {studentNotices.map((notice) => (
              <li key={notice.title}>
                <Link
                  href={notice.href}
                  className="group block border-l-4 border-[#B7012C] bg-white p-5 transition-colors duration-200 hover:bg-[#f5f5f3]"
                >
                  <p className="text-[15px] font-semibold leading-snug text-[#00224A] transition-colors group-hover:text-[#B7012C]">
                    {notice.title}
                  </p>
                  <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#B7012C]">
                    {notice.date}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/notice"
            className="mt-8 inline-block text-[13px] font-bold uppercase tracking-wide text-ca-navy underline decoration-[#B7012C] decoration-2 underline-offset-8 transition-colors hover:text-[#B7012C]"
          >
            All school notices
          </Link>
        </Reveal>
      </div>

      {/* Help band */}
      <RevealGroup
        className="mx-auto mt-16 grid max-w-[1100px] gap-4 px-4 sm:grid-cols-1"
        step={90}
      >
        <div className="border border-[#ddd] bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B7012C]">
            Absent?
          </p>
          <p className="mt-3 text-[14px] leading-[1.9] text-neutral-600">
            Inform your homeroom teacher before the period ends.
          </p>
        </div>
      </RevealGroup>
    </section>
  );
}