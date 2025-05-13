"use client";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/animated-card";
import { siteConfig } from "@/lib/site-config";
import { GRADIENTS } from "@/lib/constants";

export default function BlogPage() {
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
          Academic Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Sharing insights, study techniques, and experiences from my journey in
          Applied Statistics and Biological Research
        </motion.p>
      </section>

      {/* Categories Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Study Tips Category */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className={`p-6 ${GRADIENTS.primary} text-white`}>
              <h2 className="text-2xl font-semibold">Study Tips</h2>
              <p className="opacity-90">
                Mastering Applied Statistics and Mathematical Concepts
              </p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Practical advice and techniques for excelling in statistical
                methods, linear algebra, and differential equations.
              </p>
              <div className="space-y-4">
                {siteConfig.blogCategories["study-tips"].map((post, index) => (
                  <AnimatedCard
                    key={post.slug}
                    title={post.title}
                    description={post.description}
                    link={`/blog/study-tips/${post.slug}`}
                    variant="secondary"
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Academic Experiences Category */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className={`p-6 ${GRADIENTS.secondary} text-white`}>
              <h2 className="text-2xl font-semibold">Academic Experiences</h2>
              <p className="opacity-90">
                My Journey Through Statistics Education
              </p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Reflections on my academic path, challenges faced, and lessons
                learned at Moi University.
              </p>
              <div className="space-y-4">
                {siteConfig.blogCategories["academic-experiences"].map(
                  (post, index) => (
                    <AnimatedCard
                      key={post.slug}
                      title={post.title}
                      description={post.description}
                      link={`/blog/academic-experiences/${post.slug}`}
                      variant="secondary"
                      delay={index * 0.1 + 0.2}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Posts Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Latest Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(siteConfig.blogCategories)
              .flat()
              .slice(0, 3)
              .map((post, index) => (
                <AnimatedCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  link={`/blog/${
                    post.slug.includes("journey")
                      ? "academic-experiences"
                      : "study-tips"
                  }/${post.slug}`}
                  delay={index * 0.1 + 0.3}
                />
              ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
