"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import {
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiHeart,
  FiShare2,
} from "react-icons/fi";

const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(0);
    }

    // Set default selections if available
    if (selectedProduct?.storage?.length > 0) {
      setSelectedStorage(selectedProduct.storage[0]);
    }

    if (selectedProduct?.colors?.length > 0) {
      setSelectedColor(selectedProduct.colors[0]);
    }

    if (selectedProduct?.ram?.length > 0) {
      setSelectedRam(selectedProduct.ram[0]);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus" && quantity < 10) {
      setQuantity((prev) => prev + 1);
    } else if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    // Update button disabled state
    setIsButtonDisabled(quantity >= 10);
  };

  const handleAddToCart = () => {
    if (!selectedRam || !selectedStorage || !selectedColor) {
      toast.error("Please select all options before adding to cart", {
        duration: 2000,
      });
      return;
    }

    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        storage: selectedStorage,
        color: selectedColor,
        ram: selectedRam,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success("Product added to cart successfully", {
          duration: 2000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  const handleImageZoom = (e) => {
    if (!isZoomed) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = "/placeholder.svg?height=400&width=400";
    e.target.alt = "Product image not available";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-lg bg-gray-200 h-64 w-64 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  // Calculate discount percentage if originalPrice exists
  const discountPercentage = selectedProduct.originalPrice
    ? Math.round(
        ((selectedProduct.originalPrice - selectedProduct.price) /
          selectedProduct.originalPrice) *
          100
      )
    : 0;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Left Side - Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div
                className="relative overflow-hidden rounded-lg bg-gray-100 h-[400px] flex items-center justify-center cursor-pointer"
                onMouseMove={handleImageZoom}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                {selectedProduct.images && selectedProduct.images.length > 0 ? (
                  <img
                    src={
                      selectedProduct.images[mainImage]?.url ||
                      "/placeholder.svg"
                    }
                    alt={
                      selectedProduct.images[mainImage]?.altText ||
                      selectedProduct.name
                    }
                    className={`w-full h-full object-contain transition-transform duration-300 ${
                      isZoomed ? "scale-125" : ""
                    }`}
                    style={
                      isZoomed
                        ? {
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          }
                        : {}
                    }
                    onError={handleImageError}
                  />
                ) : (
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Product image not available"
                    className="w-full h-full object-contain"
                  />
                )}

                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                    -{discountPercentage}%
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {selectedProduct.images &&
                  selectedProduct.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setMainImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                        mainImage === index
                          ? "border-blue-600 shadow-md"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.altText || `Product view ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                    </button>
                  ))}
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="flex flex-col">
              {/* Product Title and Price */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h1>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {selectedProduct.price.toLocaleString()} ৳
                  </span>

                  {selectedProduct.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {selectedProduct.originalPrice.toLocaleString()} ৳
                    </span>
                  )}
                </div>

                <p className="text-gray-600">{selectedProduct.description}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Product Options */}
              <div className="space-y-6">
                {/* Color Selection */}
                {selectedProduct.colors &&
                  selectedProduct.colors.length > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Color
                        </span>
                        <span className="text-sm text-gray-500">
                          {selectedColor}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              selectedColor === color
                                ? "ring-2 ring-offset-2 ring-blue-600"
                                : "ring-1 ring-gray-200"
                            }`}
                            title={color}
                          >
                            <span
                              className="w-8 h-8 rounded-full"
                              style={{
                                backgroundColor: color.toLowerCase(),
                                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                              }}
                            ></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Storage Selection */}
                {selectedProduct.storage &&
                  selectedProduct.storage.length > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Storage
                        </span>
                        <span className="text-sm text-gray-500">
                          {selectedStorage}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.storage.map((storage) => (
                          <button
                            key={storage}
                            onClick={() => setSelectedStorage(storage)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedStorage === storage
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                          >
                            {storage}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                {/* RAM Selection */}
                {selectedProduct.ram && selectedProduct.ram.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        RAM
                      </span>
                      <span className="text-sm text-gray-500">
                        {selectedRam}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.ram.map((ram) => (
                        <button
                          key={ram}
                          onClick={() => setSelectedRam(ram)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedRam === ram
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {ram}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Quantity
                    </span>
                    <span className="text-sm text-gray-500">
                      Max 10 per order
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange("minus")}
                      disabled={quantity <= 1}
                      className={`p-2 rounded-l-lg border border-r-0 ${
                        quantity <= 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <FiMinus size={18} />
                    </button>
                    <div className="w-16 h-9 flex items-center justify-center border bg-gray-100">
                      {quantity}
                    </div>
                    <button
                      onClick={() => handleQuantityChange("plus")}
                      disabled={quantity >= 10}
                      className={`p-2 rounded-r-lg border border-l-0 ${
                        quantity >= 10
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <FiPlus size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 grid grid-cols-1 gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={isButtonDisabled}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                    isButtonDisabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <FiShoppingCart className="mr-2" size={20} />
                  {isButtonDisabled ? "Adding to cart..." : "Add to Cart"}
                </button>
              </div>

              {/* Product Specifications */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Brand</span>
                    <span className="font-medium">{selectedProduct.brand}</span>
                  </div>
                  {selectedProduct.storage &&
                    selectedProduct.storage.length > 0 && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500">Storage Options</span>
                        <span className="font-medium">
                          {selectedProduct.storage.join(", ")}
                        </span>
                      </div>
                    )}
                  {selectedProduct.ram && selectedProduct.ram.length > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">RAM Options</span>
                      <span className="font-medium">
                        {selectedProduct.ram.join(", ")}
                      </span>
                    </div>
                  )}
                  {selectedProduct.colors &&
                    selectedProduct.colors.length > 0 && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500">Available Colors</span>
                        <span className="font-medium">
                          {selectedProduct.colors.join(", ")}
                        </span>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            You May Also Like
          </h2>
          {similarProducts && similarProducts.length > 0 ? (
            <ProductGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <p className="text-gray-500">No similar products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
