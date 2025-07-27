"use client";

import { motion } from "framer-motion";
import { VideoBackground } from "./VideoBackground";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Video Background - You can replace this with your actual video URL */}
      <VideoBackground
        src=""  // Add your video URL here like "/videos/business-consulting.mp4"
        fallbackImage="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2026&auto=format&fit=crop"
        overlayOpacity={0.6}
        className="h-full"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Transform Your
              <span className="text-gradient block">Business Future</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Strategic consulting solutions that drive growth, optimize operations, 
              and accelerate your path to success in today&apos;s competitive landscape.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-4"
              >
                Start Your Transformation
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-4"
              >
                View Our Services
              </motion.button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-sm flex flex-col items-center space-y-2"
            >
              <span>Scroll to explore</span>
              <div className="w-0.5 h-8 bg-white rounded-full opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </VideoBackground>
    </section>
  );
} 