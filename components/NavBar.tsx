import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-6">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/witch.png" width={40} height={35} />
            <span className="font-bold ml-2 text-purple-400">CS ROADMAP</span>
          </div>
        </Link>
        <ul className="flex items-center">
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Products</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Pricing</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Docs</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Company</a>
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="mr-6 font-medium text-gray-600">
            <a href="#" className="hover:text-purple-400">
              Login
            </a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a
              href="#"
              className="bg-purple-600 py-2 px-4 rounded-sm text-white hover:bg-purple-900 transition-all"
            >
              SignUp
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
