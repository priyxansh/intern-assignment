import dummyProduct from "../../assets/dummy-product.png";

type HeroCardProps = {};

const HeroCard = ({}: HeroCardProps) => {
  return (
    <div className="aspect-square px-4 bg-white rounded-3xl shadow-lg w-fit lg:ml-auto relative">
      <span className="absolute left-0 top-14 bg-[#8A93E5] text-white px-4 font-semibold py-2 text-xs rounded-r-md">
        New lot
      </span>
      <img src={dummyProduct} alt="Crystal Agate Phone Grip" />
    </div>
  );
};

export default HeroCard;
