// ─────────────────────────────────────────────────────────────
// Sample data for the student portal (/student) – the landing page
// a signed-in student sees. Replace with real records when the
// student records system is connected.
// ─────────────────────────────────────────────────────────────

export type StudentProfile = {
  fullName: string;
  className: string;
  section: string;
  rollNumber: string;
  studentId: string;
  academicYear: string;
  homeroomTeacher: string;
  email: string;
};

export const studentProfile: StudentProfile = {
  fullName: "Aarav Shrestha",
  className: "Grade 10",
  section: "A",
  rollNumber: "12",
  studentId: "CA-2083-0412",
  academicYear: "2083",
  homeroomTeacher: "Sushila Maharjan",
  email: "aarav.shrestha@crestwoodacademy.edu.np",
};

export type StudentStat = {
  label: string;
  value: string;
  note: string;
  /** `good` is green, `alert` is crimson, everything else is neutral. */
  tone?: "good" | "alert" | "neutral";
};

export const studentStats: StudentStat[] = [
  {
    label: "Attendance",
    value: "94%",
    note: "Present 168 of 178 days",
    tone: "good",
  },
  {
    label: "Overall Grade",
    value: "A",
    note: "GPA 4.6 out of 5.0",
    tone: "good",
  },
  {
    label: "Assignments Due",
    value: "2",
    note: "Next due this Friday",
    tone: "alert",
  },
  {
    label: "Fee Status",
    value: "Cleared",
    note: "Second term settled in full",
    tone: "neutral",
  },
];

export type PeriodSlot = {
  period: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  /** `done` periods are dimmed, `now` is the period in progress. */
  state: "done" | "now" | "next";
};

export const todaySchedule: PeriodSlot[] = [
  {
    period: "Period 1",
    time: "08:00 – 08:40",
    subject: "Nepali",
    teacher: "Bishnu Bahadur Karki",
    room: "Room 204",
    state: "done",
  },
  {
    period: "Period 2",
    time: "08:45 – 09:25",
    subject: "English",
    teacher: "Rajendra Prasad Adhikari",
    room: "Room 204",
    state: "done",
  },
  {
    period: "Period 3",
    time: "09:30 – 10:10",
    subject: "Mathematics",
    teacher: "Nirmala Poudel",
    room: "Room 204",
    state: "now",
  },
  {
    period: "Period 4",
    time: "10:30 – 11:10",
    subject: "Integrated Science",
    teacher: "Deepak Kumar Shrestha",
    room: "Science Block 2",
    state: "next",
  },
  {
    period: "Period 5",
    time: "11:15 – 11:55",
    subject: "Social Science",
    teacher: "Gita Kumari Adhikari",
    room: "Room 118",
    state: "next",
  },
  {
    period: "Period 6",
    time: "11:55 – 12:35",
    subject: "Information & Communication Technology",
    teacher: "Sanjay Tamang",
    room: "Computer Lab 1",
    state: "next",
  },
];

export type SubjectResult = {
  subject: string;
  teacher: string;
  fullMarks: number;
  obtained: number;
  grade: string;
};

export const subjectResults: SubjectResult[] = [
  {
    subject: "Nepali",
    teacher: "Bishnu Bahadur Karki",
    fullMarks: 100,
    obtained: 92,
    grade: "A+",
  },
  {
    subject: "English",
    teacher: "Rajendra Prasad Adhikari",
    fullMarks: 100,
    obtained: 85,
    grade: "A",
  },
  {
    subject: "Mathematics",
    teacher: "Nirmala Poudel",
    fullMarks: 100,
    obtained: 90,
    grade: "A+",
  },
  {
    subject: "Integrated Science",
    teacher: "Deepak Kumar Shrestha",
    fullMarks: 100,
    obtained: 83,
    grade: "A",
  },
  {
    subject: "Social Science",
    teacher: "Gita Kumari Adhikari",
    fullMarks: 100,
    obtained: 79,
    grade: "B+",
  },
  {
    subject: "Information & Communication Technology",
    teacher: "Sanjay Tamang",
    fullMarks: 100,
    obtained: 94,
    grade: "A+",
  },
  {
    subject: "Health & Physical Education",
    teacher: "Manisha Ghimire",
    fullMarks: 100,
    obtained: 88,
    grade: "A",
  },
  {
    subject: "Art & Design",
    teacher: "Prakash Bhattarai",
    fullMarks: 100,
    obtained: 91,
    grade: "A+",
  },
];

export type AssignmentStatus = "submitted" | "due" | "late";

export type Assignment = {
  title: string;
  subject: string;
  due: string;
  status: AssignmentStatus;
};

export const assignments: Assignment[] = [
  {
    title: "Essay: My Favourite Festival in 300 Words",
    subject: "English",
    due: "Submitted on Bhadra 12",
    status: "submitted",
  },
  {
    title: "Exercise 4.3 – Quadratic Equations, Questions 1–12",
    subject: "Mathematics",
    due: "Due Bhadra 18, 8:00 AM",
    status: "due",
  },
  {
    title: "Lab Record: Photosynthesis and Leaf Structure",
    subject: "Integrated Science",
    due: "Due Bhadra 19, 8:00 AM",
    status: "due",
  },
  {
    title: "Timeline Map: Formation of the Modern Nepali State",
    subject: "Social Science",
    due: "Submitted on Bhadra 10",
    status: "late",
  },
  {
    title: "Spreadsheet Practical: Attendance Tracker with Charts",
    subject: "Information & Communication Technology",
    due: "Submitted on Bhadra 11",
    status: "submitted",
  },
];

export type StudentNotice = {
  title: string;
  date: string;
  href: string;
};

export const studentNotices: StudentNotice[] = [
  {
    title: "First term examination routine published",
    date: "Bhadra 14",
    href: "/notice",
  },
  {
    title: "Inter-house sports competition – registration closes Friday",
    date: "Bhadra 13",
    href: "/notice",
  },
  {
    title: "Library issue week: return borrowed books before the break",
    date: "Bhadra 11",
    href: "/notice",
  },
];

export type QuickLink = {
  label: string;
  description: string;
  href: string;
  /** Matches one of the section ids on this page when it is an in-page jump. */
  anchor?: boolean;
};

export const quickLinks: QuickLink[] = [
  {
    label: "Today's Schedule",
    description: "Period-wise timetable with teachers and rooms",
    href: "#schedule",
    anchor: true,
  },
  {
    label: "Term Results",
    description: "Subject-wise marks and grades for the term",
    href: "#results",
    anchor: true,
  },
  {
    label: "Assignments",
    description: "Submitted, due and late coursework",
    href: "#assignments",
    anchor: true,
  },
  {
    label: "School Notices",
    description: "Circulars issued for students",
    href: "/notice",
  },
];

export const studentCta = {
  eyebrow: "Need help?",
  text: "The Account Section handles fee receipts, report cards and portal access. Call 014370246 or write to the office if something on this page looks wrong.",
  cta: { label: "Contact the School", href: "/contact" },
};