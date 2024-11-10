import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup, isLoading, errorMessage } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(fullName, email, password); // Call signup function from context
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Sign in</a>
      </p>
    </div>
  );
};

export default Signup;
