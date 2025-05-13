import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ogam Bathlomew | Aspiring Statistician",
  description:
    "Portfolio of Ogam Bathlomew, Applied Statistics student with focus on biological research",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/images/profile.jpg",
        href: "/images/profile.jpg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/images/profile.jpg",
        href: "/images/profile.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
