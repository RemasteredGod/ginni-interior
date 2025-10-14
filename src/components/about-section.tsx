'use client';

import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We strive for perfection in every detail, ensuring exceptional quality in all our projects.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with our clients to understand their vision and bring it to life.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description:
        'Our love for design drives us to create spaces that inspire and delight.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-10"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-10"
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
            About Ginni Interior - Kanpur&apos;s Premier Design Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in interior design, we are
            Kanpur&apos;s most trusted interior designers, creating
            sophisticated spaces that blend functionality with aesthetic beauty
            across Civil Lines, Swaroop Nagar, Kidwai Nagar, and all of Kanpur.
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
            <h3 className="text-3xl font-semibold text-gray-900 font-[family-name:var(--font-playfair)]">
              Our Story - Kanpur&apos;s Trusted Interior Design Partner
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2015, Ginni Interior began as a passion project to
              transform ordinary spaces into extraordinary experiences right
              here in Kanpur. What started as a small design studio has grown
              into Kanpur&apos;s premier interior design firm, serving clients
              across residential and commercial sectors in Gomti Nagar,
              Hazratganj, Aliganj, Indira Nagar, and throughout Uttar Pradesh.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of talented designers brings together diverse backgrounds
              in architecture, fine arts, and interior design to create spaces
              that are not just beautiful, but also functional and sustainable.
              We understand Kanpur&apos;s unique architectural heritage and
              blend modern design with traditional Awadhi aesthetics.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Why Choose Ginni Interior in Kanpur?</strong> We offer
              personalized consultations, affordable pricing, timely delivery,
              and the highest quality materials. Serving 500+ satisfied clients
              with 4.9★ rating makes us the best interior designer in Kanpur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg p-8 shadow-lg border border-amber-200"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
                Our Mission
              </h4>
              <p className="text-gray-600 leading-relaxed">
                To create inspiring interiors that enhance the way people live,
                work, and interact with their environment. We believe that great
                design has the power to improve quality of life and create
                lasting value.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-12 font-[family-name:var(--font-playfair)]">
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
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gradient-to-br from-white to-amber-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border border-amber-200"
                >
                  <value.icon className="w-8 h-8 text-amber-600" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
