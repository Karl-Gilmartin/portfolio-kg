import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-xl font-bold cursor-pointer">Karl Gilmartin</span>
        </Link>
        <ul className="flex space-x-10 text-lg">
          <li>
            <Link href="/about" className="text-white transition-all duration-300 hover:text-gray-300 hover:font-bold hover:scale-105">About</Link>
          </li>
          <li>
            <Link href="/projects" className="text-white transition-all duration-300 hover:text-gray-300 hover:font-bold hover:scale-105">Projects</Link>
          </li>
          <li>
            <Link href="/blog" className="text-white transition-all duration-300 hover:text-gray-300 hover:font-bold hover:scale-105">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white bg-gray-700 rounded-xl p-3 transition-all duration-300 hover:text-black hover:font-bold hover:scale-105 hover:bg-white">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;