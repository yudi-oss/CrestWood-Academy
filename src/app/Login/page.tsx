import type { Metadata } from "next";
import LoginPage from "@/components/Login/LoginPage";

export const metadata: Metadata = {
  title: "Login | Crestwood Academy",
};

export default function Page() {
  return <LoginPage />;
}