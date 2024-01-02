"use client";

import { POSTS_QUERY } from "@/sanity/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";

import Posts from "@/components/posts";

export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    POSTS_QUERY,
    {},
    { initial }
  );

  return data ? <Posts posts={data} /> : <div>No posts found</div>;
}
