import React from 'react';
import PricingCard from './components/PricingCard';
import ComparisonSection from './components/ComparisonSection';
import { plans } from './data/pricingPlans';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#1D2F4F] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 font-montserrat">
            Flexible Pricing for Your Hiring Needs
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-2xl mx-auto">
            Choose the plan that best fits your recruitment requirements with flexible payment options
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-16">
          <p className="text-gray-600 text-center">
            * To be eligible for payment options, exclusivity needs to be given to Valida.
          </p>
        </div>

        <ComparisonSection />
      </div>
    </div>
  );
}

export default App;