import { Figtree } from "next/font/google";
import { Typografy } from "./components/typografy/typografy";
import Image from "next/image";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-figtree",
});

export default function BlogPreview() {
  return (
    <div
      className={`${figtree.className} bg-yellow h-[100vh] flex items-center justify-center`}
    >
      <main className="bg-white w-[20.4375rem] h-[31.3125rem] p-6 rounded-[20px] ring-1 ring-inset flex flex-col justify-between lg:w-[24rem] lg:h-[32.625rem] shadow-[8px_8px_0_#000]">
        <Image
          src="/blogpreview-images/illustration-article.svg"
          priority
          alt="image mix yellow with black color"
          width="279"
          height="200"
          className="rounded-[0.625rem] lg:w-[21rem]"
        />
        <section className="flex flex-col gap-y-3">
          <Typografy
            as="p"
            variant="preset-3-b"
            className="bg-yellow w-[4.5625rem] h-[1.625rem] lg:w-[5.125rem] lg:h-[1.8125rem] rounded-sm text-center content-center"
          >
            Learning
          </Typografy>

          <Typografy as="time" variant="preset-3">Published 21 Dec 2023 </Typografy>
          <Typografy as="h1" variant="preset-1" className="hover:text-yellow">
            HTML & CSS foundations
          </Typografy>
          <Typografy as="p" variant="preset-2" color="text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </Typografy>
        </section>

        <div className="flex gap-3">
          <Image
            src="/blogpreview-images/image-avatar.webp"
            width={32}
            height={32}
            alt="Greg Hooper"
          />
          <Typografy as="cite" variant="preset-3-b" className="self-center not-italic">
            Greg Hooper
          </Typografy>
        </div>
      </main>
    </div>
  );
}
