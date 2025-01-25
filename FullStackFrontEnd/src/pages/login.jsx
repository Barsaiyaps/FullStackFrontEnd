import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Retrieve user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Validate user credentials
    if (user && user.email === email && user.password === password) {
      localStorage.clear()
      localStorage.setItem("token","PSB")
      navigate("/products"); // Navigate to products page
    } else {
      alert("Invalid credentials or user does not exist. Please sign up first.");
      
      navigate("/login"); // Navigate back to login page
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ backgroundColor: "skyblue", margin: "50px", padding: "100px" }}
    >
      <div>
        <h1>Welcome to Login</h1>

        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <br />

        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
