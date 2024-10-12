import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button 
    className={`w-full bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded ${className}`} 
    {...props}
  >
    {children}
  </button>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input 
    className="w-full p-2 border border-gray-300 rounded bg-white" 
    {...props}
  />
);

const CTASection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">
              Ready to Start Investing?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
              Create your account now and get early access to
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

