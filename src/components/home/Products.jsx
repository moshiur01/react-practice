/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div className="mt-20">
      <div className=" relative">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-wide ">NEW ARRIVALS</h1>
          <p className="text-sm pt-2">Just in now</p>
        </div>

        <div className="h-16 w-1 bg-[#571F7C] rounded-lg absolute bottom-0 -left-4"></div>
      </div>

      <div className="flex gap-2 px-6 justify-center items-center  ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 4).map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
