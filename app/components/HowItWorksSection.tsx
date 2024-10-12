import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description: "Sign up and set up your Communa profile to start your investment journey"
    },
    {
      number: 2,
      title: "Explore Assets",
      description: "Discover unique digital assets and potential investment opportunities"
    },
    {
      number: 3,
      title: "Trade and Grow",
      description: "Buy shares, monitor your portfolio, and watch your investments grow"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
          How It Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
