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
        <div className="fixed top-0 right-2 h-screen grid place-content-center z-50">
          <SocialMedia
            dir="col"
            className="border border-primary rounded-full "
          />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
