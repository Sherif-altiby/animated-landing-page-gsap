import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gsap App",
  description: "Generate basic app and use gsap for animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
