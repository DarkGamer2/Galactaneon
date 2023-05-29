import React from "react";
import { useNavigate } from "react-router-dom";
const Confirmed = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Confirmed</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default Confirmed;
