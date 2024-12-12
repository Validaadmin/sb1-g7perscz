import React from 'react';
import PriceCalculator from './PriceCalculator';
import PricingFeatures from './PricingFeatures';
import { PricingPlan } from '../types/pricing';

const PricingCard: React.FC<PricingPlan> = ({
  name,
  bestFor,
  roles,
  feePercentage,
  paymentTerm,
  features,
  popular
}) => {
  const getMaxRoles = (planName: string) => {
    switch (planName) {
      case 'Starter Plan': return 2;
      case 'Scale Plan': return 4;
      case 'Partner Plan': return Infinity; // Allow unlimited roles for Partner Plan
      default: return 1;
    }
  };

  const getButtonColor = (planName: string) => {
    if (popular) return 'bg-[#339476] hover:bg-[#2a7960]';
    return planName === 'Scale Plan' 
      ? 'bg-[#1D2F4F] hover:bg-[#162238]' 
      : 'bg-[#EAD2F7] hover:bg-[#d5b5e9] text-[#1D2F4F]';
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${popular ? 'ring-2 ring-[#339476]' : ''}`}>
      {popular && (
        <div className="bg-[#339476] text-white text-center py-2">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#1D2F4F] mb-2">{name}</h3>
        <p className="text-[#1D2F4F] text-sm mb-6">Best for: {bestFor}</p>
        
        <PriceCalculator 
          feePercentage={feePercentage}
          paymentTerm={paymentTerm}
          maxRoles={getMaxRoles(name)}
          planName={name}
        />
        
        <div className="mb-6">
          <p className="text-gray-600">Fee Percentage: {feePercentage}%</p>
        </div>

        <PricingFeatures features={features} />

        <button className={`w-full mt-8 py-3 px-6 rounded-md font-semibold transition-colors ${getButtonColor(name)}`}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default PricingCard;