
type Props = {
  variant: "preset-1" | "preset-2" | "preset-3" | "preset-3-b";
  children: React.ReactNode;
};

export function Typografy({ variant, children }: Props) {
  return <span
  className={`text-${variant}`}>{children}</span>;
}
