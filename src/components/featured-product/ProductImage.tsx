import dummyProduct from "../../assets/dummy-product.png";

type ProductImageProps = {};

const ProductImage = ({}: ProductImageProps) => {
  return (
    <div
      className="flex justify-center items-center mx-auto rounded-full border bg-white border-gray-200 w-full aspect-square max-w-[420px] relative z-10"
      style={{
        boxShadow: "0px 4px 50px 0px #788F9C40",
      }}
    >
      <div
        className="w-[65%] absolute aspect-square bg-white rounded-full"
        style={{
          boxShadow: "0px 4px 50px 0px #788F9C40",
        }}
      ></div>
      <img
        src={dummyProduct}
        alt="Agate Phone Grip"
        className="w-full max-w-[248px] aspect-square z-50"
      />
    </div>
  );
};

export default ProductImage;
