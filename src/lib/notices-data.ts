import type { SidebarSection } from "@/components/InnerPage/PageSidebar";

/** Converts a notice label into the URL slug used across the Notice section. */
export function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[.,()/]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Every notice, in the order the old two-column sidebar listed them. */
export const NOTICE_LABELS = [
  "Class 5 Scholarship Result, 2082 B.S.",
  "Class 11 Book List, 2082 B.S.",
  "Invitation for Bids No: CA/NCB/Works/01/2082-83",
  "Teachers and Psychological Counsellor Wanted",
  "Scholarship Application Form for the A/Y, 2083",
  "Wanted Non-teaching staff",
  "Class 5 Entrance Exam",
  "A level Admission Notice, 2083",
  "Interaction Programme for new parents",
  "Book List for the Academic Year, 2083 ( Classes 5 to 10)",
  "Notice for Written and Practical Test",
  "Auction Form",
  "Notice for Interview (Staff Selection)",
  "Notice (Staff Selection)",
  "Book Lists for 2083 (Post SEE Students - Class 11 & 12)",
  "Application Form, Internal Promotion",
  "Vacancy Notice for the post of Vice-Principal",
  "Graduation Ceremony",
  "Revised Tender Notice (Wall Construction)",
  "A Level Book List, 2025",
  "Ration Tender Notice",
  "Obituary: Mr. Ken Jones",
  "Class 5 Scholarship Notice for the A/Y, 2083",
  "Fee-Paying Admission Notice for the A/Y, 2083 B.S.",
  "Job Application Form",
  "Class 6 to 9 Entrance Examination",
  "Results of Entrance Examinations 2083",
  "CIE A Level Entrance Exam Results 2026",
  "Class 5 Scholarship Results, 2083 B.S.",
  "Admission open for Grade 11",
  "Auction Notice",
  "NEB Class 11 Entrance Results Published",
  "Book Lists for 2083 (Post SEE Students A1)",
  "Statistics Teacher Wanted",
  "Press Released",
  "INVITATION FOR BIDS",
  "CA Contributes Rs. 14 Lakh to the Prime Minister's Disaster Relief Fund",
];

/** Resolves the href for a notice title, so pages can highlight themselves. */
export function noticeHref(title: string): string {
  return `/notice/${slugify(title)}`;
}

/** The single source of truth for the notice rail, shared by every subpage. */
export const NOTICE_SECTION: SidebarSection = {
  title: "Notice",
  items: NOTICE_LABELS.map((label) => ({
    label,
    href: noticeHref(label),
  })),
};
