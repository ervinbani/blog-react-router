import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/admin"); // requirement: programmatic navigation after login
  };

  return (
    <div>
      <h2>Login</h2>

      {isAuthenticated ? (
        <>
          <p>You are already logged in.</p>
          <button onClick={() => navigate("/admin")}>Go to Admin</button>
        </>
      ) : (
        <>
          <p>Click to simulate login.</p>
          <button onClick={handleLogin}>Log In</button>
        </>
      )}
    </div>
  );
}
