import { MdDelete, MdMovieEdit, MdPreview } from "react-icons/md";
import { TbBrandBackbone } from "react-icons/tb";
import { Link } from "react-router-dom";
import bag from "../../assets/img/bag.png";
import DeleteModal from "../Modal/DeleteModal";

/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, image_url } = shoe;

  return (
    <div className="card w-96 bg-base-100 relative group">
      <figure className="shadow-lg">
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="hero-overlay bg-opacity-20 rounded-xl flex justify-center items-center absolute inset-0 hidden group-hover:flex">
        <div
          className="flex justify-center items-center gap-8"
          id="delete-modal"
        >
          {/* view  */}
          <Link to={`/products/${id}`}>
            <MdPreview className="size-10" />
          </Link>

          {/* edit  */}
          <Link to={`edit/${id}`}>
            <MdMovieEdit className="size-10" />
          </Link>

          {/* delete  */}
          <button>
            <MdDelete
              className="size-10"
              onClick={() =>
                document.getElementById(`delete_modal+${id}`).showModal()
              }
            />
          </button>
        </div>
      </div>
      <div className="card-body text-center">
        <h2 className="text-xl font-bold py-4 border-b hover:text-[#571F7C]">
          {title.toUpperCase()}
        </h2>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-2xl">${price}</p>
          </div>
          <div className="flex items-center gap-4">
            <TbBrandBackbone /> <p className="font-bold">{brand}</p>
          </div>
          <div>
            <img className="size-9" src={bag} alt="" />
          </div>
        </div>
      </div>
      <DeleteModal
        id={`delete_modal+${id}`}
        productId={id}
        onDelete={onDelete}
      />
    </div>
  );
};

export default SingleProductCardDashboard;
