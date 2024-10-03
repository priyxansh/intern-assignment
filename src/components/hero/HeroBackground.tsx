import heroBg from "../../assets/bg-bottom.svg";
import backgroundImage from "../../assets/mask.png";

type HeroBackgroundProps = {};

const HeroBackground = ({}: HeroBackgroundProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-[900px] z-[-1]">
      <img
        src={backgroundImage}
        alt="Gradient Background"
        className="object-fill w-full"
      />
      <img src={heroBg} alt="Hero Background" className="absolute right-0 bottom-0" />
    </div>
  );
};

export default HeroBackground;
