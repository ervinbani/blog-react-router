import { useAuth } from "../context/AuthContext";

export default function AdminPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h2>Admin</h2>
      <p>Welcome to the Admin Dashboard.</p>
      <p>
        Authenticated: <strong>{isAuthenticated ? "Yes" : "No"}</strong>
      </p>
    </div>
  );
}
