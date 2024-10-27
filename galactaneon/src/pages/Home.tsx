import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import GalaxyWallpaper from "../assets/media/images/uwp3583259.jpeg";
import welcomeWallpaper from "../assets/media/images/wp4575207-4k-galaxy-wallpapers.jpg";
import Footer from "../components/Footer";
import { useTheme } from "../context/Theme";
const Home = () => {
  const { theme } = useTheme();
  return (
    <main className={`w-full shadow ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Navbar />
      {/* <Carousel /> */}
      <div className="">
        <img src={GalaxyWallpaper} alt="galaxy" />
      </div>
      <section className="bg-fuchsia-500">
        <div className="flex h-60">
          <img
            className="float-left"
            height="500"
            width="300"
            src={welcomeWallpaper}
          />
          <div className="mx-4">
            <h1 className="uppercase text-white tracking-wider text-center font-androidAssassin text-xl">
              a galaxy awaits!
            </h1>
            <p className="text-white font-starCruiser text-lg font-medium my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              perferendis neque mollitia consequatur ullam laudantium delectus
              nesciunt consequuntur? Perferendis iure a soluta deleniti quam
              veniam tenetur qui voluptates, earum dolores? Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Accusantium architecto
              expedita rerum iure optio blanditiis obcaecati a eius fuga sed
              odio, id, nisi, pariatur magnam in eligendi exercitationem cumque
              libero?
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
