import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import GalaxyWallpaper from "../assets/media/images/uwp3583259.jpeg";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <div className="">
        <img src={GalaxyWallpaper} alt="galaxy" />
      </div>
      <p>
        <span className="font-bold text-lg">
          Welcome Aliens to the official Galactaneon website!!!
        </span>
        for the best experience,view in{" "}
        <span className="font-bold">Dark Mode</span>
      </p>
      <Footer />
    </>
  );
};
export default Home;
