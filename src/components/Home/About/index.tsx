"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutFeatures } from "@/app/api/data";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const topAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <section className="md:pt-28 pt-16" id="about">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 gap-12 items-start">
          <motion.div
            {...topAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="sm:text-28 text-18 text-white mb-2">
              About <span className="text-primary">us</span>
            </p>
            <h2 className="sm:text-40 text-30 text-white font-medium mb-6">
              Preserving the Harvest of Paradise
            </h2>
            <p className="text-muted text-opacity-80 text-18 mb-5">
              We cater to dedicated growers across Kashmir, providing a
              world-class environment for their produce. Whether you are storing
              your own harvest or stock acquired from other small growers, our
              facility is designed for excellence.
            </p>
            <p className="text-muted text-opacity-80 text-18 mb-5">
              Our services extend beyond storage to include specialized
              post-harvest management, ensuring that every fruit maintains its
              quality from orchard to table.
            </p>
            <p className="text-muted text-opacity-80 text-18 mb-8">
              Once the chambers are opened, we offer high-precision grading,
              cleaning, and sorting based on color, weight, and size, ensuring
              your product enters the market at its peak value.
            </p>
          </motion.div>
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-5 col-span-12"
          >
            <div className="grid gap-4">
              {aboutFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-5 py-4 bg-light_grey bg-opacity-30 rounded-xl border border-dark_border border-opacity-20"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <p className="text-18 text-muted font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
