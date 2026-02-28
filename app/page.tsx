// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShoppingCartIcon, MagnifyingGlassIcon, HeartIcon } from "@heroicons/react/24/outline";

// const categories = ["Electronics", "Fashion", "Home & Living", "Sports", "Beauty", "Accessories"];

// const products = [
//   { id: 1, name: "iPhone 15 Pro", category: "Electronics", price: "$999", image: "/images/phone.jpg" },
//   { id: 2, name: "Wireless Headset", category: "Electronics", price: "$149", image: "/images/wireless.jpg" },
//   { id: 3, name: "Modern Sneakers", category: "Fashion", price: "$79", image: "/images/Modern Sneakers.jpg" },
//   { id: 4, name: "Luxury Sofa", category: "Home", price: "$499", image: "/images/Sofa.jpeg" },
// ];

// const heroSlides = [
//   {
//     image: "/images/Hero.png",
//     title: "Shop Smarter. Live Better.",
//     description: "Discover unbeatable deals, fast delivery, secure checkout, and a modern shopping experience made just for you.",
//   },
//   {
//     image: "/images/Hero2.png",
//     title: "Fashion That Speaks",
//     description: "Upgrade your wardrobe with our latest collection of trendy outfits for every occasion.",
//   },
//   {
//     image: "/images/Hero.png",
//     title: "Home Comforts",
//     description: "Explore modern furniture and accessories to make your home stylish and cozy.",
//   },
// ];

// export default function Home() {
//   const [cartCount, setCartCount] = useState(2);
//   const [query, setQuery] = useState("");
//   const [favs, setFavs] = useState<number[]>([]);
//   const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Smooth auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   function addToCart(p: typeof products[0]) {
//     setCartCount((c) => c + 1);
//     setToast({ id: Date.now(), text: `${p.name} added to cart` });
//     setTimeout(() => setToast(null), 1500);
//   }

//   function toggleFav(id: number) {
//     setFavs((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
//   }

//   return (
//     <div className="min-h-screen bg-linear-to-b from-white to-gray-50 text-gray-800 antialiased">
//       {/* NAVBAR */}
//       <motion.header
//         initial={{ y: -18, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.45 }}
//         className="sticky top-0 z-50 backdrop-blur-sm bg-white/60 border-b"
//       >
//         <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <img src="/logo.png" alt="Wana Market Logo" className="w-16 h-16 md:w-18 md:h-18 object-contain drop-shadow-lg" />
//             <div>
//               <div className="text-lg font-extrabold tracking-tight">WANA MARKET</div>
//               <div className="text-xs text-gray-500 -mt-0.5">Soko karibu yako</div>
//             </div>
//           </div>

//           <div className="flex-1 hidden md:flex justify-center">
//             <div className="max-w-xl w-full">
//               <label className="relative block">
//                 <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search for phones, headphones, sofas..."
//                   className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <button
//               aria-label="Wishlist"
//               className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white border shadow-sm hover:scale-[1.03] transition"
//             >
//               <HeartIcon className="h-5 w-5 text-gray-600" />
//               <span className="text-sm text-gray-600">Wishlist</span>
//             </button>

//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               className="relative inline-flex items-center justify-center p-2 rounded-full bg-white border shadow-sm"
//             >
//               <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
//               <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shadow">
//                 {cartCount}
//               </span>
//             </motion.button>
//           </div>
//         </div>
//       </motion.header>

//       {/* HERO */}
//       <main className="max-w-[1400px] mx-auto px-6">
//         <section className="relative overflow-hidden py-20 md:py-28">
//           <div className="absolute inset-0 -z-10">
//             <div className="absolute w-80 h-80 bg-orange-400/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
//             <div className="absolute w-96 h-96 bg-teal-400/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-[1400px] mx-auto px-6">
//             {/* LEFT TEXT */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="md:col-span-6"
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -30 }}
//                   transition={{ duration: 1 }}
//                 >
//                   <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
//                     <span className="bg-linear-to-r from-orange-500 via-red-500 to-teal-500 bg-clip-text text-transparent">
//                       Wana Market
//                     </span>
//                     <br />
//                     {heroSlides[currentSlide].title}
//                   </h1>

//                   <p className="mt-6 text-gray-600 max-w-lg text-base sm:text-lg">
//                     {heroSlides[currentSlide].description}
//                   </p>

//                   <div className="mt-8 flex flex-wrap gap-4">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       className="px-7 py-3 rounded-full bg-linear-to-r from-orange-600 to-red-600 text-white font-semibold shadow-lg shadow-orange-300/40"
//                     >
//                       Shop Bestsellers
//                     </motion.button>

//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       className="px-7 py-3 rounded-full bg-white border border-gray-300 text-gray-900 font-medium shadow"
//                     >
//                       Explore Collections
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             {/* RIGHT IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="md:col-span-6 flex justify-center"
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentSlide}
//                   animate={{ y: [0, -20, 0] }}
//                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                   className="relative"
//                 >
//                   <div className="absolute inset-0 w-[300px] sm:w-[400px] md:w-[400px] h-[300px] sm:h-[400px] md:h-[400px] rounded-full bg-linear-to-tr from-teal-400 to-orange-400 blur-3xl opacity-30 -z-10"></div>

//                   <motion.img
//                     src={heroSlides[currentSlide].image}
//                     alt="Hero showcase"
//                     className="w-full max-w-[520px] rounded-3xl shadow-2xl ring-1 ring-orange-200"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 1 }}
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>
//           </div>
//         </section>

//    {/* CATEGORIES */}
//          <section className="py-6">
//            <motion.h2
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold"
//           >
//             Browse Categories
//           </motion.h2>

//           <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//             {categories.map((c, i) => (
//               <motion.button
//                 key={c}
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.06 }}
//                 whileHover={{ scale: 1.04 }}
//                 className="flex items-center justify-center p-4 bg-white rounded-xl border shadow-sm text-sm font-medium text-gray-700"
//               >
//                 {c}
//               </motion.button>
//             ))}
//           </div>
//         </section>

//         {/* PRODUCTS */}
//         <section className="py-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold"
//           >
//             Popular Products
//           </motion.h2>

//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((p, idx) => (
//               <motion.article
//                 key={p.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.08 }}
//                 whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(15,23,42,0.12)" }}
//                 className="bg-white rounded-2xl overflow-hidden border border-gray-100"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute left-3 top-3 bg-white/80 backdrop-blur rounded-full px-3 py-1 text-xs font-medium text-gray-800 shadow">
//                     {p.category}
//                   </div>
//                   <button
//                     onClick={() => toggleFav(p.id)}
//                     aria-label="favorite"
//                     className={`absolute right-3 top-3 rounded-full p-2 bg-white/80 backdrop-blur shadow ${
//                       favs.includes(p.id) ? "ring-2 ring-rose-400" : ""
//                     }`}
//                   >
//                     <HeartIcon className={`h-5 w-5 ${favs.includes(p.id) ? "text-rose-500" : "text-gray-600"}`} />
//                   </button>
//                 </div>

//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
//                   <div className="mt-1 text-sm text-gray-500">{p.category}</div>

//                   <div className="mt-4 flex items-center justify-between gap-4">
//                     <div className="text-xl font-bold text-slate-900">{p.price}</div>

//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() => addToCart(p)}
//                         className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold shadow hover:scale-[1.03] transition"
//                       >
//                         Add to cart
//                       </button>
//                       <button
//                         onClick={() => setToast({ id: Date.now(), text: `Quick view ${p.name}` })}
//                         className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
//                       >
//                         Quick view
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* FOOTER */}
//       <footer className="mt-12 bg-white border-t">
//         <div className="max-w-[1400px] mx-auto px-6 py-8 text-sm text-gray-500">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div>© 2025 Kirova. All rights reserved.</div>
//             <div className="flex gap-6">
//               <div>Terms</div>
//               <div>Privacy</div>
//               <div>Support</div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Toast */}
//       <AnimatePresence>
//         {toast && (
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 8 }}
//             transition={{ duration: 0.25 }}
//             className="fixed right-6 bottom-6 bg-slate-900 text-white px-4 py-2 rounded-md shadow-lg z-50"
//           >
//             {toast.text}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }




// "use client";

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";


// const heroSlides = [
//   { image: "/images/Hero.png", title: "Shop Smarter. Live Better.", description: "Discover unbeatable deals..." },
//   { image: "/images/Hero2.png", title: "Fashion That Speaks", description: "Upgrade your wardrobe..." },
//   { image: "/images/Hero.png", title: "Home Comforts", description: "Explore modern furniture..." },
// ];

// const categories = ["Electronics", "Fashion", "Home & Living", "Sports", "Beauty", "Accessories"];

// const products = [
//   { id: 1, name: "iPhone 15 Pro", category: "Electronics", price: "$999", image: "/images/phone.jpg" },
//   { id: 2, name: "Wireless Headset", category: "Electronics", price: "$149", image: "/images/wireless.jpg" },
//   { id: 3, name: "Modern Sneakers", category: "Fashion", price: "$79", image: "/images/Modern Sneakers.jpg" },
//   { id: 4, name: "Luxury Sofa", category: "Home", price: "$499", image: "/images/Sofa.jpeg" },
// ];

// export default function Home() {
//   const [cartCount, setCartCount] = useState(2);
//   const [query, setQuery] = useState("");
//   const [toast, setToast] = useState<{ id: number; text: string } | null>(null);

//   return (
//     <div className="min-h-screen bg-linear-to-b from-white to-gray-50 text-gray-800 antialiased">
//       <Header cartCount={cartCount} query={query} setQuery={setQuery} />
//       <main className="max-w-[1400px] mx-auto px-6">
//         <Hero slides={heroSlides} />
//         {/* Add Categories & Products sections here as before */}

//         {/* CATEGORIES */}
//                 <section className="py-6">
//            <motion.h2
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold"
//           >
//             Browse Categories
//           </motion.h2>

//           <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//             {categories.map((c, i) => (
//               <motion.button
//                 key={c}
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.06 }}
//                 whileHover={{ scale: 1.04 }}
//                 className="flex items-center justify-center p-4 bg-white rounded-xl border shadow-sm text-sm font-medium text-gray-700"
//               >
//                 {c}
//               </motion.button>
//             ))}
//           </div>
//         </section>

//         {/* PRODUCTS */}
//         <section className="py-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold"
//           >
//             Popular Products
//           </motion.h2>

//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((p, idx) => (
//               <motion.article
//                 key={p.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.08 }}
//                 whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(15,23,42,0.12)" }}
//                 className="bg-white rounded-2xl overflow-hidden border border-gray-100"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute left-3 top-3 bg-white/80 backdrop-blur rounded-full px-3 py-1 text-xs font-medium text-gray-800 shadow">
//                     {p.category}
//                   </div>
//                   <button
//                     onClick={() => toggleFav(p.id)}
//                     aria-label="favorite"
//                     className={`absolute right-3 top-3 rounded-full p-2 bg-white/80 backdrop-blur shadow ${
//                       favs.includes(p.id) ? "ring-2 ring-rose-400" : ""
//                     }`}
//                   >
//                     <HeartIcon className={`h-5 w-5 ${favs.includes(p.id) ? "text-rose-500" : "text-gray-600"}`} />
//                   </button>
//                 </div>

//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
//                   <div className="mt-1 text-sm text-gray-500">{p.category}</div>

//                   <div className="mt-4 flex items-center justify-between gap-4">
//                     <div className="text-xl font-bold text-slate-900">{p.price}</div>

//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() => addToCart(p)}
//                         className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold shadow hover:scale-[1.03] transition"
//                       >
//                         Add to cart
//                       </button>
//                       <button
//                         onClick={() => setToast({ id: Date.now(), text: `Quick view ${p.name}` })}
//                         className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
//                       >
//                         Quick view
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </section>
//       </main>
  
//       <Footer />

//       <AnimatePresence>
//         {toast && (
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 8 }}
//             transition={{ duration: 0.25 }}
//             className="fixed right-6 bottom-6 bg-slate-900 text-white px-4 py-2 rounded-md shadow-lg z-50"
//           >
//             {toast.text}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { HeartIcon } from "@heroicons/react/24/outline";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";

// const heroSlides = [
//   { image: "/images/Hero.png", title: "Shop Smarter. Live Better.", description: "Discover unbeatable deals..." },
//   { image: "/images/Hero2.png", title: "Fashion That Speaks", description: "Upgrade your wardrobe..." },
//   { image: "/images/Hero.png", title: "Home Comforts", description: "Explore modern furniture..." },
// ];

// const categories = ["Electronics", "Fashion", "Home & Living", "Sports", "Beauty", "Accessories"];

// const products = [
//   { id: 1, name: "iPhone 15 Pro", category: "Electronics", price: "$999", image: "/images/phone.jpg" },
//   { id: 2, name: "Wireless Headset", category: "Electronics", price: "$149", image: "/images/wireless.jpg" },
//   { id: 3, name: "Modern Sneakers", category: "Fashion", price: "$79", image: "/images/Modern Sneakers.jpg" },
//   { id: 4, name: "Luxury Sofa", category: "Home", price: "$499", image: "/images/Sofa.jpeg" },
// ];

// export default function Home() {
//   const [cartCount, setCartCount] = useState(2);
//   const [query, setQuery] = useState("");
//   const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
//   const [favs, setFavs] = useState<number[]>([]);

//   function addToCart(p: typeof products[0]) {
//     setCartCount((c) => c + 1);
//     setToast({ id: Date.now(), text: `${p.name} added to cart` });
//     setTimeout(() => setToast(null), 1500);
//   }

//   function toggleFav(id: number) {
//     setFavs((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
//   }

//   return (
//     <div className="min-h-screen bg-linear-to-b from-white to-gray-50 text-gray-800 antialiased">
//       <Header cartCount={cartCount} query={query} setQuery={setQuery} />
//       <main className="max-w-[1400px] mx-auto px-6">
//         <Hero slides={heroSlides} />

//         {/* CATEGORIES */}
//         <section className="py-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold"
//           >
//             Browse Categories
//           </motion.h2>

//           <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//             {categories.map((c, i) => (
//               <motion.button
//                 key={c}
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.06 }}
//                 whileHover={{ scale: 1.04 }}
//                 className="flex items-center justify-center p-4 bg-white rounded-xl border shadow-sm text-sm font-medium text-gray-700"
//               >
//                 {c}
//               </motion.button>
//             ))}
//           </div>
//         </section>

//         {/* PRODUCTS */}
//         <section className="py-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold"
//           >
//             Popular Products
//           </motion.h2>

//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((p, idx) => (
//               <motion.article
//                 key={p.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.08 }}
//                 whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(15,23,42,0.12)" }}
//                 className="bg-white rounded-2xl overflow-hidden border border-gray-100"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute left-3 top-3 bg-white/80 backdrop-blur rounded-full px-3 py-1 text-xs font-medium text-gray-800 shadow">
//                     {p.category}
//                   </div>
//                   <button
//                     onClick={() => toggleFav(p.id)}
//                     aria-label="favorite"
//                     className={`absolute right-3 top-3 rounded-full p-2 bg-white/80 backdrop-blur shadow ${
//                       favs.includes(p.id) ? "ring-2 ring-rose-400" : ""
//                     }`}
//                   >
//                     <HeartIcon className={`h-5 w-5 ${favs.includes(p.id) ? "text-rose-500" : "text-gray-600"}`} />
//                   </button>
//                 </div>

//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
//                   <div className="mt-1 text-sm text-gray-500">{p.category}</div>

//                   <div className="mt-4 flex items-center justify-between gap-4">
//                     <div className="text-xl font-bold text-slate-900">{p.price}</div>

//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() => addToCart(p)}
//                         className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold shadow hover:scale-[1.03] transition"
//                       >
//                         Add to cart
//                       </button>
//                       <button
//                         onClick={() => setToast({ id: Date.now(), text: `Quick view ${p.name}` })}
//                         className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
//                       >
//                         Quick view
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </section>
//       </main>

//       <Footer />

//       <AnimatePresence>
//         {toast && (
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 8 }}
//             transition={{ duration: 0.25 }}
//             className="fixed right-6 bottom-6 bg-slate-900 text-white px-4 py-2 rounded-md shadow-lg z-50"
//           >
//             {toast.text}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }




"use client";

import React, { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/outline";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const heroSlides = [
  { image: "/images/Hero.png", title: "Shop Smarter. Live Better.", description: "Discover unbeatable deals..." },
  { image: "/images/Hero2.png", title: "Fashion That Speaks", description: "Upgrade your wardrobe..." },
  { image: "/images/Hero.png", title: "Home Comforts", description: "Explore modern furniture..." },
];

const categories = ["Electronics", "Fashion", "Home & Living", "Sports", "Beauty", "Accessories","Vegetables"];

const products = [
  { id: 1, name: "iPhone 15 Pro", category: "Electronics", price: "$999", image: "/images/phone.jpg" },
  { id: 2, name: "Wireless Headset", category: "Electronics", price: "$149", image: "/images/wireless.jpg" },
  { id: 3, name: "Modern Sneakers", category: "Fashion", price: "$79", image: "/images/Modern Sneakers.jpg" },
  { id: 4, name: "Luxury Sofa", category: "Home", price: "$499", image: "/images/Sofa.jpeg" },
  { id: 5, name: "Running Shoes", category: "Sports", price: "$129", image: "/images/RunningShoes.jpg" },
  { id: 6, name: "Makeup Kit", category: "Beauty", price: "$59", image: "/images/makeup.jpg" },
  { id: 7, name: "Smartwatch", category: "Electronics", price: "$199", image: "/images/Smartwatch.jpg" },
  { id: 8, name: "Handbag", category: "Accessories", price: "$89", image: "/images/Handbag.jpg" },
  { id: 9, name: "Broccoli", category: "Vegetables", price: "$79", image: "/images/Brocol.jpg" },

];

export default function Home() {
  const [cartCount, setCartCount] = useState(2);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const [favs, setFavs] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"low" | "high" | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Add to cart
  const addToCart = (p: typeof products[0]) => {
    setCartCount(c => c + 1);
    setToast({ id: Date.now(), text: `${p.name} added to cart` });
    setTimeout(() => setToast(null), 1500);
  };

  // Toggle favorite
  const toggleFav = (id: number) => {
    setFavs(s => (s.includes(id) ? s.filter(x => x !== id) : [...s, id]));
  };

  // Filter, search, sort, shuffle
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) filtered = filtered.filter(p => p.category === selectedCategory);
    if (query) filtered = filtered.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

    if (sortOrder) {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return sortOrder === "low" ? priceA - priceB : priceB - priceA;
      });
    }

    // Randomize display
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    return filtered;
  }, [selectedCategory, sortOrder, query]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when filter changes
  useEffect(() => setCurrentPage(1), [selectedCategory, sortOrder, query]);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white text-gray-800 antialiased">
      <Header cartCount={cartCount} query={query} setQuery={setQuery} />

      <main className="max-w-[1400px] mx-auto px-6">
        <Hero slides={heroSlides} />

        {/* Categories */}
        <section className="py-6">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-800"
          >
            Browse Categories
          </motion.h2>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center justify-center p-4 rounded-xl border font-medium transition-all ${
                !selectedCategory ? "bg-blue-500 text-white shadow-lg scale-105" : "bg-white text-gray-700 hover:shadow-md"
              }`}
            >
              All
            </button>
            {categories.map((c, i) => (
              <motion.button
                key={c}
                onClick={() => setSelectedCategory(c)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center justify-center p-4 rounded-xl border font-medium transition-all ${
                  selectedCategory === c ? "bg-blue-500 text-white shadow-lg" : "bg-white text-gray-700 hover:shadow-md"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Sort */}
        <section className="py-4 flex gap-4 items-center">
          <label className="font-medium text-gray-700">Sort by price:</label>
          <select
            value={sortOrder || ""}
            onChange={(e) => setSortOrder(e.target.value as "low" | "high" | null)}
            className="border rounded px-3 py-2 bg-white shadow-sm hover:shadow-md transition"
          >
            <option value="">None</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </section>

        {/* Products */}
        <section className="py-8">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-800"
          >
            Products
          </motion.h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((p, idx) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 bg-white/80 backdrop-blur rounded-full px-3 py-1 text-xs font-medium text-gray-800 shadow">
                    {p.category}
                  </div>
                  <button
                    onClick={() => toggleFav(p.id)}
                    aria-label="favorite"
                    className={`absolute right-3 top-3 rounded-full p-2 bg-white/80 backdrop-blur shadow transition ${
                      favs.includes(p.id) ? "ring-2 ring-rose-400" : ""
                    }`}
                  >
                    <HeartIcon className={`h-5 w-5 ${favs.includes(p.id) ? "text-rose-500" : "text-gray-600"}`} />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                  <div className="mt-1 text-sm text-gray-500">{p.category}</div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="text-xl font-bold text-gray-900">{p.price}</div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => addToCart(p)}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all"
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={() => setToast({ id: Date.now(), text: `Quick view ${p.name}` })}
                        className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                      >
                        Quick view
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 border rounded transition-all ${
                    currentPage === i + 1 ? "bg-blue-500 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="fixed right-6 bottom-6 bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg z-50"
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}