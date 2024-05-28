import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AddProductModal = ({ productId, productData }) => {
  const [navigate, setNavigate] = useState(false);

  const addProduct = async () => {
    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product added successfully");
          setNavigate(true);
        }
      });
  };

  if (navigate) {
    return <Navigate to="/dashboard/all-products" replace={true} />;
  }
  return (
    <dialog id={productId} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box ">
        <h3 className="font-bold text-2xl text-center">Add a new product</h3>
        <p className="py-4 text-center text-lg font-semibold">
          Do you want to Add?{" "}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-error text-white mr-4"
              onClick={addProduct}
            >
              Add
            </button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddProductModal;
