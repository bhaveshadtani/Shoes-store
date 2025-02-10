import { useState, useEffect } from "react";

const ShoeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      description: "Step into comfort with our latest designs",
      image: "https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$129.99",
    },
    {
      id: 2,
      title: "Sports Edition",
      description: "Premium running shoes for athletes",
      image: "https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$159.99",
    },
    {
      id: 3,
      title: "Casual Comfort",
      description: "Everyday wear made stylish",
      image: "https://images.unsplash.com/photo-1580906853149-f82f7601d205?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$99.99",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[55vh] overflow-hidden rounded-lg shadow-lg">
      {/* Main carousel container */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <img
              src={slide.imageSrc}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Content overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {slide.title}
              </h2>
              <p className="text-xl text-white mb-6">{slide.description}</p>
              <p className="text-3xl font-bold text-white mb-8">
                {slide.price}
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full w-48 font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full hover:bg-white transition-colors flex items-center justify-center group"
      >
        <span className="border-l-2 border-t-2 border-black w-3 h-3 transform -rotate-45 translate-x-1"></span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full hover:bg-white transition-colors flex items-center justify-center group"
      >
        <span className="border-r-2 border-t-2 border-black w-3 h-3 transform rotate-45 -translate-x-1"></span>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoeCarousel;
