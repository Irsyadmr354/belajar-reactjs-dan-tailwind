import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">© {new Date().getFullYear()} Rizki Herbalindo — Artisan Digital & Madu</div>
        <div className="text-sm">Privacy • Terms • Confidentiality on request</div>
      </div>
    </footer>
  );
}
