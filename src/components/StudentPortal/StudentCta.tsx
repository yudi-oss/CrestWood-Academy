import Link from "next/link";
import Reveal from "@/components/Reveal";
import { studentCta } from "@/lib/student-data";

export default function StudentCta() {
  return (
    <section className="bg-white py-20 text-center lg:py-24">
      <Reveal className="mx-auto max-w-[760px] px-4">
        <p className="ca-eyebrow mb-2 text-[#B7012C]">{studentCta.eyebrow}</p>

        <p className="text-[22px] font-medium leading-relaxed text-ca-navy sm:text-[26px]">
          {studentCta.text}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={studentCta.cta.href}
            className="rounded-sm bg-[#B7012C] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#7A0620]"
          >
            {studentCta.cta.label}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}