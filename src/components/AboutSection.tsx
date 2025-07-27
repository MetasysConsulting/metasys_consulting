"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Industry Awards" },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=400&auto=format&fit=crop",
      description: "15+ years in strategic consulting with Fortune 500 companies."
    },
    {
      name: "Michael Chen",
      role: "Digital Transformation Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      description: "Expert in technology integration and process optimization."
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      description: "Specializes in organizational efficiency and change management."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Metasys</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, Metasys Consulting has been at the forefront of business transformation, 
            helping organizations navigate complex challenges and achieve sustainable growth. Our team of 
            seasoned experts combines deep industry knowledge with innovative methodologies to deliver 
            results that exceed expectations.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass p-6 rounded-xl hover-lift"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our <span className="text-gradient">Leadership Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 rounded-xl hover-lift text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className="text-gradient">Core Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl hover-lift"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-3">Excellence</h4>
              <p className="text-gray-300">
                We strive for perfection in every project, delivering solutions that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl hover-lift"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-3">Partnership</h4>
              <p className="text-gray-300">
                We work collaboratively with our clients, becoming true partners in their success.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl hover-lift"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-white mb-3">Innovation</h4>
              <p className="text-gray-300">
                We embrace cutting-edge methodologies and technologies to drive transformation.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 