import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Topbar = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex-col md:flex-row flex justify-between items-center">
        <p className="text-sm">Free shipping on all orders over 500 ৳</p>
        <div className="flex flex-row gap-4 text-sm">
          {!user && (
            <div className="flex flex-row gap-4">
              <Link to="/login" className="hover:text-gray-300 bg-white text-black px-4 py-1 rounded-2xl">
                Login
              </Link>
              <span>|</span>
              <Link to="/register" className="hover:text-gray-300 bg-white text-black px-4 py-1 rounded-2xl">
                Register
              </Link>
              <span>|</span>
              <Link to="/community" className="hover:text-gray-300">
                Phonity Community
              </Link>
            </div>
          )}

          {user && (
            <div className="flex flex-row gap-4">
              <Link to="/profile" className="hover:text-gray-300">
                {user.name}
              </Link>
              <span>|</span>
              <Link to="/community" className="hover:text-gray-300">
                Phonity Community
              </Link>
              <Link to="/logout" className="hover:text-gray-300 bg-white text-black px-4 py-1 rounded-2xl">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
