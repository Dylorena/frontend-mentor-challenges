import { Inter } from "next/font/google";
import "./social.css";
import Social from "./components/socialItem";
import Head from "next/head";
import SocialList from "./components/socialList";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-figtree",
});

export default function SocialLink() {
  return (
    <div className="bg-[var(--color-grey-900)] w-[100vw] h-[100vh] flex justify-center items-center">
      <Head>
        <title>Social Links</title>
      </Head>
      <main className="bg-[var(--color-grey-800)] p-11 rounded-lg">
        <h1 className="text-white">Jessica Randall</h1>
        <small className="text-[var(--color-green)]">
          London, United Kingdom "Front-end developer and avid reader."
        </small>
        <SocialList />
      </main>
    </div>
  );
}
