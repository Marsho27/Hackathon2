import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-slate-100 text-black">
      <h1 className="text-xl font-bold">Bandage</h1>
      <nav className="flex-grow flex justify-center space-x-4">
        < Link href="/" className="hover:text-yellow-300">Home</Link>
        <Link href="/shop" className="hover:text-yellow-300">Shop</Link>
        <Link href="/products" className="hover:text-yellow-300">Products</Link>
        <Link href="/about" className="hover:text-yellow-300">About</Link>
        <Link href="/team" className="hover:text-yellow-300">Team</Link>
        <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;

