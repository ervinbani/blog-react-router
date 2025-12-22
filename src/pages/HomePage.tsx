import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is a simple SPA demo.</p>

      <ul>
        <li>
          <Link to="/blog">Go to Blog</Link>
        </li>
        <li>
          <Link to="/login">Go to Login</Link>
        </li>
      </ul>
    </div>
  );
}
