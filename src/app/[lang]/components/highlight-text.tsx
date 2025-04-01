type HighlightTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HighlightText({
  children,
  className,
}: HighlightTextProps) {
  return (
    <span
      className={`relative inline-block px-1 before:absolute before:inset-0 before:-z-10 before:w-full before:transition-all before:duration-500 before:ease-in-out after:absolute after:inset-0 after:-z-10 after:w-0 after:origin-left after:transition-[width] after:duration-500 after:ease-in-out hover:after:w-full ${className}`}
    >
      {children}
    </span>
  );
}
