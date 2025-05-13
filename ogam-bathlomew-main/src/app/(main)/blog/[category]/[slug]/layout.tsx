import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  return Object.entries(siteConfig.blogCategories).flatMap(
    ([category, posts]) =>
      posts.map((post) => ({
        category,
        slug: post.slug,
      }))
  );
}

import React from "react";

function Dynamo({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default Dynamo;
