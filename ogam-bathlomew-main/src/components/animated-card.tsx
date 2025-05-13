"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  title: string;
  description: string;
  link: string;
  variant?: "default" | "secondary";
  delay?: number;
}

export default function AnimatedCard({
  title,
  description,
  link,
  variant = "default",
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "rounded-lg overflow-hidden shadow-md transition-all duration-300 h-full",
        variant === "default"
          ? "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          : "bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
      )}
    >
      <Link href={link} className="block h-full p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="mt-auto">
          <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
            View details
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
