'use client'
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "This service transformed our workflow. The team is incredibly responsive and the results speak for themselves. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    title: "Product Manager, Creative Co.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "Exceptional quality and outstanding support. Our project was a huge success thanks to their expertise. A true partner!",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Founder, Innovate Labs",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "Working with them was a game-changer. Their innovative approach and dedication to results are unparalleled. Five stars!",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert Brown",
    title: "Marketing Lead, Global Corp.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "Our marketing campaigns have seen a significant boost since partnering with this team. Professional, efficient, and effective.",
    rating: 4,
  },
];

const pages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000); // Auto-advances every 5 seconds
    return () => clearInterval(interval);
  }, [totalTestimonials]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center my-2" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" // Decorative, accessible via parent aria-label
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.454a1 1 0 00-.363 1.118l1.287 3.96c.3.921-.755 1.688-1.539 1.118l-3.374-2.454a1 1 0 00-1.176 0l-3.374 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.363-1.118L2.05 9.397c-.783-.57-.381-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.96z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative w-full max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-xl" aria-roledescription="carousel" aria-label="Client Testimonials">
      <h2 className="sr-only">Client Testimonials Carousel</h2>
      <div
        className="relative overflow-hidden"
        role="group"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex-shrink-0 w-full flex flex-col items-center text-center p-4"
              role="tabpanel"
              id={`testimonial-${testimonial.id}`}
              aria-labelledby={`testimonial-author-${testimonial.id}`}
            >
              <img
                src={testimonial.image}
                alt={`Portrait of ${testimonial.name}`}
                className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-indigo-500"
              />
              <StarRating rating={testimonial.rating} />
              <p className="text-lg italic text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold text-indigo-600" id={`testimonial-author-${testimonial.id}`}>{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Testimonial slides">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
            } transition-colors duration-200`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
            tabIndex={index === currentIndex ? 0 : -1}
          />
        ))}
      </div>
    </section>
  );
};

export default pages;