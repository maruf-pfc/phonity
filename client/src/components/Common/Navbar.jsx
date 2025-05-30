import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => product.quantity + total, 0) ||
    0;

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div>
      <nav className="container max-w-[95%] mx-auto flex items-center justify-between py-4">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Phonity
          </Link>
        </div>
        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/product"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Shop
          </Link>
          <Link
            to="/community"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Community
          </Link>
          <Link
            to="/offers"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Offers
          </Link>
          <Link
            to="/blog"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Blogs
          </Link>
        </div>
        {/* Right - Search and Cart */}
        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="hidden md:block bg-black px-2 rounded text-sm text-white"
            >
              Admin
            </Link>
          )}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1">
                {cartItemCount}
              </span>
            )}
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <Searchbar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xm font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/product"
              className="block py-2 text-gray-700 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Shop
            </Link>
            <Link
              to="/community"
              className="block py-2 text-gray-700 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Community
            </Link>
            <Link
              to="/offers"
              className="block py-2 text-gray-700 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Offers
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-gray-700 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Blogs
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
