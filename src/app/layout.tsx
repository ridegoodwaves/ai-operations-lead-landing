import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/use-theme";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Operations Lead | Fractional AI Consulting Services",
  description: "Weekly embedded AI consulting for growth-stage companies. Hands-on implementation of AI workflows, not just strategy. $10,000/month retainer for AI-native businesses.",
  keywords: ["AI consulting", "fractional AI", "AI operations", "AI implementation", "AI workflows", "AI strategy"],
  authors: [{ name: "AI Operations Lead" }],
  creator: "AI Operations Lead",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-operations-lead.vercel.app",
    title: "AI Operations Lead | Fractional AI Consulting Services",
    description: "Weekly embedded AI consulting for growth-stage companies. Hands-on implementation of AI workflows, not just strategy.",
    siteName: "AI Operations Lead",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Operations Lead | Fractional AI Consulting Services",
    description: "Weekly embedded AI consulting for growth-stage companies. Hands-on implementation of AI workflows, not just strategy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          defaultTheme="light"
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
