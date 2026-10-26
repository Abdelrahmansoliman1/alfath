import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
import PageWrapper from "@/components/pageWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";
// import MainLayout from "@/layouts/mainLayout";

const MainLayout = dynamic(() => import("@/layouts/mainLayout"));

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alfathshipping.com"),
  title: "Al-Fath for Shipping Agencies | Shipping & Logistics in Egypt",
  description:
    "Established in 2024, Al-Fath for Shipping Agencies has swiftly emerged as a leading force in the maritime and logistics industry.",
  openGraph: {
    type: "website",
    siteName: "Al-Fath for Shipping Agencies",
    url: "https://alfathshipping.com",
    images: ["/logo-lg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`antialiased`}>
        <Suspense fallback={<Loading />}>
          <PageWrapper>
            <MainLayout>{children}</MainLayout>
          </PageWrapper>
        </Suspense>
      </body>
    </html>
  );
}
