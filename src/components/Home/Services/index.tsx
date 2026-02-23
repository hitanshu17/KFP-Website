"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { servicesData } from "@/app/api/data";
import { Icon } from "@iconify/react";

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const animation = {
    initial: { y: 30, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="md:pt-28 pt-16" id="services">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="text-center mb-16">
          <p className="text-muted sm:text-28 text-18 mb-2">
            What we <span className="text-primary">offer</span>
          </p>
          <h2 className="text-white sm:text-40 text-30 font-medium">
            Our Specialized Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              {...animation}
              transition={{ delay: index * 0.1 }}
              className="bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-20 rounded-2xl p-8 hover:border-primary hover:border-opacity-30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary bg-opacity-20 flex items-center justify-center mb-6">
                <Icon
                  icon={item.icon}
                  className="text-primary"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-white text-22 font-medium mb-3">
                {item.heading}
              </h3>
              <p className="text-muted text-opacity-80 text-17">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
