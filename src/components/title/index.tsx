import UnderLine from "../common/underLine";

type Props = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

export default function TitleSection({ children, className, title }: Props) {
  return (
    <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${className}`}>
      {children}
      <UnderLine>{title}</UnderLine>
    </h2>
  );
}
