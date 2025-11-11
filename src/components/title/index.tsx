import UnderLine from "../common/underLine";

type Props = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

export default function TitleSection({ children, className, title }: Props) {
  return (
    <h2 className={`text-3xl md:text-6xl  font-semibold ${className}`}>
      {children}
      <UnderLine>{title}</UnderLine>
    </h2>
  );
}
