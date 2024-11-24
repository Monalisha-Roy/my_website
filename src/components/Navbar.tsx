"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/#projects",
  },
  {
    name: "about",
    path: "/#about",
  },
];

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <nav
      className={`hidden md:flex h-12 items-center justify-center fixed top-0 z-30 sm:px-2 w-full
          ${isTop ? "bg-transparent" : "bg-background shadow-md"}
        `}
    >
      <ul className="flex gap-14 items-center justify-start w-11/12">
        {links.map((link, index) => (
          <li key={index} className="inline-block uppercase font-semibold">
            <Link
              href={link.path}
              className={`text-text hover:text-primary duration-500 text-md sm:text-sm ${pathname === link.path
                  ? "text-primary border-b-2 border-white"
                  : ""
                }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}