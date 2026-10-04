import Footer from "@/components/HomePage/Footer";
import NoticeTicker from "@/components/HomePage/NoticeTicker";
import StudentAssignments from "@/components/StudentPortal/StudentAssignments";
import StudentCta from "@/components/StudentPortal/StudentCta";
import StudentHero from "@/components/StudentPortal/StudentHero";
import StudentOverview from "@/components/StudentPortal/StudentOverview";
import StudentResources from "@/components/StudentPortal/StudentResources";
import StudentResults from "@/components/StudentPortal/StudentResults";
import StudentSchedule from "@/components/StudentPortal/StudentSchedule";

export default function StudentPortal() {
  return (
    <>
      <StudentHero />

      <main>
        <StudentOverview />

        {/* Reuses the homepage notice band so portal and home read alike */}
        <NoticeTicker />

        <StudentSchedule />
        <StudentResults />
        <StudentAssignments />
        <StudentResources />
        <StudentCta />
      </main>

      <Footer />
    </>
  );
}