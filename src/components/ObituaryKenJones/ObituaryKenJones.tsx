import Image from "next/image";
import NoticeLayout from "@/components/Notice/NoticeLayout";

export default function ObituaryKenJones() {
  return (
    <NoticeLayout title="Obituary: Mr. Ken Jones">
      <div className="max-w-[68ch] text-[15px] leading-[1.9] text-neutral-700">
        {/* Swap this for the real photo once you have it —
            /Images/notice/ken-jones.jpg, for example. */}
        <figure className="w-full max-w-[300px] border border-neutral-200 bg-white p-2 shadow-sm">
          <div className="relative aspect-square w-full">
            <Image
              src="https://picsum.photos/seed/ken-jones-obituary/560/560"
              alt="Mr. Ken Jones"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </figure>

        <p className="mt-6 font-bold text-neutral-800">Obituary: Mr. Ken Jones</p>
      </div>
    </NoticeLayout>
  );
}
