"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/JF2PGhD1/377541012-f2ed247d-c525-4358-81c5-aa1d7d257c69.jpg",
    title: "Discover the Latest Smartphones",
    description:
      "Experience cutting-edge technology with our newest collection of premium smartphones.",
    buttonText: "Shop Now",
    buttonLink: "/category/phones",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/238xM4w2/freepik-the-style-is-candid-image-photography-with-natural-17118.png",
    title: "Exclusive Deals on Accessories",
    description:
      "Enhance your device experience with our premium accessories at special prices.",
    buttonText: "View Deals",
    buttonLink: "/deals",
  },
  {
    id: 3,
    image: "https://hype.org.ng/wp-content/uploads/2024/05/ecommcer.jpg",
    title: "Join Our Community",
    description:
      "Connect with tech enthusiasts, share experiences, and get exclusive community benefits.",
    buttonText: "Join Now",
    buttonLink: "/community",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative">
      {/* <section className="container mx-auto px-4 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Choose your dream phone
            </h1>
            <p className="text-xl text-muted-foreground">
              Compare features, read reviews, and make informed decisions with
              our comprehensive phone finder platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/shop"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-center"
              >
                Browse Phones
              </a>
              <a
                href="/community/discussions"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-md font-medium text-center"
              >
                Join Community
              </a>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/home/procamera.jpg"
              alt="Latest smartphones"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section> */}

      <div className="relative container mx-auto h-[300px] md:h-[500px] overflow-hidden my-4 border rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="object-cover w-[100%] h-[200px] md:h-[500px]"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="mb-6">{slide.description}</p>
                  <a
                    href={slide.buttonLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-block"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
        >
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
            className="h-6 w-6"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
        >
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
            className="h-6 w-6"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span className="sr-only">Next slide</span>
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
