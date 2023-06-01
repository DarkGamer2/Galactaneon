import React from "react";
import { useNavigate } from "react-router-dom";
import ConfirmedImage from "../assets/media/images/confirmed.png";
import Navbar from "../components/Navbar";
const Confirmed = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <div className="mx-auto">
          <img
            className="mx-auto my-4"
            src={ConfirmedImage}
            alt="green checkmark"
          />
        </div>
        <h1 className="text-center font-bold text-2xl">Confirmed</h1>
        <p className="text-center my-2 text-xl">
          Your order has been confirmed,see you there!
        </p>
        <div className="text-center my-4">
          <button
            onClick={() => navigate("/")}
            className="font-Galacticagrid text-xl bg-blue-700 text-white rounded-md px-2 py-2 hover:bg-green-700 active:ring ring-2 ring-gray-300"
          >
            Go Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirmed;
