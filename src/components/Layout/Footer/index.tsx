import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels, contactInfo } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="lg:col-span-4 md:col-span-6 col-span-6">
            <Logo />
            <div className="mt-6 space-y-2 text-muted text-17">
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>{contactInfo.location}</p>
              <p>GST: {contactInfo.gst}</p>
            </div>
            <h3 className="text-white text-24 font-medium sm:mt-20 mt-12">
              © {new Date().getFullYear()} Kashmir Fruit Preservers
            </h3>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Information</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.herf}
                    className="text-white hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-6">
            <h3 className="text-white text-24 font-medium">Contact</h3>
            <p className="text-muted text-opacity-60 text-18 mt-5">
              Ready to store your produce? Get in touch for cold storage and
              packing services.
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-4 bg-primary text-darkmode hover:bg-transparent hover:text-primary border border-primary px-5 py-2 rounded-lg font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
