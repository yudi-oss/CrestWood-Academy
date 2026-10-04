import NoticeLayout from "@/components/Notice/NoticeLayout";
import DownloadButton from "@/components/InnerPage/DownloadButton";

export default function InvitationForBids() {
  return (
    <NoticeLayout
      title="Invitation for Bids No: CA/NCB/Works/01/2082-83"
    >
      <div className="text-[15px] leading-[1.9] text-neutral-700">
        <p className="text-center font-medium m-0">
          Invitation for Bids No: CA/NCB/Works/01/2082-83
        </p>
        <p className="text-center m-0 mb-4">Date of publication: 2082-08-23</p>

        <p className="text-justify">
          Crestwood Academy (CA) invites electronic bids from eligible
          bidders for the construction of of East Side Boundary Wall with
          V-Drain, Toe Wall and Landscaping, Main Gate and Guard Post
          (Package-C &ldquo;1<sup>st</sup> Phase&rdquo;) under National
          Competitive Bidding &ndash; Single Stage Two Envelope Bidding
          procedures.
        </p>

        <div className="mt-4">
          {/* Replace href with the real PDF/document path once it's hosted. */}
          <DownloadButton href="#">Invitation for Bids No: CA/NCB/Works/01/2082-83</DownloadButton>
        </div>
      </div>
    </NoticeLayout>
  );
}
