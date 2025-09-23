"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Home, Building2, Wrench, Eye } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential design services. From concept to completion, we create spaces that reflect your lifestyle.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"]
    },
    {
      icon: Building2,
      title: "Commercial Design",
      description: "Elevate your business environment with professional commercial interior design. We create functional, inspiring workspaces that enhance productivity and brand identity.",
      features: ["Office Layout", "Brand Integration", "Ergonomic Design", "Sustainable Solutions"]
    },
    {
      icon: Wrench,
      title: "Renovation",
      description: "Breathe new life into existing spaces with our expert renovation services. We modernize and optimize your interiors while preserving architectural integrity.",
      features: ["Structural Updates", "Material Selection", "Project Management", "Quality Assurance"]
    },
    {
      icon: Eye,
      title: "3D Visualization",
      description: "Experience your future space before construction begins with our advanced 3D visualization services. Make informed decisions with realistic renderings.",
      features: ["Photorealistic Renderings", "Virtual Tours", "Material Samples", "Design Revisions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-5"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-5"
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive interior design solutions tailored to your unique needs and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 bg-gradient-to-br from-white to-amber-50/30">
                <CardHeader>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center mb-4 shadow-md"
                  >
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
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
          <p className="text-gray-600 mb-6">
            Ready to transform your space? Let's discuss your project.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
