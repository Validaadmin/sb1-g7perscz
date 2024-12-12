import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeaturesProps {
  features: string[];
}

const PricingFeatures: React.FC<PricingFeaturesProps> = ({ features }) => {
  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <Check className="h-5 w-5 text-[#339476] mr-2" />
          <span className="text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  );
}

export default PricingFeatures;