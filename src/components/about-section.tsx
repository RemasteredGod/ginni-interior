"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring exceptional quality in all our projects."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and bring it to life."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives us to create spaces that inspire and delight."
    }
  ];

  return (
    <section id="about" className="py-20 bg-ginni-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ginni-grey-900 mb-6 font-[family-name:var(--font-playfair)]">
            About Ginni Interior
          </h2>
          <p className="text-xl text-ginni-grey-600 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in interior design, we specialize in creating
            sophisticated spaces that blend functionality with aesthetic beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-ginni-grey-900 font-[family-name:var(--font-playfair)]">
              Our Story
            </h3>
            <p className="text-ginni-grey-600 leading-relaxed">
              Founded in 2015, Ginni Interior began as a passion project to transform ordinary
              spaces into extraordinary experiences. What started as a small design studio has
              grown into a premier interior design firm serving clients across residential
              and commercial sectors.
            </p>
            <p className="text-ginni-grey-600 leading-relaxed">
              Our team of talented designers brings together diverse backgrounds in architecture,
              fine arts, and interior design to create spaces that are not just beautiful, but
              also functional and sustainable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-ginni-gold-100 rounded-lg p-8 shadow-lg">
              <h4 className="text-2xl font-semibold text-ginni-grey-900 mb-4 font-[family-name:var(--font-playfair)]">
                Our Mission
              </h4>
              <p className="text-ginni-grey-600 leading-relaxed">
                To create inspiring interiors that enhance the way people live, work, and interact
                with their environment. We believe that great design has the power to improve
                quality of life and create lasting value.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-ginni-grey-900 mb-12 font-[family-name:var(--font-playfair)]">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <value.icon className="w-8 h-8 text-ginni-gold-600" />
                </div>
                <h4 className="text-xl font-semibold text-ginni-grey-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-ginni-grey-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
