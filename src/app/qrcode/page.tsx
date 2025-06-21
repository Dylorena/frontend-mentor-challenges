import { Outfit } from "next/font/google";
import "./global.css";
import Head from "next/head";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});

export default function QRCodePage() {
  return (
    <>
      <Head>
        <title>QR Code Component</title>
      </Head>
      <div
        className={`${outfit.className} bg-slate-300 font h-[100vh] flex items-center justify-center`}
      >
        <main className="text-center">
          <div className="flex flex-col items-center bg-white w-[20rem] h-[31.1875rem] rounded-[20px] p-[16px]">
            <Image
              src="/qrcode/images/image-qr-code.png"
              width="288"
              height="288"
              className="rounded-[10px] mb-2"
              alt="QRcode image with blue background"
            />

            <section className="p-4">
              <h1 className="text-preset-1 text-slate-900 mb-4">
                Improve your front-end skills by building projects
              </h1>

              <p className="text-preset-2 text-slate-500">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </section>
          </div>
        </main>
        <footer className="absolute bottom-0">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Dylorena">Dylorena</a>.
        </footer>
      </div>
    </>
  );
}
