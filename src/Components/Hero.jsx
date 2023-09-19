import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24">
      <div className="border-base-200">
        <h1 className="font-bold max-w-2xl text-4xl tracking-tight sm:6xl">We’re changing the way people shop.</h1>
        <p className="mt-6 max-w-xl leading-8 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel adipisci sunt deserunt similique modi repellendus pariatur aspernatur fugiat reprehenderit maxime.</p>
        <div className="mt-4">
          <Link to="products" className="btn btn-secondary">Our products</Link>
        </div>
      </div>
      <div className="carousel h-[28rem] p-4 rounded-box space-x-4  bg-neutral">
        {carouselImages.map((image) => {
          return (
            <div className="carousel-item" key={image}>
              <img
                src={image}
                alt="image"
                className="h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Hero