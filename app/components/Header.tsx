"use client";

import { motion } from "framer-motion";
import { ShoppingCartIcon, MagnifyingGlassIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  cartCount: number;
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
}

export default function Header({ cartCount, setQuery, query }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 backdrop-blur-sm bg-white/60 border-b"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Wana Market Logo" className="w-16 h-16 md:w-18 md:h-18 object-contain drop-shadow-lg" />
          <div>
            <div className="text-lg font-extrabold tracking-tight">WANA MARKET</div>
            <div className="text-xs text-gray-500 -mt-0.5">Soko karibu yako</div>
          </div>
        </div>

        <div className="flex-1 hidden md:flex justify-center">
          <div className="max-w-xl w-full">
            <label className="relative block">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for phones, headphones, sofas..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Wishlist"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white border shadow-sm hover:scale-[1.03] transition"
          >
            <HeartIcon className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-600">Wishlist</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            className="relative inline-flex items-center justify-center p-2 rounded-full bg-white border shadow-sm"
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shadow">
              {cartCount}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}