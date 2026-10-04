import Reveal from "@/components/Reveal";
import { subjectResults } from "@/lib/student-data";

const GRADE_TONE: Record<string, string> = {
  "A+": "bg-[#B7012C] text-white",
  A: "border border-[#B7012C] text-[#B7012C]",
  "B+": "border border-[#00224A] text-[#00224A]",
};

export default function StudentResults() {
  const totalFullMarks = subjectResults.reduce((sum, s) => sum + s.fullMarks, 0);
  const totalObtained = subjectResults.reduce((sum, s) => sum + s.obtained, 0);
  const percentage = Math.round((totalObtained / totalFullMarks) * 100);

  return (
    <section
      id="results"
      className="scroll-mt-28 bg-[#f8f7f4] py-16 lg:scroll-mt-32 lg:py-20"
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <Reveal direction="right">
          <p className="ca-eyebrow mb-3 text-[#B7012C]">First Term 2083</p>
          <h2 className="ca-section-title text-ca-navy">Subject Results</h2>
        </Reveal>

        <Reveal
          direction="up"
          className="mt-8 grid gap-4 sm:grid-cols-3"
          delay={80}
        >
          <div className="border border-[#ddd] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B7012C]">
              Aggregate
            </p>
            <p className="mt-3 font-display text-[32px] font-bold uppercase leading-none text-[#00224A]">
              {totalObtained} / {totalFullMarks}
            </p>
          </div>

          <div className="border border-[#ddd] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B7012C]">
              Percentage
            </p>
            <p className="mt-3 font-display text-[32px] font-bold uppercase leading-none text-[#00224A]">
              {percentage}%
            </p>
          </div>

          <div className="border border-[#ddd] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B7012C]">
              Division
            </p>
            <p className="mt-3 font-display text-[32px] font-bold uppercase leading-none text-[#00224A]">
              Distinction
            </p>
          </div>
        </Reveal>

        {/* Marks table */}
        <Reveal direction="left" className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse bg-white text-left">
            <thead>
              <tr className="bg-[#00224A] text-white">
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[0.15em]">
                  Subject
                </th>
                <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[0.15em]">
                  Teacher
                </th>
                <th className="px-5 py-4 text-right text-[12px] font-bold uppercase tracking-[0.15em]">
                  Full Marks
                </th>
                <th className="px-5 py-4 text-right text-[12px] font-bold uppercase tracking-[0.15em]">
                  Obtained
                </th>
                <th className="px-5 py-4 text-right text-[12px] font-bold uppercase tracking-[0.15em]">
                  Grade
                </th>
              </tr>
            </thead>

            <tbody>
              {subjectResults.map((row) => (
                <tr
                  key={row.subject}
                  className="border-b border-[#eee] transition-colors hover:bg-[#f8f7f4]"
                >
                  <td className="px-5 py-4 text-[15px] font-semibold text-[#00224A]">
                    {row.subject}
                  </td>
                  <td className="px-5 py-4 text-[14px] text-neutral-600">
                    {row.teacher}
                  </td>
                  <td className="px-5 py-4 text-right text-[14px] text-neutral-600">
                    {row.fullMarks}
                  </td>
                  <td className="px-5 py-4 text-right text-[15px] font-semibold text-[#00224A]">
                    {row.obtained}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <span
                      className={`inline-block min-w-[46px] rounded-sm px-2.5 py-1 text-center text-[12px] font-bold ${
                        GRADE_TONE[row.grade] ?? "border border-[#ddd] text-[#666]"
                      }`}
                    >
                      {row.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal direction="up" delay={120}>
          <p className="mt-5 text-[13px] text-[#666]">
            Provisional marks only. Published report cards are signed by the
            homeroom teacher and collected from the Account Section.
          </p>
        </Reveal>
      </div>
    </section>
  );
}