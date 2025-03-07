import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/Theme";
import KonManiaTicket from "../assets/media/images/IMG_6965.jpg";
import { loadStripe } from "@stripe/stripe-js";
import Modal from "react-modal";

const stripePromise = loadStripe("pk_test_51LvjnYHW5YE4EViBNjQImvpkVx37UgqZ8vMewcEGR49N2TStdkPptMhaSzLAbApIwLZTHau3qgAChfFI1sf207Zi00APfXLcEu");

Modal.setAppElement("#root");

const GetTickets = () => {
 
  const navigate = useNavigate();

  const { theme } = useTheme();


  const handlePurchase = async () => {
    try {
      const stripe = await stripePromise;
  
      // Call the backend to create the Stripe Checkout session
      const response = await axios.post("http://localhost:4600/api/session");
  
      // Redirect the user to the Stripe Checkout page
      window.location.href = response.data.url;
    } catch (err) {
      console.error("Error initiating Stripe Checkout:", err);
    }
  };



  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <div className="justify-center items-center flex flex-col dark:bg-black py-8 px-4">
        <button onClick={handlePurchase}>
          <img src={KonManiaTicket} alt="KonMania Ticket" className="w-50 h-40" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default GetTickets;