"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredOffers, setFilteredOffers] = useState([]);

  // Sample offers data
  const offers = [
    {
      id: 1,
      title: "Summer Sale: 20% Off All Accessories",
      description:
        "Get 20% off on all phone accessories including cases, screen protectors, and chargers.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "accessories",
      validUntil: "2023-08-31",
      couponCode: "SUMMER20",
      discount: "20%",
    },
    {
      id: 2,
      title: "Buy iPhone 14 Pro and Get AirPods Free",
      description:
        "Purchase any iPhone 14 Pro model and receive a pair of AirPods (2nd generation) absolutely free.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "phones",
      validUntil: "2023-07-15",
      couponCode: "FREEAIRPODS",
      discount: "Free AirPods",
    },
    {
      id: 3,
      title: "Trade-in Bonus: Extra $100 on Any Samsung Trade",
      description:
        "Trade in your old Samsung device and get an extra $100 bonus on top of the regular trade-in value.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "trade-in",
      validUntil: "2023-09-30",
      couponCode: "TRADEPLUS100",
      discount: "$100 Bonus",
    },
    {
      id: 4,
      title: "Student Discount: 10% Off Sitewide",
      description:
        "Students can enjoy 10% off on all products across the site with valid student ID verification.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "special",
      validUntil: "2023-12-31",
      couponCode: "STUDENT10",
      discount: "10%",
    },
    {
      id: 5,
      title:
        "Bundle Deal: Save $50 When You Buy Phone + Case + Screen Protector",
      description:
        "Purchase a phone with a case and screen protector to save $50 on your total order.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "bundle",
      validUntil: "2023-10-15",
      couponCode: "BUNDLE50",
      discount: "$50 Off",
    },
    {
      id: 6,
      title: "Flash Sale: 30% Off Google Pixel Devices",
      description:
        "Limited time offer! Get 30% off on all Google Pixel phones and accessories.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "phones",
      validUntil: "2023-07-05",
      couponCode: "PIXEL30",
      discount: "30%",
    },
    {
      id: 7,
      title: "Free Shipping on Orders Over $25",
      description:
        "Enjoy free standard shipping on all orders over $25. No coupon needed, automatically applied at checkout.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "shipping",
      validUntil: "2023-12-31",
      couponCode: "No code needed",
      discount: "Free Shipping",
    },
    {
      id: 8,
      title: "Loyalty Reward: $15 Off Your Next Purchase",
      description:
        "Existing customers get $15 off their next purchase as a thank you for their loyalty.",
      image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      category: "special",
      validUntil: "2023-11-30",
      couponCode: "LOYALTY15",
      discount: "$15 Off",
    },
  ];

  // Filter offers based on active tab
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredOffers(offers);
    } else {
      setFilteredOffers(offers.filter((offer) => offer.category === activeTab));
    }
  }, [activeTab]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Special Offers & Deals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest promotions, discounts, and special deals on
            phones, accessories, and more. Don't miss out on these limited-time
            offers!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Offers
          </button>
          <button
            onClick={() => setActiveTab("phones")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "phones"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Phones
          </button>
          <button
            onClick={() => setActiveTab("accessories")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "accessories"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Accessories
          </button>
          <button
            onClick={() => setActiveTab("bundle")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "bundle"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Bundles
          </button>
          <button
            onClick={() => setActiveTab("special")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "special"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Special Offers
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-3 rounded-full text-sm font-bold">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-500">
                    Valid until: {formatDate(offer.validUntil)}
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                    {offer.category.charAt(0).toUpperCase() +
                      offer.category.slice(1)}
                  </div>
                </div>
                <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center mb-4">
                  <span className="font-medium">Code: {offer.couponCode}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(offer.couponCode);
                      alert(
                        `Coupon code ${offer.couponCode} copied to clipboard!`
                      );
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Copy
                  </button>
                </div>
                <Link
                  to="/shop"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No offers available in this category at the moment.
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              View All Offers
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Get Exclusive Offers</h3>
            <p className="mb-6">
              Subscribe to our newsletter and be the first to know about our
              latest deals, promotions, and product launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto border border-white rounded-md"> 
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md focus:outline-none text-white"
              />
              <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
