export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "Welcome to my first blog post! This is a simple example.",
  },
  {
    id: 2,
    slug: "react-router-tips",
    title: "React Router Tips",
    content:
      "Learn how to use React Router for dynamic routing in your React apps.",
  },
  {
    id: 3,
    slug: "context-api-auth",
    title: "Using Context API for Auth",
    content: "Manage authentication state in React using the Context API.",
  },
];
