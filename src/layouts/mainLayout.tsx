import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SocialMedia from "@/components/common/SocialMedia";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative grid gap-8 min-h-[3000px]">
        <div className="absolute top-0 right-0">
          <SocialMedia />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
