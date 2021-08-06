import { renderToString } from "preact-render-to-string";
import { Header } from "../components/Header";
import type { Post } from "../_data/posts";

export const data = {
  pagination: {
    data: "posts.data",
    alias: "post",
    size: 1,
  },
  permalink: function ({ post }: { post: Post }) {
    return `/posts/${post.title}/`;
  },
};

export const render = function ({ post }: { post: Post }) {
  return renderToString(
    <>
      <Header title={post.title} />
      <p>{post.body}</p>
    </>
  );
};
