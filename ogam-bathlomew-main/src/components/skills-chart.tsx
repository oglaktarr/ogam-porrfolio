"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Applied Statistics", level: 85 },
  { name: "Linear Algebra", level: 80 },
  { name: "Differential Equations", level: 75 },
  { name: "Statistical Methods", level: 90 },
  { name: "Data Analysis", level: 85 },
  { name: "Ecological Modelling", level: 70 },
];

export default function SkillsChart() {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
            <span className="text-xs text-gray-500">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
