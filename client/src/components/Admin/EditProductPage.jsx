import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/slices/productsSlice";
import { updateProduct } from "../../redux/slices/adminProductSlice";
import axios from "axios";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    storage: [],
    colors: [],
    ram: [],
    images: [],
  });

  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedProduct) {
      setProductData(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.imageUrl, altText: "" }],
      }));
      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, productData }));
    navigate("/admin/products");
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-6">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block font-semibold mb-2">
            Product Description:
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block font-semibold mb-2">
            Product Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Count in Stock */}
        <div className="mb-6">
          <label htmlFor="countInStock" className="block font-semibold mb-2">
            Count in Stock:
          </label>
          <input
            type="text"
            name="countInStock"
            id="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label htmlFor="sku" className="block font-semibold mb-2">
            Product SKU:
          </label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Storages */}
        <div className="mb-6">
          <label htmlFor="storage" className="block font-semibold mb-2">
            Product Storage Variants (Comma-Separated):
          </label>
          <input
            type="text"
            name="storage"
            id="storage"
            value={productData.storage.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                storage: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label htmlFor="colors" className="block font-semibold mb-2">
            Product Colors (Comma-Separated):
          </label>
          <input
            type="text"
            name="colors"
            id="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Ram */}
        <div className="mb-6">
          <label htmlFor="ram" className="block font-semibold mb-2">
            Product Ram Variant (Comma-Separated):
          </label>
          <input
            type="text"
            name="ram"
            id="ram"
            value={productData.ram.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                ram: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="imgUpload" className="block font-semibold mb-2">
            Upload Image
          </label>
          <input type="file" onChange={handleImageUpload} />

          {uploading && <p>Uploading...</p>}

          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
