"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies that align with your goals and market opportunities.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategies"]
    },
    {
      icon: "⚡",
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology and digital solutions.",
      features: ["Process Automation", "Cloud Migration", "Data Analytics"]
    },
    {
      icon: "📈",
      title: "Performance Optimization",
      description: "Enhance efficiency and productivity across all business functions.",
      features: ["Operations Review", "Cost Reduction", "Quality Improvement"]
    },
    {
      icon: "🔧",
      title: "Change Management",
      description: "Navigate organizational transitions smoothly with expert guidance.",
      features: ["Leadership Training", "Team Development", "Culture Change"]
    },
    {
      icon: "💡",
      title: "Innovation Consulting",
      description: "Foster innovation and drive breakthrough solutions in your industry.",
      features: ["Innovation Strategy", "R&D Optimization", "Product Development"]
    },
    {
      icon: "🌐",
      title: "Market Expansion",
      description: "Enter new markets and expand your business reach effectively.",
      features: ["Market Research", "Entry Strategy", "Partnership Development"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to transform your business 
            and accelerate growth in today&apos;s competitive landscape.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass p-8 rounded-xl hover-lift group cursor-pointer"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-blue-400 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="mt-6 text-blue-400 font-semibold flex items-center"
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-4"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 