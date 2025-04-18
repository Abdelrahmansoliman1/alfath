type Props = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

export default function TitleSection({ children, className, title }: Props) {
  return (
    <h2 className={`text-3xl md:text-4xl  font-semibold ${className}`}>
      {children}
      {title}
    </h2>
  );
}
