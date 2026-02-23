"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/app/api/data";
import { Icon } from "@iconify/react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const animation = {
    initial: { y: 20, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="md:pt-28 pt-16 pb-24" id="contact">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <motion.div
          ref={ref}
          {...animation}
          className="text-center mb-16"
        >
          <p className="text-muted sm:text-28 text-18 mb-2">
            Get in <span className="text-primary">touch</span>
          </p>
          <h2 className="text-white sm:text-40 text-30 font-medium mb-4">
            Get In Touch
          </h2>
          <p className="text-muted text-opacity-80 text-18 max-w-xl mx-auto">
            Ready to store your produce? We’re here to help with cold storage and
            packing.
          </p>
        </motion.div>
        <motion.div
          {...animation}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-20 rounded-2xl p-10"
        >
          <h3 className="text-white text-24 font-semibold mb-6 text-center">
            {contactInfo.name}
          </h3>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <Icon
                icon="ion:mail-outline"
                className="text-primary flex-shrink-0 mt-0.5"
                width={24}
                height={24}
              />
              <div>
                <p className="text-muted text-sm mb-1">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-primary text-18"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon
                icon="ion:location-outline"
                className="text-primary flex-shrink-0 mt-0.5"
                width={24}
                height={24}
              />
              <div>
                <p className="text-muted text-sm mb-1">Location</p>
                <p className="text-white text-18">
                  {contactInfo.location}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon
                icon="ion:document-text-outline"
                className="text-primary flex-shrink-0 mt-0.5"
                width={24}
                height={24}
              />
              <div>
                <p className="text-muted text-sm mb-1">GST</p>
                <p className="text-white text-18 font-mono">
                  {contactInfo.gst}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
