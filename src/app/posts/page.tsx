import { SanityDocument } from "next-sanity";
import { POSTS_QUERY } from "@/sanity/queries";
import { draftMode } from "next/headers";
import PostsPreview from "@/components/postsPreview";
import { loadQuery } from "@/sanity/store";
import Posts from "@/components/posts";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  );
}
