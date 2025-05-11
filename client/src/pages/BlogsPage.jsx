"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Sample blog data (in a real app, this would come from your backend)
  const sampleBlogs = [
    {
      id: 1,
      slug: "iphone-15-pro-review",
      title: "iPhone 15 Pro Review: The Ultimate Smartphone Experience",
      excerpt:
        "We take a deep dive into Apple's latest flagship phone and explore all its new features and improvements.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-06-15",
      author: {
        name: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["reviews", "apple"],
    },
    {
      id: 2,
      slug: "android-vs-ios-2023",
      title: "Android vs iOS in 2023: Which Platform Reigns Supreme?",
      excerpt:
        "A comprehensive comparison of the two major mobile operating systems and their latest features.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-06-10",
      author: {
        nname: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["comparisons", "guides"],
    },
    {
      id: 3,
      slug: "best-budget-phones-2023",
      title: "Best Budget Phones of 2023: Quality Without Breaking the Bank",
      excerpt:
        "Discover our top picks for affordable smartphones that offer great performance and features.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-06-05",
      author: {
        name: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["buying-guides", "budget"],
    },
    {
      id: 4,
      slug: "future-of-foldable-phones",
      title: "The Future of Foldable Phones: What's Next?",
      excerpt:
        "Exploring the current state of foldable phone technology and what innovations we can expect in the coming years.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-05-28",
      author: {
        namname: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["technology", "trends"],
    },
    {
      id: 5,
      slug: "smartphone-photography-tips",
      title: "10 Pro Tips for Smartphone Photography",
      excerpt:
        "Learn how to take stunning photos with your smartphone with these professional photography tips and tricks.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-05-20",
      author: {
        name: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["photography", "guides"],
    },
    {
      id: 6,
      slug: "5g-technology-explained",
      title: "5G Technology Explained: Benefits, Challenges, and Future Impact",
      excerpt:
        "A comprehensive guide to understanding 5G technology and how it's changing the mobile landscape.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-05-15",
      author: {
        nname: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["technology", "guides"],
    },
    {
      id: 7,
      slug: "comparing-flagship-cameras-2023",
      title: "Comparing Flagship Smartphone Cameras in 2023",
      excerpt:
        "A detailed comparison of camera systems in the latest flagship smartphones from Apple, Samsung, and Google.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-04-28",
      author: {
        name: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["reviews", "photography"],
    },
    {
      id: 8,
      slug: "smartphone-battery-tips",
      title: "10 Tips to Extend Your Smartphone's Battery Life",
      excerpt:
        "Practical advice to help you get the most out of your smartphone's battery throughout the day.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-04-15",
      author: {
        nname: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["guides", "tips"],
    },
    {
      id: 9,
      slug: "best-smartphone-accessories-2023",
      title: "Must-Have Smartphone Accessories in 2023",
      excerpt:
        "Our curated selection of the best smartphone accessories to enhance your mobile experience.",
      coverImage:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2F20241004030054_Untitled+design+(11).jpg&h=268&w=401&q=100&v=20250320&c=1",
      date: "2023-04-05",
      author: {
        name: "Md. Maruf Sarker",
        avatar: "https://avatars.githubusercontent.com/u/182491592?s=48&v=4",
      },
      categories: ["accessories", "buying-guides"],
    },
  ];

  // Simulate fetching blogs
  useEffect(() => {
    // In a real app, you would fetch from your API
    setTimeout(() => {
      setBlogs(sampleBlogs);
      setFilteredBlogs(sampleBlogs);
      setLoading(false);
    }, 500);
  }, []);

  // Filter blogs by category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((blog) => blog.categories.includes(activeCategory))
      );
    }
  }, [activeCategory, blogs]);

  // Get all unique categories
  const allCategories = [...new Set(blogs.flatMap((blog) => blog.categories))];

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Phonity Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, reviews, and insights about
            smartphones, technology, and the mobile industry.
          </p>
        </div>

        {/* Featured Post */}
        {blogs.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogs[0].coverImage || "/placeholder.svg"}
                    alt={blogs[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <img
                      src={blogs[0].author.avatar || "/placeholder.svg"}
                      alt={blogs[0].author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">{blogs[0].author.name}</p>
                      <p className="text-gray-500 text-sm">
                        {formatDate(blogs[0].date)}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {blogs[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">{blogs[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogs[0].categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${blogs[0].slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Read Full Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Posts
          </button>
          {allCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(activeCategory === "all" ? 1 : 0).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link to={`/blog/${blog.slug}`} className="block overflow-hidden">
                <img
                  src={blog.coverImage || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-blue-200"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(category);
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${blog.slug}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={blog.author.avatar || "/placeholder.svg"}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      {blog.author.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatDate(blog.date)}
                  </span>
                </div>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts found in this category.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              View All Posts
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6">
              Get the latest blog posts, tech news, and exclusive content
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
