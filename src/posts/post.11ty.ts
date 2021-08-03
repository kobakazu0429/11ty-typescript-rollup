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
  return `<h1>${post.title}</h1>
<p>${post.body}</p>`;
};
