// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario Auqui",
  description: "Portfolio website of Mario Auqui",
  openGraph: {
    title: "Mario Auqui",
    description: "Computer Science student and Research Fellow at Wake Forest University.",
    url: "https://marioauqui.com",
    siteName: "Mario Auqui Portfolio",
    images: [
      {
        url: "https://marioauqui.com/mario-auqui-headshot.jpg",
        width: 1200,
        height: 1200,
        alt: "Mario Auqui professional headshot portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Structured data to help Google associate your image with your name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mario Auqui",
              url: "https://marioauqui.com",
              image: "https://marioauqui.com/mario-auqui-headshot.jpg",
              jobTitle: "Computer Science Student and Research Fellow",
              affiliation: "Wake Forest University",
              sameAs: [
                "https://www.linkedin.com/in/marioauqui",
                "https://github.com/marioauqui",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `;(function(){try{var theme=localStorage.getItem('theme');var hasTheme=typeof theme==='string';if(hasTheme){if(theme==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}else{if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}}catch(e){}})()`,
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
