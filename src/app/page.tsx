import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Contact from "@/components/Home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashmir Fruit Preservers | Cold Storage & Packing",
  description:
    "World-class cold storage and post-harvest solutions for growers across Kashmir. CA storage, grading, sorting, and custom packing.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
