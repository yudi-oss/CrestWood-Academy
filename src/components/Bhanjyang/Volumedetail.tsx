import Image from "next/image";
import InnerPageLayout from "@/components/InnerPage/InnerPageLayout";
import DownloadButton from "@/components/InnerPage/DownloadButton";
import { BHANJYANG_SECTION } from "@/components/Bhanjyang/bhanjyang-nav";
import type { BhanjyangVolume } from "@/lib/bhanjyang-data";

export default function VolumeDetail({ volume }: { volume: BhanjyangVolume }) {
  return (
    <InnerPageLayout
      title={volume.title}
      sectionLabel="Bhanjyang"
      sectionHref="/bhanjyang"
      sections={[BHANJYANG_SECTION]}
      active={`/bhanjyang/${volume.slug}`}
    >
      <div className="flex flex-col items-start gap-8">
        {volume.coverImage ? (
          <figure className="w-full max-w-[380px] border border-neutral-200 bg-white p-2 shadow-sm">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-ca-paper">
              <Image
                src={volume.coverImage}
                alt={`Cover of ${volume.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-2 border-t border-neutral-200 pt-2 text-center font-display text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              {volume.title}
            </figcaption>
          </figure>
        ) : (
          <div className="flex aspect-[3/4] w-full max-w-[380px] flex-col items-center justify-center gap-2 border border-neutral-200 bg-ca-paper p-6 text-center">
            <span className="font-display text-[15px] uppercase tracking-[0.16em] text-ca-navy">
              {volume.title}
            </span>
            <span className="text-[13px] text-neutral-500">
              No cover preview for this issue
            </span>
          </div>
        )}

        {volume.pdfUrl || volume.coverImage ? (
          <DownloadButton href={volume.pdfUrl || "#"}>Download PDF</DownloadButton>
        ) : (
          <p className="text-[13.5px] text-neutral-500">
            This issue isn&apos;t available online yet.
          </p>
        )}
      </div>
    </InnerPageLayout>
  );
}

