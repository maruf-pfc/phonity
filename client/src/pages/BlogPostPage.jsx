"use client";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { getBlogBySlug, getRelatedBlogs } from "../utils/blogUtils";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Configure marked options for better rendering
  useEffect(() => {
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: true,
    });
  }, []);

  // Fetch blog post and related posts
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      const foundPost = getBlogBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedBlogs(foundPost));
      }
      setLoading(false);
    }, 500);
  }, [slug]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Render markdown safely
  const renderMarkdown = (content) => {
    if (!content) return "";
    const rawMarkup = marked(content);
    const cleanMarkup = DOMPurify.sanitize(rawMarkup);
    return cleanMarkup;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-6">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blog"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{post.title}</span>
          </div>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <Link
                key={index}
                to={`/blog?category=${category}`}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center mb-6">
            <img
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-gray-500 text-sm">
                {formatDate(post.date)} • 10 min read
              </p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-8">
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          </article>

          {/* Author Bio */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-12">
            <div className="flex items-start">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mb-12">
            <h3 className="font-bold text-lg mb-4">Share this article</h3>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </button>
              <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
              <button className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
              <button className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="font-bold text-2xl mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <img
                        src={relatedPost.coverImage || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <h4 className="font-bold mb-2 hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                      </Link>
                      <p className="text-sm text-gray-500 mb-2">
                        {formatDate(relatedPost.date)}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-blue-600 text-sm font-medium hover:text-blue-800"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-12">
            <h3 className="font-bold text-2xl mb-6">Comments (12)</h3>
            <div className="mb-6">
              <textarea
                placeholder="Leave a comment..."
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
              <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Post Comment
              </button>
            </div>
            <div className="space-y-6">
              {/* Sample comments */}
              <div className="border-b pb-6">
                <div className="flex items-start">
                  <img
                    src="https://avatars.githubusercontent.com/u/182491592?s=40&v=4"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="font-medium mr-2">Alex Johnson</h4>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <p className="text-gray-700">
                      Great review! I've been considering upgrading to the
                      iPhone 15 Pro and this helped me make my decision. The
                      camera improvements sound impressive.
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <button className="flex items-center mr-4 hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                        Like (5)
                      </button>
                      <button className="hover:text-blue-600">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <img
                    src="https://avatars.githubusercontent.com/u/182491592?s=40&v=4"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="font-medium mr-2">Maria Garcia</h4>
                      <span className="text-gray-500 text-sm">3 days ago</span>
                    </div>
                    <p className="text-gray-700">
                      I'm still not convinced the price is justified. Would love
                      to see a comparison with the regular iPhone 15 to see if
                      the Pro features are worth the premium.
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <button className="flex items-center mr-4 hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                        Like (2)
                      </button>
                      <button className="hover:text-blue-600">Reply</button>
                    </div>
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
