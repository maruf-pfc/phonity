import React from 'react'
import { FaSearch} from 'react-icons/fa';
export default function SearchPhone() {
  return (
    <div className="rounded-md max-w-5xl mx-auto p-8 text-center space-y-4 shadow-md">
        <h1 className="text-2xl font-bold">Find Your Perfect Match</h1>
        <p className="">
          Search by brand, price range, features, or specifications to find the smartphone that meets your needs.
        </p>
        <div className="flex justify-center items-center mt-4">
          <input
            type="text"
            placeholder="Search phones..."
            className="px-4 py-2 rounded-l-md border border-gray-500 outline-none w-80"
          />
          <button className="bg-blue-600 px-4 py-2 border border-blue-600 rounded-r-md hover:bg-blue-700 flex items-center gap-2">
            <FaSearch /> Search
          </button>
        </div>
      </div>
  )
}
