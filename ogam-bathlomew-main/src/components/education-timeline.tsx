// src/components/education-timeline.tsx
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    id: 1,
    year: "2022 - Present",
    degree: "Bachelor of Science with Education",
    institution: "Moi University, Kenya",
    major: "Major in Applied Statistics",
    description:
      "Academic excellence with outstanding first-year transcript. Courses include Linear Algebra, Ordinary Differential Equations, and Statistical Methods.",
  },
  {
    id: 2,
    year: "2018 - 2021",
    degree: "High School Diploma",
    institution: "Kisumu High School, Kenya",
    description:
      "Specialized in Mathematics and Sciences. Developed foundational skills in statistical thinking.",
  },
];

export default function EducationTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      {educationData.map((item) => (
        <div key={item.id} className="relative pl-16 pb-8">
          {/* Icon */}
          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 shadow-md">
            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Time */}
          <time className="text-sm font-semibold leading-none text-gray-500 dark:text-gray-400">
            {item.year}
          </time>

          {/* Content */}
          <h3 className="mt-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
            {item.degree}
          </h3>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {item.institution}
          </h4>
          {item.major && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {item.major}
            </p>
          )}
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
