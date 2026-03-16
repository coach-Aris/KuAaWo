import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KuAaWo Member Portal",
  description: "Official portal for the KuAaWo cultural association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
