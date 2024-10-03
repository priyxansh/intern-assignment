import heroBg from "../../assets/bg-top.svg";
import backgroundImage from "../../assets/mask.png";

type FeaturedProductBackgroundProps = {};

const FeaturedProductBackground = ({}: FeaturedProductBackgroundProps) => {
  return (
    <div className="absolute w-full inset-0 z-[-1]">
      <img
        src={backgroundImage}
        alt="Gradient Background"
        className="object-fill w-full h-full"
      />
      <img src={heroBg} alt="Hero Background" className="absolute left-0 top-0 object-cover w-full h-full" />
    </div>
  );
};

export default FeaturedProductBackground;
