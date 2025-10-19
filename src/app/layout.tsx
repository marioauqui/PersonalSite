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
  metadataBase: new URL("https://marioauqui.com"),
  title: "Mario Auqui",
  description:
    "Mario Auqui — Computer Science student and Research Fellow at Wake Forest University (CS @ WFU), originally from the Bronx, New York. Passionate about Machine Learning, AI, Data Science, and Entrepreneurship.",

  openGraph: {
    title: "Mario Auqui — Computer Science Portfolio",
    description:
      "Computer Science student and Research Fellow at Wake Forest University (CS @ WFU). Bronx-born technologist passionate about Machine Learning, AI, and Entrepreneurship.",
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
    type: "profile", // 👈 Makes OpenGraph treat this as a personal profile
    profile: {
      firstName: "Mario",
      lastName: "Auqui",
      username: "marioauqui",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Mario Auqui — Computer Science Portfolio",
    description:
      "Computer Science student and Research Fellow at Wake Forest University (CS @ WFU). Bronx-born technologist passionate about Machine Learning, AI, and Entrepreneurship.",
    images: ["https://marioauqui.com/mario-auqui-headshot.jpg"],
    creator: "@marioauqui", // optional — add if you create an X account
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
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
        {/* ✅ Structured data: connects LinkedIn, GitHub, Wake Forest, Bronx, etc. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mario Auqui",
              givenName: "Mario",
              familyName: "Auqui",
              url: "https://marioauqui.com",
              image: "https://marioauqui.com/mario-auqui-headshot.jpg",
              jobTitle: "Computer Science Student and Research Fellow",
              description:
                "Computer Science student and Research Fellow at Wake Forest University (CS @ WFU), originally from the Bronx, New York. Focused on Machine Learning, AI, and Entrepreneurship.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bronx",
                addressRegion: "New York",
                addressCountry: "United States",
              },
              affiliation: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Wake Forest University",
                  url: "https://wfu.edu",
                },
                {
                  "@type": "HighSchool",
                  name: "Monsignor Scanlan High School",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bronx",
                    addressRegion: "New York",
                  },
                },
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Wake Forest University",
                  sameAs: "https://wfu.edu",
                },
                {
                  "@type": "HighSchool",
                  name: "Monsignor Scanlan High School",
                },
              ],
              knowsAbout: [
                "Computer Science",
                "Web Development",
                "Next.js",
                "React",
                "AI",
                "Machine Learning",
                "Computer Vision",
                "Entrepreneurship",
                "Data Structures",
                "Databases",
              ],
              sameAs: [
                "https://linkedin.com/in/marioauqui", // 👈 LinkedIn connection
                "https://github.com/marioauqui",
                "https://marioauqui.com",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Wake Forest University",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://marioauqui.com",
              },
            }),
          }}
        />

        {/* ✅ Optional structured data for your website (helps show “MarioAuqui.com” as official site in Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mario Auqui Portfolio",
              url: "https://marioauqui.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://marioauqui.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
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
