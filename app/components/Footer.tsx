import React from 'react';
import Link from "next/link";

const Footer: React.FC = () => {
  const links = [
    { href: "/terms", text: "Terms of Service" },
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/contact", text: "Contact Us" },
  ];

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
      <p className="text-xs text-gray-500">© {new Date().getFullYear()} Communa. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {links.map((link) => (
          <Link 
            key={link.href}
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600" 
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;

