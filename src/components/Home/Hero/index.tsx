"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-16 overflow-hidden z-1"
      id="hero"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            {...leftAnimation}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <p className="text-white sm:text-28 text-18 mb-4 mt-4 lg:mt-10 text-center lg:text-left">
              Cold Storage &amp; Post-Harvest Solutions
            </p>
            <h1 className="font-medium lg:text-76 md:text-60 text-40 lg:text-start text-center text-white mb-6 leading-tight">
              Preserving the Harvest of{" "}
              <span className="text-primary">Paradise</span>
            </h1>
            <p className="text-muted text-opacity-80 text-16 sm:text-18 lg:text-start text-center mb-8 max-w-2xl mx-auto lg:mx-0">
              World-class cold storage and packing for dedicated growers across
              Kashmir. Store your harvest or sourced produce with confidence.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/#contact"
                className="bg-primary border border-primary rounded-lg text-18 sm:text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2.5 px-6"
              >
                Get in Touch
              </Link>
              <Link
                href="/#services"
                className="bg-transparent border border-primary rounded-lg text-18 sm:text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2.5 px-6"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 order-1 lg:order-2 flex justify-center"
          >
            <div className="w-full max-w-xl">
              <Image
                src="/images/hero/kfp-hero-collage.png"
                alt="Kashmir Fruit Preservers facility and operations"
                width={1024}
                height={575}
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute sm:w-72 w-64 sm:h-72 h-64 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-3xl rounded-full -top-40 -right-10 -z-10 opacity-70"></div>
    </section>
  );
};

export default Hero;
