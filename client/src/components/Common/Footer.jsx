import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold mb-4"
            >
              <Phone className="h-5 w-5" />
              <span>Phonity</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for all things mobile and tech. Quality
              products, competitive prices, and a vibrant community.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white">
                  Phones
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Tablets
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Phonity. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-white">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
