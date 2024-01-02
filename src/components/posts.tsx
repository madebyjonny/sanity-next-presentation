import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { FC } from "react";

type PostType = {
  posts: SanityDocument[];
};

const Posts: FC<PostType> = (props) => {
  const { posts } = props;
  return (
    <>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link key={post._id} href={post.slug.current}>
            <h2>{post.title}</h2>
          </Link>
        ))
      ) : (
        <div>No posts found</div>
      )}
    </>
  );
};

export default Posts;
