import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500",] });

export const metadata: Metadata = {
  title: "EcoWarriors",
  description: "Built within 2 days",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
