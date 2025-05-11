import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg font-medium">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg font-medium">
          Error loading products
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array.isArray(products) &&
        products.slice(0, 8).map((product, index) => (
          <Link key={index} to={`/product/${product._id}`}>
            <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 p-4">
              {/* Brand badge */}
              <span className="absolute top-2 left-2 bg-gray-100 text-[10px] font-semibold px-2 py-[2px] rounded text-gray-600 uppercase tracking-wide z-10">
                {product.brand}
              </span>

              {/* Image */}
              <div className="w-full h-56 overflow-hidden rounded-t-xl">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-3 space-y-1">
                <h2 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h2>

                <div className="flex items-center space-x-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-green-600 text-sm font-semibold">
                        {product.discountPrice} ৳
                      </span>
                      <span className="line-through text-gray-400 text-xs">
                        {product.price} ৳
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-800 text-sm font-semibold">
                      {product.price} ৳
                    </span>
                  )}
                </div>
              </div>

              {/* Out of Stock Overlay */}
              {product.countInStock === 0 && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center text-xs font-semibold rounded-xl">
                  Out of Stock
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProductGrid;
