import Link from "next/link";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Ogam Bathlomew
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Aspiring Statistician with a Focus on Biological Research
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <SocialLinks />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <Link
              target="_blank"
              href="https://elvin-juma-portfolio.vercel.app/"
              className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Designed by LVNTechies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
