import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EditProductModal from "../components/Modal/EditProductModal";

const EditProducts = () => {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

  const [updateData, setUpdateData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    setUpdateData(data);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16 mx-12">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-8">
          {/* name field  */}
          <div className="mt-2">
            <label htmlFor="name">Enter Shoe Name</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* brand field  */}
          <div className="mt-2">
            <label htmlFor="brand">Enter Brand Name</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="price">Enter Price</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="description">Enter Description Details</label>
            <textarea
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              rows={4}
              cols={12}
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="image_url">Enter Shoe Image URL Link</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="id">Enter Shoe ID</label>
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center ">
            <input
              className="btn mt-4 w-full bg-blue-500 text-white p-4 hover:bg-blue-600"
              type="submit"
              value="Edit product"
              onClick={() =>
                document.getElementById(`editModal+${id}`).showModal()
              }
            />
          </div>
        </form>
      </div>
      <EditProductModal
        modalId={`editModal+${id}`}
        productData={updateData}
        productId={shoe?.id}
      />
    </div>
  );
};

export default EditProducts;
