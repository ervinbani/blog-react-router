import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogIndexPage() {
  return (
    <div>
      <h2>Blog</h2>
      <p>Select a post:</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
