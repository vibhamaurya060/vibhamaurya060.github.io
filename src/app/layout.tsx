import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponciveNav from "@/components/home/navbar/ResponciveNav";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Vibha Portfolio",
  description: "Portfolio website using nextjs",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning className={cn("font-sans", geist.variable)}
    >
      <body className={`${font.className} h-full antialiased`}>
        <Provider>
          <ResponciveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
