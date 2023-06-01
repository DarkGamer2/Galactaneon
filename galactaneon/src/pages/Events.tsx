import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeachParty from "../assets/media/images/160998-425x282r1-Teens-on-the-beach.jpg";
const Events = () => {
  return (
    <>
      <Navbar />
      <p className="uppercase text-center font-bold text-xl">Events</p>
      <section>
        <div>
          <h1 className="text-center">Tropik Adventure</h1>
          <div className="flex">
            <div>
              <img className="rounded-md" src={BeachParty} />
            </div>
            <div>
              <h2 className="text-center">A Tropical Adventure Awaits!</h2>
              <p>
                {" "}
                Tropik Adventure Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quae, enim quis provident amet atque
                similique, quam mollitia minus ad dolor consectetur. Dolorum
                deserunt illum pariatur quisquam. Perferendis accusamus ipsa
                excepturi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
