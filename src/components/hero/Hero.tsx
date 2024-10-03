import { SITE_TITLE } from "../../constants/site-title";
import HeroBackground from "./HeroBackground";
import HeroCard from "./HeroCard";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <>
      <HeroBackground />
      <section className="relative py-28 px-4 md:px-16 text-white text-left grid lg:grid-cols-2 gap-4">
        <div className="relative z-10 flex flex-col gap-3">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-6 flex flex-col items-start">
            Welcome to{" "}
            <span className="text-4xl lg:text-5xl font-bold block">
              {SITE_TITLE} Shop!
            </span>
          </h1>
          <p className="text-[#31546D] lg:max-w-[400px] text-left text-xs sm:text-sm mb-8 mr-10">
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>
          <div className="text-[#317189] justify-center sm:justify-start flex flex-wrap gap-8 items-center">
            <button className="px-6 py-3 rounded-xl text-sm bg-white shadow-lg uppercase font-medium transition">
              Shop Now
            </button>
            <a href="#">about us</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <HeroCard />
        </div>
      </section>
    </>
  );
};

export default Hero;
