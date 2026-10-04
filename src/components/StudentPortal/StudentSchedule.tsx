import Reveal, { RevealGroup } from "@/components/Reveal";
import { todaySchedule } from "@/lib/student-data";

export default function StudentSchedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-28 bg-white py-16 lg:scroll-mt-32 lg:py-20"
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <Reveal direction="right">
          <p className="ca-eyebrow mb-3 text-[#B7012C]">Today</p>
          <h2 className="ca-section-title text-ca-navy">Class Schedule</h2>
          <p className="ca-body mt-3 max-w-[620px]">
            Period-wise timetable for the current day, with the subject
            teacher and room for each slot.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 space-y-3" step={70}>
          {todaySchedule.map((slot) => {
            const isNow = slot.state === "now";
            const isDone = slot.state === "done";

            return (
              <div
                key={slot.period}
                className={`flex flex-col gap-2 border-l-4 py-4 pl-5 transition-colors sm:flex-row sm:items-center sm:gap-6 ${
                  isNow
                    ? "border-[#B7012C] bg-[#f8f7f4]"
                    : "border-transparent bg-[#f8f7f4] hover:border-[#ddd]"
                } ${isDone ? "opacity-60" : ""}`}
              >
                <div className="sm:w-[140px]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#B7012C]">
                    {slot.period}
                  </p>
                  <p className="mt-1 text-[13px] text-[#666]">{slot.time}</p>
                </div>

                <div className="sm:w-[220px]">
                  <p className="text-[15px] font-semibold text-[#00224A]">
                    {slot.subject}
                  </p>
                  <p className="mt-1 text-[13px] text-[#666]">
                    {slot.teacher}
                  </p>
                </div>

                <div className="sm:ml-auto sm:text-right">
                  <p className="text-[13px] text-neutral-600">{slot.room}</p>
                  {isNow && (
                    <p className="mt-1 inline-block rounded-sm bg-[#B7012C] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      In progress
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}