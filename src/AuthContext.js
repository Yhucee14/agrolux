import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create context for authentication state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const navigate = useNavigate(); // For redirection

  // Handle login
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://agrolux.onrender.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data); // Log the response data
        setUser(data.user); // Store user info
        localStorage.setItem("user", JSON.stringify(data.user)); // Save user to localStorage
        localStorage.setItem("token", data.token); // Save token to localStorage
        navigate("/dashboard"); // Redirect on success
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle signup
  const signup = async (fullName, email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://agrolux.onrender.com/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // On successful signup, redirect to verify page
        navigate(`/verify/${data.userId}`);
      } else {
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check user authentication state on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, []);

  // Handle logout
  const logout = () => {
    setUser(null); // Clear user info
    localStorage.removeItem("user"); // Remove user from localStorage
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  const loggedIn = !!user; // Derive loggedIn state from user state

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading, errorMessage, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
