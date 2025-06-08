type Props<T extends React.ElementType> = {
  as?: T;
  variant: "preset-1" | "preset-2" | "preset-3" | "preset-3-b";
  color?: any;
  children: React.ReactNode;
  className?: any;
} & React.ComponentPropsWithoutRef<T>;

export function Typografy<T extends React.ElementType = "span">({
  as,
  variant,
  children,
  color = "text-gray-950",
  className,
  ...rest
}: Props<T>) {
  const Component = as || "span";
  return (
    <Component className={`text-${variant} ${color} ${className}`} {...rest}>
      {children}
    </Component>
  );
}
