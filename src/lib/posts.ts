export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content:
      "Welcome to my blog! This is the first post. React Router makes SPAs feel like multi-page apps.",
  },
  {
    id: 2,
    slug: "react-router-basics",
    title: "React Router Basics",
    content:
      "In this post we talk about BrowserRouter, Routes, Route, Link, NavLink and dynamic routing with params.",
  },
  {
    id: 3,
    slug: "protected-routes",
    title: "Protected Routes",
    content:
      "Sometimes you need to restrict access to certain pages. With Context + Navigate you can protect routes easily.",
  },
  {
    id: 4,
    slug: "simple-auth-context",
    title: "Simple Auth Context",
    content:
      "This is a mock authentication system: login() sets isAuthenticated to true, logout() sets it to false.",
  },
];
