import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-figtree",
});

export default function BlogPreview() {
  return (
    <div className={`${figtree.className} bg-yellow`} >
      Learning Published 21 Dec 2023 HTML & CSS foundations These languages are
      the backbone of every website, defining structure, content, and
      presentation. Greg Hooper
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}
