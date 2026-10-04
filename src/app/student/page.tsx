import type { Metadata } from "next";
import StudentPortal from "@/components/StudentPortal/StudentPortal";

export const metadata: Metadata = {
  title: "Student Portal | Crestwood Academy",
  description:
    "Student landing page with today's class schedule, term results, assignments and school notices for Crestwood Academy students.",
};

export default function Page() {
  return <StudentPortal />;
}