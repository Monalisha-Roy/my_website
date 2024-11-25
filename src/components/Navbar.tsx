"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";
import Image from "next/image";


const links = [
  { name: "home", path: "/" },
  { name: "projects", path: "/#projects" },
  { name: "about", path: "/#about" },
];

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex h-16 items-center justify-center fixed top-0 z-30 sm:px-2 w-full transition-all duration-300 ${isTop ? "bg-transparent" : "bg-background shadow-md"
          }`}
      >
        <ul className="flex gap-10 items-center justify-start w-11/12">
          {links.map((link, index) => (
            <li key={index} className="inline-block uppercase font-semibold">
              <Link
                href={link.path}
                className="text-text hover:text-primary duration-500 text-md sm:text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`h-16 w-full px-5 flex items-center justify-between fixed top-0 z-30 ${isTop ? "bg-transparent" : "bg-background shadow-md"
          }`}
      >
        <Image
          src="/weblogo.png"
          alt="logo"
          height={40}
          width={100}
          className="object-contain"
        />
        <button
          className="md:hidden text-primary z-40 focus:outline-none transition"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <IoReorderThree size={40} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-2/3 w-full bg-background bg-opacity-90 text-text shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center mt-20">
          {links.map((link, index) => (
            <li key={index} className="uppercase font-semibold hover:bg-gray-400  hover:text-black w-11/12 rounded-lg py-3 flex justify-center items-center ">
              <Link
                href={link.path}
                className="text-lg w-full text-center"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
