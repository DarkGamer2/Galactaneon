import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/Theme";

const GetTickets = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [buttonText, setButtonText] = useState("Submit Form");
  const [buttonColor, setButtonColor] = useState("bg-indigo-500");
  const [isTyping, setIsTyping] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const navigate = useNavigate();
  const successSound = new Audio();
  const { theme } = useTheme();

  const handleSubmitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/form_submit", {
        firstName,
        lastName,
        email,
        telephoneNumber,
        paymentMethod: selectedPayment,
        creditCardNumber,
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
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isTyping) {
      setIsTyping(true);
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.value);
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <div className={`flex flex-col items-center dark:bg-black py-8 px-4`}>
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 dark:text-pink-500 uppercase font-androidAssassin">
            Enter the Galaxy!
          </h1>
          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName" className="text-lg font-medium dark:text-white font-Galacticagrid uppercase">
                First Name
              </label>
              <input
                className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                type="text"
                name="firstName"
                value={firstName}
                placeholder="John"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName" className="text-lg font-medium dark:text-white">
                Last Name
              </label>
              <input
                className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-lg font-medium dark:text-white">
                Email
              </label>
              <input
                className={`neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none ${
                  emailTouched && !isEmailValid(email)
                    ? "focus:ring-red-500"
                    : emailTouched && isEmailValid(email)
                    ? "focus:ring-green-500"
                    : "focus:ring-cyan-500"
                }`}
                type="email"
                name="email"
                value={email}
                placeholder="example@example.com"
                required
                onChange={handleInputChange}
                onFocus={() => setEmailTouched(true)}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="telephoneNumber" className="text-lg font-medium dark:text-white">
                Telephone Number
              </label>
              <input
                className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                type="text"
                name="telephoneNumber"
                value={telephoneNumber}
                placeholder="12345678"
                required
                onChange={(e) => setTelephoneNumber(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="tickets" className="text-lg font-medium dark:text-white">
                Number of Tickets
              </label>
              <input
                className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                type="number"
                name="tickets"
                value={1}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="paymentMethod" className="text-lg font-medium dark:text-white">
                Payment Method
              </label>
              <div className="flex flex-col space-y-1">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="cash"
                    name="payment"
                    checked={selectedPayment === "cash"}
                    onChange={handlePaymentChange}
                    className="text-cyan-500 dark:text-cyan-500"
                  />
                  <span className="dark:text-white">Cash</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="bankTransfer"
                    name="payment"
                    checked={selectedPayment === "bankTransfer"}
                    onChange={handlePaymentChange}
                    className="text-cyan-500 dark:text-cyan-500"
                  />
                  <span className="dark:text-white">Bank Transfer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="debitCreditCard"
                    name="payment"
                    checked={selectedPayment === "debitCreditCard"}
                    onChange={handlePaymentChange}
                    className="text-cyan-500 dark:text-cyan-500"
                  />
                  <span className="dark:text-white">Debit/Credit Card</span>
                </label>
              </div>
            </div>

            {selectedPayment === "debitCreditCard" && (
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="creditCardNumber" className="text-lg font-medium dark:text-white">
                    Credit Card Number
                  </label>
                  <input
                    className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                    type="text"
                    name="creditCardNumber"
                    value={creditCardNumber}
                    placeholder="1234 5678 9012 3456"
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-medium dark:text-white">Card Holder</label>
                  <input
                    className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-medium dark:text-white">Expiration Date</label>
                  <input
                    className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-medium dark:text-white">CVV</label>
                  <input
                    className="neon-input py-2 px-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none"
                    type="text"
                    placeholder="123"
                  />
                </div>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={handleSubmitForm}
                className={`${buttonColor} my-2 rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-fuchsia-700 uppercase`}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetTickets;
