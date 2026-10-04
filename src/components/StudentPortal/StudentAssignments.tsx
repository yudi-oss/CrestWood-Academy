import Reveal, { RevealGroup } from "@/components/Reveal";
import { assignments, type AssignmentStatus } from "@/lib/student-data";

const STATUS: Record<AssignmentStatus, { label: string; className: string }> =
  {
    submitted: {
      label: "Submitted",
      className: "border border-ca-navy text-ca-navy",
    },
    due: {
      label: "Due",
      className: "border border-[#B7012C] text-[#B7012C]",
    },
    late: {
      label: "Submitted Late",
      className: "border border-[#ddd] text-[#666]",
    },
  };

export default function StudentAssignments() {
  const dueCount = assignments.filter((a) => a.status === "due").length;

  return (
    <section
      id="assignments"
      className="scroll-mt-28 bg-white py-16 lg:scroll-mt-32 lg:py-20"
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <Reveal direction="right">
          <p className="ca-eyebrow mb-3 text-[#B7012C]">
            {dueCount} pending
          </p>
          <h2 className="ca-section-title text-ca-navy">Assignments</h2>
          <p className="ca-body mt-3 max-w-[620px]">
            Classwork collected by each subject teacher. Work handed in after
            the deadline is marked late and is not counted towards term marks.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" step={80}>
          {assignments.map((assignment) => {
            const status = STATUS[assignment.status];

            return (
              <article
                key={assignment.title}
                className="flex h-full flex-col border border-[#ddd] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#B7012C] hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B7012C]">
                    {assignment.subject}
                  </p>

                  <span
                    className={`shrink-0 rounded-sm border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${status.className}`}
                  >
                    {status.label}
                  </span>
                </div>

                <h3 className="mt-3 text-[16px] font-semibold leading-snug text-[#00224A]">
                  {assignment.title}
                </h3>

                <p className="mt-auto pt-4 text-[13px] text-[#666]">
                  {assignment.due}
                </p>
              </article>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}