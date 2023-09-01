import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 w-full sticky">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          {/* Add your logo or website title here */}
          <h1 className="text-2xl font-bold">Subhan Nizar</h1>
        </div>
        <ul className="flex space-x-4">
          {/* Add your navigation links here */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
