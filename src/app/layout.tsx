import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
import PageWrapper from "@/components/pageWrapper";
// import MainLayout from "@/layouts/mainLayout";

const MainLayout = dynamic(() => import("@/layouts/mainLayout"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfath",
  description:
    "Established in 2024, Al-Fath for Shipping Agencies has swiftly emerged as a leading force in the maritime and logistics industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <PageWrapper>
            <MainLayout>{children}</MainLayout>
          </PageWrapper>
        </Suspense>
      </body>
    </html>
  );
}
