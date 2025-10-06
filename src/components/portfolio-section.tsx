"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Portfolio images from public folder (1.jpeg .. 6.jpeg)
const portfolioItems = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Residential",
    image: "/1.jpeg",
    description: "A contemporary living space featuring clean lines and natural materials."
  },
  {
    id: 2,
    title: "Luxury Kitchen",
    category: "Residential",
    image: "/2.jpeg",
    description: "High-end kitchen design with premium appliances and custom cabinetry."
  },
  {
    id: 3,
    title: "Office Workspace",
    category: "Commercial",
    image: "/3.jpeg",
    description: "Modern office design promoting productivity and collaboration."
  },
  {
    id: 4,
    title: "Master Bedroom",
    category: "Residential",
    image: "/4.jpeg",
    description: "Serene bedroom retreat with custom furnishings and soft lighting."
  },
  {
    id: 5,
    title: "Retail Space",
    category: "Commercial",
    image: "/5.jpeg",
    description: "Contemporary retail environment designed to enhance customer experience."
  },
  {
    id: 6,
    title: "Bathroom Renovation",
    category: "Residential",
    image: "/6.jpeg",
    description: "Luxurious bathroom featuring modern fixtures and spa-like amenities."
  }
];

const categories = ["All", "Residential", "Commercial"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-10"
        />
        <motion.div
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-playfair)]">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse collection of completed projects showcasing our design expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-amber-600 text-white"
                    : "text-gray-600 hover:text-amber-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-white to-amber-50/30 border border-amber-100">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-amber-600 text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
