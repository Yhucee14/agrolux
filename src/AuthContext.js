import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage if available
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async (fullName, email, password) => {
    try {
      const response = await fetch(
        "https://agrolux.onrender.com/api/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, password }),
        }
      );
      const data = await response.json();
  
      if (response.ok) {
        const user = { firstName: fullName.split(" ")[0], fullName, ...data.user };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setError(null);
        return { success: true }; // Return success
      } else {
        return { success: false, message: data.message || "Registration failed" }; // Return error message
      }
    } catch (err) {
      console.error("Error during registration:", err);
      return { success: false, message: "An unexpected error occurred." }; // Return error message
    }
  };
  

  const login = async (email, password) => {
    try {
      const response = await fetch("https://agrolux.onrender.com/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      // Check if the response contains the pending account message
      if (data.message === "Pending Account. Please Verify Your Email") {
        return { success: false, message: data.message, redirectToVerify: true };
      }
  
      if (data.token && typeof data.token === 'string') {
        const user = data.user; // Assuming this includes firstName or fullName
        setUser(user); // Set user in state
        localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
        return { token: data.token, user };
      }
  
      return { success: false, message: 'Token not found in response' };
    } catch (error) {
      console.error("Error during login:", error);
      return { success: false, message: 'An unexpected error occurred.' };
    }
  };
  
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setError(null);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
