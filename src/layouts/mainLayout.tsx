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
      <div className="relative grid gap-8">
        <SocialMedia />
        {children}
      </div>
      <Footer />
    </div>
  );
}
