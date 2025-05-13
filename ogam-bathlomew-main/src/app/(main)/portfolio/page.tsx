"use client";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/animated-card";
import { siteConfig } from "@/lib/site-config";
import { GRADIENTS } from "@/lib/constants";

export default function PortfolioPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-blue-400 dark:to-emerald-300"
        >
          My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          A collection of my academic presentations and research projects in
          applied statistics and biological sciences
        </motion.p>
      </section>

      {/* Presentations Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Presentations
            </h2>
            <span
              className={`ml-4 px-3 py-1 text-xs font-medium rounded-full ${GRADIENTS.primary} text-white`}
            >
              {siteConfig.portfolioItems.presentations.length} Items
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Academic presentations exploring ecological cycles and environmental
            processes through statistical analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.portfolioItems.presentations.map(
              (presentation, index) => (
                <AnimatedCard
                  key={presentation.slug}
                  title={presentation.title}
                  description={presentation.description}
                  link={`/portfolio/presentations/${presentation.slug}`}
                  delay={index * 0.1}
                />
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Research Projects
            </h2>
            <span
              className={`ml-4 px-3 py-1 text-xs font-medium rounded-full ${GRADIENTS.secondary} text-white`}
            >
              {siteConfig.portfolioItems.projects.length} Items
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Applied statistics projects demonstrating the use of mathematical
            models in ecological research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.portfolioItems.projects.map((project, index) => (
              <AnimatedCard
                key={project.slug}
                title={project.title}
                description={project.description}
                link={`/portfolio/projects/${project.slug}`}
                variant="secondary"
                delay={index * 0.1 + 0.3}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Technical Skills
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
                  Statistical Methods
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Linear Regression Analysis
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Hypothesis Testing
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Experimental Design
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Data Visualization
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
                  Technical Tools
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      R Programming
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Python (Pandas, NumPy)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      MATLAB
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Tableau
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
