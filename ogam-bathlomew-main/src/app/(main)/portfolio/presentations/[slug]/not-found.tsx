import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Presentation Not Found
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        The requested presentation could not be found in my portfolio.
      </p>
      <Button asChild>
        <Link href="/portfolio">Back to Portfolio</Link>
      </Button>
    </div>
  );
}
