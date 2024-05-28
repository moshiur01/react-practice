import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const DeleteModal = ({ id, productId, onDelete }) => {
  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        onDelete(productId);
        if (data) {
          toast.success("Product Deleted Successfully");
        }
      });
  };

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box ">
        <h3 className="font-bold text-2xl text-center">Delete the product</h3>
        <p className="py-4 text-center text-lg font-semibold">
          Do you want to delete{" "}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-error text-white mr-4"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteModal;
