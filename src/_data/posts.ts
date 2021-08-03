export interface Post {
  title: string;
  body: string;
}

// function fetch(): Post[] {
//   return [
//     {
//       title: "foo",
//       body: "abc",
//     },
//     {
//       title: "bar",
//       body: "def",
//     },
//   ];
// }

// export default async function () {
//   // const posts = fetch();

//   return {
//     posts: [
//       {
//         title: "foo",
//         body: "abc",
//       },
//       {
//         title: "bar",
//         body: "def",
//       },
//     ],
//   };
// }

export default [
  {
    title: "foo",
    body: "abc",
  },
  {
    title: "bar",
    body: "def",
  },
];
