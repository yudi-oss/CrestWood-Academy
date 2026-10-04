import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";

import { studentProfile } from "@/lib/student-data";

export default function StudentHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#00224A]">
      {/* Campus photo, darkened so the white type keeps its contrast */}
      <Image
        src="/Images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#00224A]/85" />

      
      <Navbar />

      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-[150px] lg:pb-24 lg:pt-[190px]">
        <p className="ca-eyebrow mb-4 text-white/70">Student Portal</p>

        <h1 className="max-w-[720px] font-display text-[38px] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[64px]">
          Welcome back,
          <br />
          {studentProfile.fullName}
        </h1>

        <p className="mt-6 max-w-[560px] text-[15px] leading-[1.9] text-white/85">
          {studentProfile.className} &middot; Section {studentProfile.section} ·
          Roll No. {studentProfile.rollNumber} · Academic Year{" "}
          {studentProfile.academicYear}. Your schedule, results and
          assignments for the term are all below.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#results"
            className="bg-[#B7012C] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#7A0620]"
          >
            View Results
          </Link>

          <Link
            href="#schedule"
            className="border border-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-[#00224A]"
          >
            Today&apos;s Schedule
          </Link>
        </div>
      </div>
    </section>
  );
}