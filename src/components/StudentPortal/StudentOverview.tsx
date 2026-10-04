import Image from "next/image";
import Link from "next/link";
import Reveal, { RevealGroup } from "@/components/Reveal";
import LogoutButton from "@/components/StudentPortal/LogoutButton";
import { studentProfile, studentStats } from "@/lib/student-data";

export default function StudentOverview() {
  return (
    <section
      id="profile"
      className="scroll-mt-28 bg-[#f8f7f4] py-16 lg:scroll-mt-32 lg:py-20"
    >
      <div className="mx-auto max-w-[1100px] px-4">
        {/* Profile card */}
        <Reveal direction="up">
          <div className="border border-[#ddd] bg-white p-7 shadow-sm lg:p-9">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
              <Image
                src="/Images/logo.png"
                alt="Crestwood Academy logo"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-sm border border-[#eee] bg-white p-1.5"
              />

              <div className="min-w-0">
                <p className="ca-eyebrow text-[#B7012C]">Student Profile</p>

                <h2 className="ca-section-title mt-1 text-ca-navy">
                  {studentProfile.fullName}
                </h2>

                <p className="mt-2 text-[14px] text-[#666]">
                  {studentProfile.className} &middot; Section{" "}
                  {studentProfile.section} &middot; Academic Year{" "}
                  {studentProfile.academicYear}
                </p>

                <dl className="mt-5 grid gap-x-8 gap-y-2 text-[14px] text-neutral-700 sm:grid-cols-2">
                  <div className="flex gap-2">
                    <dt className="text-neutral-500">Student ID:</dt>
                    <dd className="font-semibold text-[#00224A]">
                      {studentProfile.studentId}
                    </dd>
                  </div>

                  <div className="flex gap-2">
                    <dt className="text-neutral-500">Roll No.:</dt>
                    <dd className="font-semibold text-[#00224A]">
                      {studentProfile.rollNumber}
                    </dd>
                  </div>

                  <div className="flex gap-2">
                    <dt className="text-neutral-500">Homeroom Teacher:</dt>
                    <dd>{studentProfile.homeroomTeacher}</dd>
                  </div>

                  <div className="flex min-w-0 gap-2">
                    <dt className="shrink-0 text-neutral-500">Email:</dt>
                    <dd className="truncate">{studentProfile.email}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stat tiles */}
        <RevealGroup
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          step={90}
        >
          {studentStats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#ddd] bg-white p-6 transition-colors duration-200 hover:border-[#B7012C]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B7012C]">
                {stat.label}
              </p>

              <p className="mt-3 font-display text-[32px] font-bold uppercase leading-none text-[#00224A]">
                {stat.value}
              </p>

              <p className="mt-3 text-[13px] leading-relaxed text-[#666]">
                {stat.note}
              </p>
            </div>
          ))}
        </RevealGroup>

        {/* Account actions */}
        <Reveal
          direction="up"
          className="mt-8 flex flex-wrap items-center gap-4 border border-[#ddd] bg-white p-6"
        >
          <p className="mr-auto text-[14px] text-neutral-600">
            Report cards, fee receipts and portal passwords are issued by the
            Account Section.
          </p>

          <Link
            href="#assignments"
            className="rounded-sm bg-[#B7012C] px-6 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#7A0620]"
          >
            Pending Work
          </Link>

          <LogoutButton />
        </Reveal>
      </div>
    </section>
  );
}