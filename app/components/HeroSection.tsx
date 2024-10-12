import React from 'react';
import Link from 'next/link';

const Button: React.FC<{
  className?: string;
  variant?: 'default' | 'outline';
  href: string;
  children: React.ReactNode;
}> = ({ className = '', variant = 'default', href, children }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantStyles = variant === 'outline' 
    ? "bg-transparent border border-current" 
    : "text-white";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-600">
              Invest in Digital Assets
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Communa lets you buy and sell shares of unique digital assets. Diversify your portfolio, support creators, and profit from the digital economy.
            </p>
          </div>
          <div className="space-x-4">
            <Button href="/get-started" className="bg-green-500 hover:bg-green-600">Get Started</Button>
            <Button href="/get-started" className="bg-green-500 hover:bg-green-600">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

