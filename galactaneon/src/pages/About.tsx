import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section>
        <h1 className="uppercase font-bold text-2xl text-center">
          Learn about our galaxy
        </h1>
        <div className="w-auto">
          <p className="text-base font-medium my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-auto">
          <p className="text-base font-medium my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            perferendis, enim quis perspiciatis ipsa totam quod itaque!
            Assumenda, delectus. Quidem, quae. Saepe distinctio et, earum
            similique rerum doloremque quaerat illo? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quae dolorum voluptatibus, rem dicta
            debitis enim. Voluptate, esse doloremque consequatur inventore nisi
            iste explicabo voluptatibus sequi ipsam, quas, atque ab deleniti.
          </p>
        </div>
        <div className="w-auto">
          <p className="text-base font-medium my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus vero, dolorem placeat ullam nisi sit ducimus ad ipsam
            odio nesciunt id, dolore aliquam ipsa. Iste quisquam expedita nobis
            eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Libero distinctio dicta vel ducimus consequuntur,
            veniam doloribus autem aspernatur incidunt mollitia minima! Eum quo
            similique illum rem earum illo possimus nobis.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
