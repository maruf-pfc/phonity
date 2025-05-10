import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">Free shipping on all orders over $50</p>
        <div className="flex gap-4 text-sm">
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <span>|</span>
          <Link to="/register" className="hover:text-gray-300">
            Register
          </Link>
          <span>|</span>
          <Link to="/community" className="hover:text-gray-300">
            Phonity Community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
