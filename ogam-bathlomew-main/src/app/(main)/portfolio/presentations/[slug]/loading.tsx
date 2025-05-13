import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-10 w-3/4 rounded-lg" />
        <Skeleton className="h-6 w-1/2 rounded-lg" />
      </div>

      <Skeleton className="h-64 md:h-96 rounded-xl" />

      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-8 w-1/2 rounded-lg" />
            {[...Array(3)].map((_, j) => (
              <Skeleton key={j} className="h-5 w-full rounded-lg" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
