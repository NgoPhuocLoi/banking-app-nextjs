import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmFlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-flex-serif",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmFlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
