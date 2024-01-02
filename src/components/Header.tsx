import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 z-10 text-white py-4 w-full sticky top-0">
      <nav className="container mx-auto flex flex-col gap-4 md:flex-row items-center justify-between">
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
            <Link href="/#skills">Skills</Link>
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
