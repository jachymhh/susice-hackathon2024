import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NEMO",
  description: "Přehled vývoje mzdy a cen nemovitostí",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
