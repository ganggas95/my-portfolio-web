import React from "react";

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
