"use client";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { data, useNavigate } from "react-router-dom";
const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;

export default function CommunityPage() {
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { user } = useSelector((state) => state.auth);
  // Sample user data
  const currentUser = {
    name: "Md Sohel",
    username: "@sohel",
    avatar:
      "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/492399333_644063088616705_1572330640017402416_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGM4SpcDRMEDI7b5XdmZXpDcp260USidYZynbrRRKJ1hmDvegkG6-TKYoE7Rwa0aBnYzDZk7GD2_iq-S7mxbWze&_nc_ohc=g1E-Z43c1PEQ7kNvwEfDLbl&_nc_oc=Adn_e6g1uB3dVU2fQUnytVJlByfwo_coYzhQ8YriDU_t_0i_OEkcaEJrWXOdXc0yZcQ&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ffxniIeoivvk09Bk2vbiFQ&oh=00_AfIIgFqc_rc_K9eWErDV_74hdUeeISlFnzpvTqIjNkvw6A&oe=68257E74",
    bio: "Tech enthusiast and smartphone reviewer. I love testing the latest gadgets and sharing my experiences with the community.",
    followers: 43,
    following: 67,
    posts: 9,
    joined: "January 2025",
    location: "Dhaka, Bangladesh",
    website: "sohel.tech",
    interests: ["Smartphones", "Wearables", "Photography", "Gaming"],
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user) {
    currentUser.userId = user._id;
  }

  // Sample community posts
  const [communityPosts, setCommunityPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/v1/community`)
      .then((res) => {
        const data = res.data
        data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        setCommunityPosts(data)
      });
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle Like Functionality
  const handleLike = async (id, likes) => {
   const res = await axios.put(`${API_URL}/api/v1/community/${id}`, {
    likes: likes + 1
   })
   const filteredPost = communityPosts.find((post) => post._id === id)
   filteredPost.likes = filteredPost.likes + 1
 
   setCommunityPosts([...communityPosts])
  }
  // Handle post submission
  const handleSubmitPost = (e) => {
    e.preventDefault();

    if (!postContent.trim() && !selectedImage) return;

    const newPost = {
      userId: currentUser.userId,
      contents: postContent,
      image: imagePreview || null,
      likes: 0,
      comments: 0,
      username: currentUser.username,
      auth_avatar: currentUser.avatar,
      auth_name: currentUser.name,
    };

    axios
      .post(`${API_URL}/api/v1/community`, {
        newPost,
      })
      .then((res) => {
        console.log(res.data.data)
        newPost._id = res.data.data._id
        setCommunityPosts([newPost, ...communityPosts]);
        setPostContent("");
        setSelectedImage(null);
        setImagePreview(null);
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Phonity Community
        </h1>

        <div className="flex flex-col lg:flex-row gap-20 justify-between">
          {/* Left Column - Post Creation and Feed */}

          <div className="w-full lg:w-2/3 space-y-6">
            {/* Post Creation Section */}
            <div className="bg-white rounded-lg shadow py-6 px-4">
              <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
              <form onSubmit={handleSubmitPost}>
                <div className="flex items-start mb-4">
                  <img
                    src={currentUser.avatar || "/placeholder.svg"}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full cursor-pointer object-cover mr-3"
                  />
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="3"
                  ></textarea>
                </div>

                {imagePreview && (
                  <div className="mb-4 relative">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-[30%] h-[30%] object-cover rounded-lg mx-auto"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(null);
                        setImagePreview(null);
                      }}
                      className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white rounded-full p-1"
                    >
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
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <label className="cursor-pointer text-gray-500 hover:text-blue-600 flex items-center">
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
                        className="mr-1"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      <span>Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-lg font-medium ${
                      !postContent.trim() && !selectedImage
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                    disabled={!postContent.trim() && !selectedImage}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>

            {/* Community Feed */}
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-lg shadow py-6 px-4"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={post?.auth_avatar || "/placeholder.svg"}
                      alt={post?.auth_name || "anonymous"}
                      className="w-10 h-10 rounded-full cursor-pointer object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-semibold">
                        {post?.auth_name || "anonymous"}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {post?.username || "anonymous"} •{" "}
                        {post.createdAt
                          ? new Date(post.createdAt).toLocaleString("USA")
                          : "now"}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4">{post.contents}</p>

                  {post.image && (
                    <div className="mb-4">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post content"
                        className="rounded-lg w-[30%] h-[30%] object-cover"
                      />
                    </div>
                  )}

                  <div className="flex justify-between text-gray-500 pt-2 border-t">
                    <button onClick={() => handleLike(post._id, post.likes)} className="flex items-center hover:text-blue-600">
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
                        className="mr-1"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center hover:text-blue-600">
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
                        className="mr-1"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      <span>{post.comments}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - User Profile */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="flex items-center flex-row">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search community..."
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 md:w-64"
                />
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <div className="flex items-center gap-4">
                <button className="relative p-1 rounded-full text-gray-600 hover:bg-gray-100 mr-2">
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
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </button>

                <img
                  src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/492399333_644063088616705_1572330640017402416_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGM4SpcDRMEDI7b5XdmZXpDcp260USidYZynbrRRKJ1hmDvegkG6-TKYoE7Rwa0aBnYzDZk7GD2_iq-S7mxbWze&_nc_ohc=g1E-Z43c1PEQ7kNvwEfDLbl&_nc_oc=Adn_e6g1uB3dVU2fQUnytVJlByfwo_coYzhQ8YriDU_t_0i_OEkcaEJrWXOdXc0yZcQ&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ffxniIeoivvk09Bk2vbiFQ&oh=00_AfIIgFqc_rc_K9eWErDV_74hdUeeISlFnzpvTqIjNkvw6A&oe=68257E74"
                  alt="User profile"
                  className="w-8 h-8 rounded-full cursor-pointer object-cover"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow sticky top-8">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-24 rounded-t-lg"></div>
              <div className="px-6 my-6">
                <div className="flex justify-center">
                  <img
                    src={currentUser.avatar || "/placeholder.svg"}
                    alt={currentUser.name}
                    className="w-24 h-24 rounded-full cursor-pointer object-cover mr-3"
                  />
                </div>

                <div className="text-center mt-2">
                  <h2 className="text-xl font-bold">{currentUser.name}</h2>
                  <p className="text-gray-500">{currentUser.username}</p>
                </div>

                <p className="text-center mt-3">{currentUser.bio}</p>

                <div className="flex justify-center space-x-6 mt-4">
                  <div className="text-center">
                    <p className="font-bold">{currentUser.posts}</p>
                    <p className="text-gray-500 text-sm">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">{currentUser.followers}</p>
                    <p className="text-gray-500 text-sm">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">{currentUser.following}</p>
                    <p className="text-gray-500 text-sm">Following</p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 mr-2">
                    Edit Profile
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
                    Share Profile
                  </button>
                </div>

                {/* Additional Profile Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>{currentUser.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Joined {currentUser.joined}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <a
                      href={`https://${currentUser.website}`}
                      className="text-blue-600 hover:underline"
                    >
                      {currentUser.website}
                    </a>
                  </div>
                </div>

                {/* Interests */}
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentUser.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Suggested Connections */}
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">People You May Know</h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Tanvir Ahmmed",
                        username: "@tanvir",
                        avatar:
                          "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
                      },
                      {
                        name: "Moriam Khatun",
                        username: "@moriam",
                        avatar:
                          "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg",
                      },
                      {
                        name: "Salma Akter",
                        username: "@salma",
                        avatar:
                          "https://images.pexels.com/photos/12490472/pexels-photo-12490472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                      },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <img
                            src={person.avatar || "/placeholder.svg"}
                            alt={person.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <div>
                            <p className="font-medium text-sm">{person.name}</p>
                            <p className="text-gray-500 text-xs">
                              {person.username}
                            </p>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:bg-blue-50 font-medium text-sm px-3 py-1 rounded-full">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
