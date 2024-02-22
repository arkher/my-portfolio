/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { Montserrat } from "next/font/google";
import { Footer, Navbar } from "../components";
import Script from "next/script";
import "@/app/styles/globals.css";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Paulo Gomes - Porftolio",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            `}
        </Script>
        <main
          className={`${mont.className} font-mont text-black bg-light dark:bg-dark w-full min-h-screen`}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
