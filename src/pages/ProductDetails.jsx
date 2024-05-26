import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, image_url, price, title } = shoe;

  return (
    <>
      <div className="text-4xl font-bold text-center pb-8 pt-4 ">
        <p className="">Product Details</p>
      </div>
      <div className="flex justify-center gap-8">
        {/* image */}
        <div>
          <img src={image_url} alt="shoe image" className="" />
        </div>
        {/* description  */}
        <div className="leading-10 my-auto">
          <h1 className="text-4xl font-semibold"> {title}</h1>
          {/* price  */}
          <div className="flex gap-10 items-center pt-4">
            <p className="text-lg">Price: </p>
            <p className="text-lg font-bold text-[#571F7C]">${price}</p>
          </div>

          {/* brand  */}
          <div className="flex gap-10 items-center pt-4">
            <p className="text-lg">Brand: </p>
            <p className="text-lg font-bold text-[#571F7C]">{brand}</p>
          </div>

          {/* cart and buy now  */}
          <div className="pt-4 flex gap-4">
            <button className="w-36 h-12 bg-[#571F7C] text-white font-medium">
              ADD TO Cart
            </button>
            <button className="w-36 h-12 bg-[#571F7C] text-white font-medium">
              BUY IT NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
