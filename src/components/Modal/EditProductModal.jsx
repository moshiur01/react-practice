import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const EditProductModal = ({ modalId, productData, productId }) => {
  const edit = async () => {
    await fetch(`http://localhost:3000/shoes/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product updated Successfully");
        }
      });
  };

  return (
    <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box ">
        <h3 className="font-bold text-2xl text-center">Edit a product</h3>
        <p className="py-4 text-center text-lg font-semibold">
          Do you want to Edit?{" "}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary text-white mr-4" onClick={edit}>
              Edit
            </button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditProductModal;
