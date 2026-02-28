"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HeroProps {
  slides: Slide[];
}

export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-orange-400/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-teal-400/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-[1400px] mx-auto px-6">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
                <span className="bg-linear-to-r from-orange-500 via-red-500 to-teal-500 bg-clip-text text-transparent">
                  Wana Market
                </span>
                <br />
                {slides[currentSlide].title}
              </h1>

              <p className="mt-6 text-gray-600 max-w-lg text-base sm:text-lg">
                {slides[currentSlide].description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-7 py-3 rounded-full bg-linear-to-r from-orange-600 to-red-600 text-white font-semibold shadow-lg shadow-orange-300/40"
                >
                  Shop Bestsellers
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-7 py-3 rounded-full bg-white border border-gray-300 text-gray-900 font-medium shadow"
                >
                  Explore Collections
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 flex justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 w-[300px] sm:w-[400px] md:w-[400px] h-[300px] sm:h-[400px] md:h-[400px] rounded-full bg-linear-to-tr from-teal-400 to-orange-400 blur-3xl opacity-30 -z-10"></div>

              <motion.img
                src={slides[currentSlide].image}
                alt="Hero showcase"
                className="w-full max-w-[520px] rounded-3xl shadow-2xl ring-1 ring-orange-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}