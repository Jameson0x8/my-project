import React from 'react';
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Communa has revolutionized how I invest in digital assets.",
      author: "Sarah K.",
      role: "Digital Investor"
    },
    {
      quote: "The platform is intuitive and the community is fantastic.",
      author: "John D.",
      role: "Tech Enthusiast"
    },
    {
      quote: "I've seen great returns on my investments through Communa.",
      author: "Emily R.",
      role: "Financial Analyst"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
          What Our Users Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg"
                alt={`${testimonial.author} Avatar`}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-green-500" />
                ))}
              </div>
              <p className="font-bold mt-2 text-blue-600">{testimonial.author}, {testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
