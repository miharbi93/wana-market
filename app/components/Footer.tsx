"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-[1400px] mx-auto px-6 py-8 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© 2025 Kirova. All rights reserved.</div>
          <div className="flex gap-6">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Support</div>
          </div>
        </div>
      </div>
    </footer>
  );
}