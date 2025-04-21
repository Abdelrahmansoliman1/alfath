import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SocialMedia from "@/components/common/SocialMedia";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid gap-10">
      <Navbar />
      <div className="relative grid gap-10 ">
        <div className="absolute inset-y-0 right-2 ">
          <div className="fixed w-fit top-0 right-2 h-screen grid place-content-center z-30">
            <SocialMedia dir="col" className="border border-primary" />
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
