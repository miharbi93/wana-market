"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 via-white to-blue-100 px-4">

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border"
            >
                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <Image
                        src="/logo.png"
                        alt="Wana Market Logo"
                        width={120}
                        height={120}
                        className="object-contain"
                    />
                    <h2 className="text-2xl font-extrabold mt-4 text-gray-800">
                        Welcome Back 👋
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Login to continue shopping
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? (
                                    <EyeSlashIcon className="h-5 w-5" />
                                ) : (
                                    <EyeIcon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" className="accent-orange-500" />
                            Remember me
                        </label>

                        <button
                            type="button"
                            className="text-orange-600 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full py-3 rounded-xl bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
                    >
                        Login
                    </motion.button>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-full border-t"></div>
                        <span className="relative bg-white px-4 text-sm text-gray-500">
                            OR
                        </span>
                    </div>

                    {/* Create Account */}
                    {/* <button
            type="button"
            onClick={() => router.push("/register")}
            className="w-full py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-50 transition"
          >
            Create New Account
          </button> */}

                    <div className="text-center">
                        <Link
                            href="/"
                            className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
                        >
                            ← Back to Dashboard
                        </Link>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}