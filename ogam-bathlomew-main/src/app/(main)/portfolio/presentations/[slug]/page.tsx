import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";

export async function generateStaticParams() {
  return siteConfig.portfolioItems.presentations.map((presentation) => ({
    slug: presentation.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const presentation = siteConfig.portfolioItems.presentations.find(
    (p) => p.slug === params.slug
  );

  if (!presentation) return {};

  return {
    title: `${presentation.title} | Ogam Bathlomew`,
    description: presentation.description,
  };
}

export default function PresentationPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);
  const presentation = siteConfig.portfolioItems.presentations.find(
    (p) => p.slug === params.slug
  );

  if (!presentation) {
    return notFound();
  }

  // Content for different presentation types
  const presentationContent: Record<
    string,
    { sections: { title: string; content: string[] }[] }
  > = {
    "sulphur-cycle": {
      sections: [
        {
          title: "Introduction to the Sulphur Cycle",
          content: [
            "The sulphur cycle is a biogeochemical cycle that describes the movement of sulphur through the Earth's atmosphere, hydrosphere, lithosphere, and biosphere.",
            "Sulphur is an essential element for all life and is a key component of amino acids and proteins.",
          ],
        },
        {
          title: "Key Processes",
          content: [
            "Mineralization: Conversion of organic sulphur to inorganic forms",
            "Oxidation: Conversion of sulphide to sulphate",
            "Reduction: Conversion of sulphate to sulphide",
            "Immobilization: Incorporation of inorganic sulphur into organic compounds",
          ],
        },
        {
          title: "Statistical Analysis",
          content: [
            "Developed regression models to predict sulphur deposition patterns",
            "Analyzed spatial distribution using geostatistical methods",
            "Created time series models for seasonal variation analysis",
          ],
        },
      ],
    },
    "phosphorus-cycle": {
      sections: [
        {
          title: "Introduction to the Phosphorus Cycle",
          content: [
            "The phosphorus cycle describes the movement of phosphorus through the lithosphere, hydrosphere, and biosphere.",
            "Unlike other biogeochemical cycles, the atmosphere does not play a significant role.",
          ],
        },
        {
          title: "Key Processes",
          content: [
            "Weathering of rocks releases phosphate",
            "Absorption by plants and incorporation into organic compounds",
            "Return to environment through decomposition",
            "Sedimentation and geological uplift complete the cycle",
          ],
        },
        {
          title: "Statistical Analysis",
          content: [
            "Modeled phosphorus flow in agricultural systems",
            "Analyzed eutrophication risks using water quality data",
            "Developed predictive models for soil phosphorus levels",
          ],
        },
      ],
    },
    "ecological-succession": {
      sections: [
        {
          title: "Introduction to Ecological Succession",
          content: [
            "Ecological succession is the process of change in the species structure of an ecological community over time.",
            "This presentation focuses on both primary and secondary succession patterns.",
          ],
        },
        {
          title: "Key Concepts",
          content: [
            "Primary succession: Establishment in lifeless areas (e.g., after volcanic eruption)",
            "Secondary succession: Re-establishment after disturbance (e.g., after fire)",
            "Pioneer species vs. climax communities",
            "Factors affecting succession rates",
          ],
        },
        {
          title: "Statistical Analysis",
          content: [
            "Time series analysis of species composition changes",
            "Markov chain models for succession prediction",
            "Multivariate analysis of environmental drivers",
            "Spatial analysis of succession patterns",
          ],
        },
      ],
    },
  };

  const content =
    presentationContent[params.slug] || presentationContent["sulphur-cycle"];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {presentation.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {presentation.description}
          </p>
        </div>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={`/images/${params.slug}.jpg`}
            alt={`${presentation.title} Diagram`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {section.title}
              </h2>

              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mb-4 text-gray-600 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-medium mb-2">
              Presentation Highlights
            </h3>
            <ul className="space-y-2">
              {content.sections
                .flatMap((section) =>
                  section.content.filter(
                    (item) => item.includes(":") || item.includes("analysis")
                  )
                )
                .map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-2 w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {highlight}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
