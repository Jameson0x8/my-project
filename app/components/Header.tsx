import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white">
      <Link className="flex items-center justify-center" href="/">
        <ChartBarIcon className="h-6 w-6 text-green-500" />
        <span className="ml-2 text-2xl font-bold text-blue-500">Communa</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#how-it-works">
          How It Works
        </Link>
        <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#testimonials">
          Testimonials
        </Link>
      </nav>
    </header>
  );
};

export default Header;

