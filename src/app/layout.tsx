import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "public/assets/css/vendor/fontawesome-all.min.css";
import "public/assets/css/plugins/swiper.min.css";
import "public/assets/css/plugins/animate-text.css";
import "public/assets/css/plugins/animate.min.css";
import "public/assets/css/plugins/lightgallery.min.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header";
import Footer from "@/components/footer";
// import Footertop from "@/components/footertop";
// import Help from "@/components/help";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Help Center - Agaram Technologies",
  description:
    "Agaram Technologies Help Center – explore articles, product documentation, release notes, and support resources.",
  keywords: [
    "Agaram Technologies",
    "Help Center",
    "Product Documentation",
    "Release Notes",
    "Support",
  ],
  openGraph: {
    title: "Help Center - Agaram Technologies",
    description:
      "Find articles, product documentation, release notes, and more at Agaram Technologies Help Center.",
    url: "https://helpcenter.agaramtech.com", // replace with your actual domain
    siteName: "Agaram Technologies",
    type: "website",
  },
  icons: {
    icon: "/assets/images/favicon.webp",
    apple: "/assets/images/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Help /> */}
        {/* <Footertop /> */}
        <Footer />
      </body>
    </html>
  );
}
