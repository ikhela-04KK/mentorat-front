import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@features/providers/provider"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentorat-Front",
  description: "Talking with any teacher and professer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
