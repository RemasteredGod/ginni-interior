"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Ginni Interior transformed our house into a dream home. Their attention to detail and understanding of our vision was incredible. The final result exceeded our expectations.",
      rating: 5,
      project: "Living Room & Kitchen Renovation"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      content: "Working with Ginni Interior on our office space was a game-changer. They created a modern, functional environment that our team loves. Productivity has increased significantly.",
      rating: 5,
      project: "Commercial Office Design"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Homeowner",
      content: "From the initial consultation to the final walkthrough, Ginni Interior was professional and creative. They listened to our needs and delivered a space that's both beautiful and practical.",
      rating: 5,
      project: "Master Bedroom Suite"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      content: "The 3D visualizations helped us see exactly how our restaurant would look before construction. The final result perfectly matched our vision and has received countless compliments.",
      rating: 5,
      project: "Restaurant Interior Design"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Homeowner",
      content: "Ginni Interior's renovation services brought our outdated bathroom into the modern era. The quality of work and materials used is exceptional. Highly recommend their services!",
      rating: 5,
      project: "Bathroom Renovation"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ginni-grey-900 mb-6 font-[family-name:var(--font-playfair)]">
            What Our Clients Say
          </h2>
          <p className="text-xl text-ginni-grey-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="max-w-4xl mx-auto shadow-xl border-ginni-beige-200">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-ginni-gold-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-ginni-gold-700">
                        {currentTestimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-ginni-gold-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-ginni-grey-700 mb-6 italic leading-relaxed">
                      "{currentTestimonial.content}"
                    </blockquote>
                    <div>
                      <h4 className="text-xl font-semibold text-ginni-grey-900">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-ginni-grey-600">{currentTestimonial.role}</p>
                      <p className="text-sm text-ginni-gold-600 mt-1">
                        {currentTestimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-ginni-beige-100 hover:bg-ginni-gold-100 text-ginni-grey-600 hover:text-ginni-gold-600 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? "bg-ginni-gold-600"
                      : "bg-ginni-beige-300 hover:bg-ginni-gold-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-ginni-beige-100 hover:bg-ginni-gold-100 text-ginni-grey-600 hover:text-ginni-gold-600 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-ginni-gold-600 mb-2">150+</div>
              <div className="text-ginni-grey-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ginni-gold-600 mb-2">98%</div>
              <div className="text-ginni-grey-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ginni-gold-600 mb-2">8+</div>
              <div className="text-ginni-grey-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
