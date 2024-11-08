import React from "react";
import { useNavigate } from "react-router-dom";

const TestComponent = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/dashboard")}>
      Go to Dashboard
    </button>
  );
};

export default TestComponent;
