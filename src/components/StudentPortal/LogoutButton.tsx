"use client";

import { useRouter } from "next/navigation";

const LOGOUT_CLASSES =
  "rounded-sm border border-ca-navy/40 px-6 py-3 text-[13px] font-bold uppercase tracking-wide text-ca-navy transition-colors hover:border-[#B7012C] hover:text-[#B7012C]";

export default function LogoutButton({
  className = LOGOUT_CLASSES,
}: {
  className?: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/Login")}
      className={className}
    >
      Log Out
    </button>
  );
}