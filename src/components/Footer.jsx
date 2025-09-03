import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-blue-900 text-blue-200">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          © {new Date().getFullYear()} Code. — Crafting Modern Web Experiences
        </div>
        <div className="text-sm">
          Privacy • Terms • Excellence in ReactJS & TailwindCSS
        </div>
      </div>
    </footer>
  );
}
