import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [confirmationCode, setPin] = useState(""); // Pin state
  const history = useNavigate(); // Navigate for redirection
  const { userId } = useParams(); // User ID from the URL
  const [isLoading, setIsLoading] = useState(false); // Loading state for verification
  const [errorMessage, setErrorMessage] = useState(""); // For handling error messages
  const [successMessage, setSuccessMessage] = useState(""); // For handling success messages

  const JWT_SECRET = 'fuegfyefgwrgty9t3ur9giht4toyogytt674';

  console.log("User ID:", userId); // Log the userId for debugging

  // Handle the confirmation code input
  const handlePinChange = (e) => {
    setPin(e.target.value); // Update confirmationCode when user types
  };

  // Verify the code
  const handleVerification = async () => {
    try {
      setIsLoading(true); // Set loading state to true when starting the process
      setErrorMessage(""); // Clear previous error messages
      setSuccessMessage(""); // Clear success message

      console.log("Verifying code:", confirmationCode);

      const response = await fetch(
        `https://agrolux.onrender.com/api/user/confirm/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JWT_SECRET}`,
          },
          body: JSON.stringify({ confirmationCode }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Email verified successfully:", data);
        setSuccessMessage("Email verified successfully!");
        // Redirect to login page after success
        setTimeout(() => {
          history("/login");
        }, 2000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Email verification failed. Please try again.");
        console.error("Email verification failed:", data.message);
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error("Error during email verification:", error);
    } finally {
      setIsLoading(false); // Reset loading state after the request
    }
  };

  // Handle resend pin functionality
  const handleResendPin = async () => {
    try {
      setIsLoading(true); // Set loading state to true for resend process
      setErrorMessage(""); // Clear previous error messages
      setSuccessMessage(""); // Clear success message

      // Logic to resend the pin
      const response = await fetch(
        `https://agrolux.onrender.com/api/user/resend-pin/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JWT_SECRET}`,
          },
        }
      );

      if (response.ok) {
        setSuccessMessage("Pin resent successfully! Check your email.");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to resend pin.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred while resending the pin.");
      console.error("Error during resend pin:", error);
    } finally {
      setIsLoading(false); // Reset loading state after the request
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px]">
      <div className="h-[70%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[38px] max-md:px-[20px]">
        <h1 className="text-[50px] text-[#204e51]">Verify Email</h1>
        
        <div className="flex mt-[50px] flex-col items-start justify-center">
          <input
            type="number"
            placeholder="Pin"
            value={confirmationCode}
            onChange={handlePinChange}
            className="h-[60px] w-full mt-[20px] border rounded-[8px] p-[10px]"
          />
          
          <p className="text-[15px] font-thin text-start mt-[15px]">
            A  pin has been sent to your email.
            <br />
            Please check and enter it here.
          </p>
          
          {errorMessage && <p className="text-red-600 mt-3">{errorMessage}</p>}
          {successMessage && <p className="text-green-600 mt-3">{successMessage}</p>}
        </div>
        
        <div className="flex flex-col mt-[50px]">
          <button
            className="w-full h-[60px] rounded-[20px] text-[white] bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer max-md:text-[16px]"
            onClick={handleVerification}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            ) : (
              "Verify"
            )}
          </button>
          
          <button
            className="w-full h-[60px] rounded-[20px] text-[#204e51] border-[#204e51] border text-[20px] flex items-center justify-center my-[15px] cursor-pointer max-md:text-[16px]"
            onClick={handleResendPin}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            ) : (
              "Resend Pin"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
