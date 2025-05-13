"use client";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/animated-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
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
          Ogam Bathlomew
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300"
        >
          Aspiring Statistician with a Focus on Biological Research
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button asChild variant="default" size="lg" className="mr-4">
            <Link href="/about">About Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedCard
            title="Sulphur Cycle Research"
            description="Detailed exploration of the sulphur cycle and its environmental significance"
            link="/portfolio/presentations/sulphur-cycle"
          />
          <AnimatedCard
            title="Phosphorus Cycle Research"
            description="Statistical analysis of phosphorus movement in ecosystems"
            link="/portfolio/presentations/phosphorus-cycle"
          />
          <AnimatedCard
            title="Ecological Succession"
            description="Analysis of primary and secondary succession in ecosystems"
            link="/portfolio/presentations/ecological-succession"
          />
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedCard
            title="Excelling in Applied Statistics"
            description="Master core concepts in Linear Algebra and ODE"
            link="/blog/study-tips/excel-applied-stats"
            variant="secondary"
          />
          <AnimatedCard
            title="My Academic Journey"
            description="Challenges, achievements, and key learnings at Moi University"
            link="/blog/academic-experiences/journey"
            variant="secondary"
          />
        </div>
      </section>
    </div>
  );
}
