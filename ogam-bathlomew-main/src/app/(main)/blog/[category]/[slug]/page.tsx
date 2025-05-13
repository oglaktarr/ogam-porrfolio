import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return Object.entries(siteConfig.blogCategories).flatMap(
    ([category, posts]) =>
      posts.map((post) => ({
        category,
        slug: post.slug,
      }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = siteConfig.blogCategories[
    params.category as keyof typeof siteConfig.blogCategories
  ]?.find((p) => p.slug === params.slug);

  if (!post) return {};

  return {
    title: `${post.title} | Ogam Bathlomew`,
    description: post.description,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const category =
    siteConfig.blogCategories[
      params.category as keyof typeof siteConfig.blogCategories
    ];
  const post = category?.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  // Content for different blog posts
  const blogContent: Record<
    string,
    {
      date: string;
      image: string;
      sections: {
        title?: string;
        content: string[];
        list?: { title: string; items: string[] };
      }[];
    }
  > = {
    "excel-applied-stats": {
      date: "2023-11-15",
      image: "/images/studying.jpg",
      sections: [
        {
          content: [
            "As a second-year Applied Statistics student at Moi University, I've developed several effective techniques for mastering complex statistical concepts. In this post, I'll share my most valuable study strategies that have helped me excel in Linear Algebra, Ordinary Differential Equations, and Statistical Methods.",
            "These methods combine traditional academic approaches with practical applications that make abstract concepts more tangible.",
          ],
        },
        {
          title: "1. Active Learning Techniques",
          content: [
            "Passive reading isn't enough for statistical mastery. Here's what works better:",
          ],
          list: {
            title: "",
            items: [
              "Problem-Solving Sessions: Dedicate 70% of study time to working through problems",
              "Concept Mapping: Create visual representations of statistical relationships",
              "Peer Teaching: Explain concepts to classmates to reinforce understanding",
              "Real-world Applications: Relate each concept to biological research scenarios",
            ],
          },
        },
        {
          title: "2. Time Management Strategies",
          content: [
            "Balancing multiple mathematical subjects requires discipline:",
          ],
          list: {
            title: "",
            items: [
              "Pomodoro Technique: 25-minute focused sessions with 5-minute breaks",
              "Subject Rotation: Alternate between statistics and pure math topics",
              "Weekly Reviews: Dedicate Sundays to reviewing the week's material",
              "Exam Simulations: Timed practice tests under exam conditions",
            ],
          },
        },
        {
          title: "3. Resources That Helped Me",
          content: [
            "After trying numerous resources, these proved most valuable:",
          ],
          list: {
            title: "",
            items: [
              '"Introduction to Statistical Learning" with R applications',
              "MIT OpenCourseWare Linear Algebra lectures",
              "Wolfram Alpha for differential equation verification",
              "Kaggle datasets for practical statistical analysis practice",
            ],
          },
        },
      ],
    },
    journey: {
      date: "2023-09-20",
      image: "/images/moi-university.jpg",
      sections: [
        {
          content: [
            "My academic journey in Applied Statistics at Moi University has been both challenging and rewarding. Coming from Kisumu with a passion for mathematics and environmental science, I've grown tremendously in my understanding of statistical applications in biological research.",
            "This reflection covers my key experiences, challenges overcome, and lessons learned.",
          ],
        },
        {
          title: "First Year Foundations",
          content: [
            "The transition to university-level statistics was demanding:",
          ],
          list: {
            title: "",
            items: [
              "Initial struggle with abstract mathematical proofs",
              "Breakthrough moment understanding matrix operations",
              "Developing my first statistical model for ecological data",
              "Achieving top marks in Probability and Inference",
            ],
          },
        },
        {
          title: "Second Year Specialization",
          content: ["My current focus areas have been particularly engaging:"],
          list: {
            title: "",
            items: [
              "Applied Linear Algebra for ecological modeling",
              "Differential Equations in population dynamics",
              "Advanced Statistical Computing with R",
              "Independent research on environmental data patterns",
            ],
          },
        },
        {
          title: "Lessons Learned",
          content: ["Key takeaways from my journey so far:"],
          list: {
            title: "",
            items: [
              "Consistent daily practice beats cramming",
              "Study groups provide diverse perspectives",
              "Applying concepts to real problems enhances retention",
              "Faculty mentorship is invaluable for research guidance",
            ],
          },
        },
      ],
    },
  };

  const content =
    blogContent[params.slug] || blogContent["excel-applied-stats"];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(content.date)} • {params.category.replace("-", " ")}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {post.description}
          </p>
        </div>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={content.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="prose dark:prose-invert max-w-none">
          {content.sections.map((section, index) => (
            <section key={index} className="mb-8">
              {section.title && (
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {section.title}
                </h2>
              )}

              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mb-4 text-gray-600 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <div className="my-6">
                  {section.list.title && (
                    <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {section.list.title}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {section.list.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-2 w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
              About the Author
            </h3>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Ogam Bathlomew"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200">
                  Ogam Bathlomew
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Applied Statistics student at Moi University with a focus on
                  biological research. Passionate about using statistical
                  methods to solve environmental challenges.
                </p>
              </div>
            </div>
          </div>
        </article>
      </MotionDiv>
    </div>
  );
}
