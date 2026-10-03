import Image from "next/image";

export default function Partners() {
  const images = Array(4).fill(null).map((_, i) => (
    <div key={i} className="flex px-4 items-center gap-4">
      <Image
        src="/images/partners/image.png"
        alt={`Partners 1 - ${i}`}
        width={1200}
        height={40}
        className="h-5 md:h-7 lg:h-25!  w-auto object-contain"
      />
      <Image
        src="/images/partners/image copy.png"
        alt={`Partners 2 - ${i}`}
        width={1200}
        height={40}
        className="h-5 md:h-7 lg:h-25!  w-auto object-contain"
      />
    </div>
  ));

  return (
    <div className="w-full overflow-hidden flex py-2 border-y border-[#e2d5f8]" style={{ background: "var(--c-mint)" }}>
      <div className="flex animate-loop-marquee whitespace-nowrap min-w-max">
        {/* First set of images */}
        {images}
        {/* Second set of images (clone for seamless loop) */}
        {images}
      </div>
    </div>
  );
}
