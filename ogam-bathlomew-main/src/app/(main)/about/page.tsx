"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EducationTimeline from "@/components/education-timeline";
import SkillsChart from "@/components/skills-chart";
import ContactForm from "@/components/contact-form";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <Image
              src="/images/profile.jpg" // Replace with actual image
              alt="Ogam Bathlomew"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I am Ogam Bathlomew, a second-year student at Moi University,
              pursuing a Bachelor of Science with Education, majoring in Applied
              Statistics.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Growing up in Kisumu, Kenya, I developed a strong passion for
              mathematics and environmental science, which led me to choose
              Applied Statistics as my field of study.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Education Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Education Journey
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <EducationTimeline />
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Technical Skills
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <SkillsChart />
        </div>
      </motion.div>

      {/* Goals Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Goals & Aspirations
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-300">
            I am actively seeking opportunities to expand my knowledge through
            fully funded undergraduate scholarships abroad, particularly in
            institutions with strong research facilities, favorable living
            conditions, and quality health services.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Contact Me
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ContactForm />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
