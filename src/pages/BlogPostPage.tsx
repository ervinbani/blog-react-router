import { Link, useParams } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <p>
          No post exists with slug: <strong>{slug}</strong>
        </p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <Link to="/blog">← Back to Blog</Link>
    </div>
  );
}
