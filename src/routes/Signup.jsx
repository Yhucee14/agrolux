import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";

const Signup = () => {
  const { signup, isLoading, errorMessage } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(fullName, email, password); // Call signup function from context
  };

  return (
    <div className="signup-container flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px] flex-col">
      <Link to="/">
        <h1 className="text-[#ffffff] font-bold text-[28px] p-[40px]">
          Agrolux
        </h1>
      </Link>

      <div className="md:h-[80%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[32px] max-md:px-[20px]">
        <div>
          <h1 className="text-[50px] text-[#204e51] font-semibold max-md:text-[50px]">
            Sign Up
          </h1>
          <p className="font-light text-[20px]  ml-[10px]">Join Us Today</p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col mt-[43px] gap-9">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />

          {errorMessage && (
            <p className="text-red-500 font-bold sm:text-lg md:mt-[-18px] lg:mt-0 text-center">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full h-[60px] rounded-[20px] text-white bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer max-md:text-[16px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center h-[60px] rounded-[20px] text-white bg-[#204E51] justify-center">
                <div className="flex space-x-2">
                  <div
                    className="w-2 h-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            ) : (
              <div>Sign up</div>
            )}
          </button>
        </form>

        <p className="flex justify-center sm:text-lg px-2 py-1 md:py-2 font-light">
          Already have an account ?{" "}
          <Link to="/login">
            <span className="text-[#204e51] px-2 font-bold">Login here..</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
