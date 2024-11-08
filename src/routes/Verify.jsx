import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Verify = () => {
  const [confirmationCode, setPin] = useState("");
  const [state, setState] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();

  const JWT_SECRET = 'fuegfyefgwrgty9t3ur9giht4toyogytt674'; // Keep it secret or fetch it from env variables

  const handleVerification = async () => {
    if (confirmationCode.length !== 6) {
      setMessage("Please enter a valid 6-digit PIN.");
      return;
    }

    try {
      setState(true); // Show loading spinner
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
        console.log("Email verified successfully!");
        navigate(`/login`); // Redirect to login page after successful verification
      } else {
        console.error("Email verification failed");
        setMessage("Verification failed! Please try again.");
      }
    } catch (error) {
      console.error("Error during email verification:", error);
      setMessage("An error occurred during verification.");
    } finally {
      setState(false); // Stop loading spinner
    }
  };

  const handlePinChange = (e) => {
    setPin(e.target.value); // Update the pin state
    setMessage(""); // Clear any previous error messages
  };

  const handleResendPin = async () => {
    try {
      setState(true); // Show loading spinner
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
        console.log("Pin resent successfully!");
        setMessage("A new PIN has been sent to your email.");
      } else {
        console.error("Resend failed.");
        setMessage("Failed to resend pin.");
      }
    } catch (error) {
      console.error("Error during resend:", error);
      setMessage("An error occurred while resending the pin.");
    } finally {
      setState(false); // Stop loading spinner
    }
  };

  // Optionally, use an effect to handle any initial setup, like fetching user data
  useEffect(() => {
    // You could fetch user status or show a message based on the `userId` or session
  }, [userId]);

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px]">
      <div className="h-[70%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[38px] max-md:px-[20px]">
        <h1 className="text-[50px] text-[#204e51]">Verify Email</h1>
        <div className="flex mt-[50px] flex-col items-start justify-center">
          <input
            type="number"
            placeholder="Enter Pin"
            value={confirmationCode}
            onChange={handlePinChange}
            className="h-[60px] w-full mt-[20px] border rounded-[8px] p-[10px]"
          />
          <p className="text-[15px] font-thin text-start mt-[15px]">
            A six-digit pin has been sent to your email.
            <br />
            Please check and enter it again.
          </p>
        </div>

        {/* Displaying messages */}
        {message && (
          <p className="text-red-500 text-center mt-4 font-semibold">
            {message}
          </p>
        )}

        <div className="flex flex-col mt-[50px]">
          <div
            className="w-full h-[60px] rounded-[20px] text-white bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer max-md:text-[16px]"
            onClick={handleVerification}
          >
            {state ? (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            ) : (
              "Verify"
            )}
          </div>
          <div
            className="w-full h-[60px] rounded-[20px] text-[#204e51] border-[#204e51] border text-[20px] flex items-center justify-center my-[15px] cursor-pointer max-md:text-[16px]"
            onClick={handleResendPin}
          >
            {state ? (
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
            ) : (
              "Resend Pin"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
