import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GetTickets = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [buttonText, setButtonText] = useState("Submit Form");
  const [buttonColor, setButtonColor] = useState("bg-indigo-500");
  const [cardInfo, setCardInfo] = useState(false);
  const navigate = useNavigate();
  const successSound = new Audio();
  const handleSubmitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/form_submit", {
        firstName,
        lastName,
        email,
        telephoneNumber,
      })
      .then(() => {
        navigate("/confirmed");
      })
      .catch((err) => {
        return `${err.message}`;
      })
      .finally(() => {
        setButtonText("Confirmed"),
          setButtonColor("bg-indigo-500"),
          successSound.play(),
          navigate("/confirmed");
      });
    useEffect(() => {
      document.title = "Form Submitted!";
    }, []);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="uppercase font-androidAssassin text-2xl">
            enter the galaxy!
          </h1>
        </div>
        <form className="">
          <label htmlFor="" className="block text-center text-lg">
            First Name
          </label>
          <input
            className="mx-auto py-2 my-3 rounded-md text-center"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="John"
            required={true}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="" className="block text-center text-lg">
            Last Name
          </label>
          <input
            className="mx-auto py-2 my-3 rounded-md text-center"
            type="text"
            name="firstName"
            value={lastName}
            placeholder="John"
            required={false}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="" className="block text-center text-lg">
            Email
          </label>
          <input
            className="mx-auto py-2 my-3 rounded-md text-center"
            type="email"
            name="email"
            value={email}
            placeholder="John"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" className="block text-center text-lg">
            Telephone Number
          </label>
          <input
            className="mx-auto py-2 my-3 rounded-md text-center"
            type="text"
            name="telephoneNumber"
            value={telephoneNumber}
            placeholder="John"
            required={true}
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
          <label htmlFor="" className="block text-center text-lg">
            Payment Method
          </label>
          <div className="flex">
            <input type="radio" value={""} name="" className="mx-2" /> Cash
            <input type="radio" value={""} name="" className="mx-2" /> Bank
            Transfer
            <input type="radio" value={""} name="" className="mx-2" />{" "}
            Debit/Credit Card
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmitForm}
              className={`${buttonColor} my-2 rounded-md bg-blue-600 text-white px-2 py-2 hover:bg-fuchsia-700 uppercase`}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default GetTickets;
