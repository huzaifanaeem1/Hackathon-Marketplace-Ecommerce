"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "Shop", slug: "/" },
  { id: 3, name: "Product", slug: "/product" },
  { id: 4, name: "Page", slug: "/" },
  { id: 5, name: "About", slug: "/about" },
  { id: 6, name: "Contact", slug: "/contact" },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden z-50">
      {/* Menu Button */}
      <button
        className="text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FiX className="text-3xl" />
        ) : (
          <FiMenu className="text-3xl" />
        )}
      </button>

      {/* Mobile Menu */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 right-0 bg-white shadow-lg rounded-md p-5 w-48`}
      >
        <ul className="flex flex-col items-start gap-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.slug}
                className="text-[#272343] hover:text-[#007580] text-base font-medium"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobNavbar;
