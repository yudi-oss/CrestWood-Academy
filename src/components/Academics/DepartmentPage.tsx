import { notFound } from "next/navigation";
import InnerPageLayout from "@/components/InnerPage/InnerPageLayout";
import { ACADEMICS_SECTION } from "@/components/Academics/academics-nav";
import { getDepartment } from "@/lib/academics-data";

export default function DepartmentPage({ slug }: { slug: string }) {
  const dept = getDepartment(slug);
  if (!dept) notFound();

  const ruled = dept.style === "ruled";

  return (
    <InnerPageLayout
      title={dept.label}
      sectionLabel="Academics"
      sectionHref="/academics/nepali-department"
      sections={[ACADEMICS_SECTION]}
      active={`/academics/${dept.slug}`}
    >
      <p className="ca-body mb-9 max-w-[68ch]">{dept.intro}</p>

      {dept.faculty.length === 0 ? (
        <p className="ca-body text-neutral-500">
          The faculty list for this department will be updated soon.
        </p>
      ) : (
        <div className="overflow-x-auto border border-neutral-200">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="bg-ca-navy text-white">
                <th className="w-14 px-4 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em]">
                  #
                </th>
                <th className="px-4 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Name
                </th>
                {ruled ? (
                  <th className="px-4 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em]">
                    Role &amp; Qualification
                  </th>
                ) : (
                  <>
                    <th className="hidden px-4 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em] sm:table-cell">
                      Role
                    </th>
                    <th className="px-4 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em]">
                      Qualification
                    </th>
                  </>
                )}
              </tr>
            </thead>

            <tbody className="text-[13.5px] text-neutral-800">
              {dept.faculty.map((f, i) => (
                <tr
                  key={`${f.name}-${i}`}
                  className="border-t border-neutral-200 transition-colors even:bg-ca-paper/60 hover:bg-ca-paper"
                >
                  <td className="px-4 py-3 align-top text-neutral-400 tabular-nums">
                    {i + 1}
                  </td>
                  <td className="px-4 py-3 align-top font-medium text-ca-navy">
                    {f.name}
                  </td>
                  {ruled ? (
                    <td className="px-4 py-3 align-top">
                      {f.role && <span className="text-ca-crimson">{f.role}</span>}
                      {f.role && ", "}
                      {f.qualification}
                    </td>
                  ) : (
                    <>
                      <td className="hidden px-4 py-3 align-top sm:table-cell">
                        {f.role && (
                          <span className="text-ca-crimson">{f.role}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top">
                        {f.role && (
                          <span className="text-ca-crimson sm:hidden">
                            {f.role},{" "}
                          </span>
                        )}
                        {f.qualification}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </InnerPageLayout>
  );
}
