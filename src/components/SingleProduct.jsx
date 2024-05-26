/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import bag from "../assets/img/bag.png";
const SingleProduct = ({ shoe }) => {
  const { id, title, price, image_url } = shoe;

  return (
    <Link to={`/products/${id}`} className="pt-8">
      <div className="card w-96 bg-base-100 hover:translate-y-3 hover:duration-1000 ">
        <figure className="shadow-lg  hover:border-black rounded-lg hover:border-2 border-t">
          <img src={image_url} alt="Shoes" />
        </figure>

        <div className="card-body text-center">
          <h2 className="text-xl font-bold py-4 border-b hover:text-[#571F7C]">
            {title.toUpperCase()}
          </h2>
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-2xl">${price}</p>
            </div>
            <div>
              <img className="size-9" src={bag} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
