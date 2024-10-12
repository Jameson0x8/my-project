import React from 'react';
import { CurrencyDollarIcon, ChartBarIcon, BoltIcon } from '@heroicons/react/24/outline';

const FeatureItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="h-12 w-12 mb-4 text-green-500" />
    <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: CurrencyDollarIcon,
      title: "Asset Trading",
      description: "Buy and sell shares of unique digital assets and collectibles"
    },
    {
      icon: ChartBarIcon,
      title: "Real-time Market",
      description: "Watch asset prices fluctuate based on market demand and trends"
    },
    {
      icon: BoltIcon,
      title: "Instant Transactions",
      description: "Execute trades quickly and securely on our platform"
    }
  ];

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">Key Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

