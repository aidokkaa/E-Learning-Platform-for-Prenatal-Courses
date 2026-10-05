import Image from "next/image";
import Link from "next/link";
import { Alex_Brush, Comfortaa, Quicksand } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const POLAROIDS = [
 {
     src:"https://images.unsplash.com/photo-1765956807683-ad558e88f23d?auto=format&fit=crop&w=1200&q=80",
    alt: "Happy family",
    caption: "Growing Together",
  },
  {
    src: "https://images.unsplash.com/photo-1543342384-1f1350e27861?auto=format&fit=crop&w=1200&q=80",
    alt: "Family with newborn",
    caption: "A New Beginning",
  },
  {
    src: "https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?auto=format&fit=crop&w=1200&q=80",
    alt: "Happy mother with baby",
    caption: "Precious moment",
  },
];

const TESTIMONIALS = [
  {
    text: "The prenatal yoga classes kept me energized and calm through my second trimester. Highly recommend!",
    name: "Anna",
    meta: "28 weeks",
  },
  {
    text: "Breathing techniques learned here made my delivery so much smoother than I imagined. Thank you!",
    name: "Mina",
    meta: "New mom",
  },
];
function Polaroid({
  src,
  alt,
  caption,
  rotate,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  rotate: string;
  className?: string;
}) {
  return (
    <figure
      className={`relative bg-white p-2.5 pb-2 shadow-[0_16px_34px_rgba(74,30,12,0.13)] ring-1 ring-[#4A1E0C]/5 transition duration-300 hover:rotate-0 hover:scale-[1.04] ${rotate} ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-3 bg-[#E6CDB9]/70 shadow-sm"
      />
      <div className="relative aspect-square w-full overflow-hidden bg-[#F4E3D8]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 190px, (min-width: 1024px) 170px, 45vw"
          className="object-cover"
        />
      </div>
      <figcaption
        className={`${alexBrush.className} pt-1 text-center text-[20px] leading-tight text-[#6B4A3B]`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
function Testimonial({
  text,
  name,
  meta,
  rotate,
  className = "",
}: {
  text: string;
  name: string;
  meta: string;
  rotate: string;
  className?: string;
}) {
  return (
    <blockquote
      className={`relative rounded-[22px] border border-[#F0E1D6] bg-white p-5 pt-6 shadow-[0_14px_30px_rgba(74,30,12,0.08)] transition duration-300 hover:rotate-0 ${rotate} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`${comfortaa.className} absolute -top-1 left-4 select-none text-[56px] leading-none text-[#DDB99F]`}
      >
        &ldquo;
      </span>

      <p className="relative mt-3 text-[14px] leading-[1.65] text-[#6B4A3B]">
        {text}
      </p>

      <footer className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4E3D8] text-[12px] font-semibold text-[#4A1E0C]">
            {name[0]}
          </span>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-[#4A1E0C]">
              {name}
            </div>
            <div className="text-[11px] text-[#8A6656]">{meta}</div>
          </div>
        </div>
      </footer>
    </blockquote>
  );
}

export default function PolaroidSuccessSection() {
  return (
    <section
      className={`${quicksand.className} relative overflow-hidden bg-white py-16 lg:py-24`}
    >
      <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-2 inset-y-6 bg-[#FBF3EC] lg:inset-x-6 lg:inset-y-4"
          style={{ borderRadius: "46% 54% 50% 50% / 30% 34% 66% 70%" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-4 h-40 w-40 rounded-full bg-[#DDB99F]/30 lg:-right-16 lg:h-56 lg:w-56"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-2 h-32 w-32 rounded-full bg-[#F4E3D8] lg:-left-14 lg:h-44 lg:w-44"
        />

        <div className="relative lg:h-[640px]">
          <div className="relative z-20 mx-auto max-w-[640px] px-2 text-center lg:pt-6">
            <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8A6656]">
              <span className="h-px w-8 bg-[#DDB99F]" />
              Real stories
              <span className="h-px w-8 bg-[#DDB99F]" />
            </p>

            <h2
              className={`${comfortaa.className} font-light leading-[1.3] text-[#4A1E0C]`}
              style={{ fontSize: "clamp(24px,2.5vw,38px)" }}
            >
              <span className="lg:whitespace-nowrap">
                Prepare Your Mind &amp; Body
              </span>
              <br />
              <span className="lg:whitespace-nowrap">
                for a{" "}
                <span
                  className={`${alexBrush.className} ml-1 align-baseline text-[1.4em] font-normal leading-none text-[#C4705A]`}
                >
                  Healthy Pregnancy
                </span>
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-[1.65] text-[#6B4A3B] [text-wrap:balance]">
              Gentle movement, calm breathing and practical guidance, all in one
              place and at your own pace.
            </p>

            <Link
              href="#courses"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1F5B58] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_16px_rgba(31,91,88,0.18)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0"
            >
              Explore Courses
            </Link>
          </div>
          <div className="absolute left-0 top-6 z-10 hidden w-[170px] lg:block xl:left-2 xl:w-[190px]">
            <Polaroid {...POLAROIDS[0]} rotate="-rotate-6" />
          </div>

          <div className="absolute right-0 top-12 z-10 hidden w-[170px] lg:block xl:right-2 xl:w-[190px]">
            <Polaroid {...POLAROIDS[1]} rotate="rotate-6" />
          </div>

          <div className="absolute bottom-2 left-1/2 z-10 hidden w-[160px] -translate-x-1/2 lg:block xl:w-[175px]">
            <Polaroid {...POLAROIDS[2]} rotate="rotate-2" />
          </div>

          <div className="absolute bottom-10 left-[1%] z-10 hidden w-[250px] lg:block xl:left-[3%] xl:w-[265px]">
            <Testimonial {...TESTIMONIALS[0]} rotate="-rotate-2" />
          </div>

          <div className="absolute bottom-14 right-[1%] z-10 hidden w-[250px] lg:block xl:right-[3%] xl:w-[265px]">
            <Testimonial {...TESTIMONIALS[1]} rotate="rotate-2" />
          </div>
          <div className="relative z-10 mt-12 lg:hidden">
            <div className="mx-auto flex max-w-[520px] flex-wrap justify-center gap-x-5 gap-y-7">
              <div className="w-[44%] max-w-[190px]">
                <Polaroid {...POLAROIDS[0]} rotate="-rotate-3" />
              </div>
              <div className="w-[44%] max-w-[190px]">
                <Polaroid {...POLAROIDS[1]} rotate="rotate-3" />
              </div>
              <div className="w-[44%] max-w-[190px]">
                <Polaroid {...POLAROIDS[2]} rotate="-rotate-2" />
              </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-[460px] flex-col gap-5">
              <Testimonial {...TESTIMONIALS[0]} rotate="-rotate-1" />
              <Testimonial {...TESTIMONIALS[1]} rotate="rotate-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
