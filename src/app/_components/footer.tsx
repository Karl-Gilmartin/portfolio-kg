import React from "react";
import Link from "next/link";
import { FaLinkedin, FaSpotify, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-5 mt-10">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p className="text-lg font-semibold mb-4">
            <a href="https://www.google.ie">Karl Gilmartin</a>
        </p>
        <p className="mb-4">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/karl-gilmartin-31907b217/" className="hover:text-blue-400" target="_blank">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://open.spotify.com/user/ecc16008?si=6f23f2c5446041c5" className="hover:text-blue-400" target="_blank">
            <FaSpotify size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;