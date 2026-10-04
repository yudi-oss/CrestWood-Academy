import AboutUsPageLayout from "@/components/AboutUS/AboutUsPageLayout";

export default function Sebs() {
  return (
    <AboutUsPageLayout title="SEBS (Alumni)" crumbLabel="SEBS" active="/about-us/sebs">
      <div className="space-y-5 text-[15px] leading-[1.9] text-neutral-700">
        <p>
          <a
            href="http://www.sebsonline.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ca-crimson hover:text-ca-crimson-deep hover:underline"
          >
            http://www.sebsonline.org/
          </a>
        </p>
      </div>
    </AboutUsPageLayout>
  );
}
