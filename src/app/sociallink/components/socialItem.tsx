type Props = {
  label: string;
};

export default function Social({ label }: Props) {
  return <li className="bg-[var(--color-grey-700)] text-white rounded-md text-center h-[2.8125rem]">{label}</li>;
}
