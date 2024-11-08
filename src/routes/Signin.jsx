import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setUser, error } = useAuth(); // Destructure login and error from context
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Clear previous error message
  
    try {
      const result = await login(email, password); // Call login function from AuthContext
  
      if (result.token && result.user) {
        setUser(result.user); // Update user in AuthContext
        localStorage.setItem("user", JSON.stringify(result.user)); // Save to localStorage
        navigate('/dashboard', { replace: true }); // Redirect after successful login
      } else {
        if (result.redirectToVerify) {
          // If account is pending verification, redirect to the verify page
          navigate(`/verify/${userId}`, { replace: true });
        } else {
          setErrorMessage(result.message || "Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px] flex-col">
      <Link to="/">
        <h1 className="text-[#ffffff] font-bold text-[28px] p-[40px]">Agrolux</h1>
      </Link>

      <div className="md:h-[80%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[38px] max-md:px-[20px]">
        <div>
          <h1 className="text-[70px] text-[#204e51] font-semibold max-md:text-[50px]">
            Login
          </h1>
          <p className="font-light text-[15px] ml-[10px]">Welcome Back</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-[43px] gap-9">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />

          {loading ? (
            <div className="flex items-center h-[60px] rounded-[20px] text-white bg-[#204E51] justify-center">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 font-extrabold rounded-full text-[#ffffff]"
                role="status"
              >
                <span className="visually-hidden">o</span>
              </div>
            </div>
          ) : (
            <button
              className="w-full h-[60px] rounded-[20px] text-white bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer max-md:text-[16px]"
              type="submit"
            >
              Login
            </button>
          )}

          {errorMessage && (
            <p className="text-red-500 font-bold md:text-lg mt-[-16px] text-center">
              {errorMessage}
            </p>
          )}
        </form>

        <div
          className="flex items-center justify-between font-light mt-[30px] text-[16px] max-md:text-[13px] cursor-pointer"
          onClick={handleShowPassword}
        >
          <p className="flex gap-[8px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <rect x="0.5" y="0.5" width="19" height="19" stroke="#204E51" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.8225 6.02069L7.98362 14.8596L3.17847 10.0544L4.06235 9.17049L7.98362 13.0917L15.9385 5.13681L16.8225 6.02069Z"
                fill="#204E51"
              />
            </svg>
            {showPassword ? "Hide Password" : "Show Password"}
          </p>
        </div>

        <p className="text-[15px] text-lg font-light">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-[#204e51] font-bold">Register...</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
