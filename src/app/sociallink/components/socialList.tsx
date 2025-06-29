import Social from "./socialItem";

const socials = [
  {
    label: "GitHub",
  },
  {
    label: "Frontend Mentor",
  },
  {
    label: "LinkedIn",
  },
  {
    label: "Twitter",
  },
  {
    label: "Instagram",
  },
];

export default function SocialList() {
  const getSocialLinks = () => {
    return socials.map(({ label }) => <Social key={label} label={label} />);
  };

  return <ul className="flex flex-col gap-3">{getSocialLinks()}</ul>;
}
