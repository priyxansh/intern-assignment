import heroBg from "../../assets/bg-top.svg";
import backgroundImage from "../../assets/mask.png";

type HeroBackgroundProps = {};

const HeroBackground = ({}: HeroBackgroundProps) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-[900px] z-[-1] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maskImage: `url(${heroBg})`,
        maskSize: "cover",
        maskRepeat: "no-repeat",
        WebkitMaskImage: `url(${heroBg})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
};

export default HeroBackground;
