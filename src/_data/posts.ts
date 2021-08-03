export interface Post {
  title: string;
  body: string;
}

function fetch(): Post[] {
  return [
    {
      title: "foo",
      body: "abc",
    },
    {
      title: "bar",
      body: "def",
    },
  ];
}

export default function () {
  const posts = fetch();

  return {
    data: posts,
  };
}
