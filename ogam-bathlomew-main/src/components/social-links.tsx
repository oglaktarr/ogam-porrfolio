import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import { siteConfig } from "@/lib/site-config";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link
        href={`mailto:${siteConfig.email}`}
        aria-label="Email"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <TfiEmail className="h-5 w-5" />
      </Link>
      {/* facebook */}
      <Link
        target="_blank"
        href={`${siteConfig.links.facebook}`}
        aria-label="Email"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <FaFacebookF className="h-5 w-5" />
      </Link>

      {/* linkedin */}
      <Link
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <FaLinkedin className="h-5 w-5" />
      </Link>
      {/* tiktok */}
      <Link
        href={siteConfig.links.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <FaTiktok className="h-5 w-5" />
      </Link>
      {/* whatsapp */}
      <Link
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <FaWhatsapp className="h-5 w-5" />
      </Link>
      {/* twitter */}
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <FaXTwitter className="h-5 w-5" />
      </Link>
    </div>
  );
}
