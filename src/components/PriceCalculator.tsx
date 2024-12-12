import React, { useState } from 'react';
import { calculatePricing } from '../utils/priceCalculations';
import SalaryInput from './SalaryInput';
import RolesInput from './RolesInput';
import CalculationResults from './CalculationResults';

interface PriceCalculatorProps {
  feePercentage: number;
  paymentTerm: number;
  maxRoles: number;
  planName: string;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ 
  feePercentage, 
  paymentTerm, 
  maxRoles,
  planName 
}) => {
  const [totalProjectSalary, setTotalProjectSalary] = useState<number>(110000);
  const [numberOfRoles, setNumberOfRoles] = useState<number>(1);

  const result = calculatePricing(
    totalProjectSalary,
    numberOfRoles,
    feePercentage,
    paymentTerm,
    maxRoles
  );

  return (
    <div className="mb-6">
      <div className="space-y-4">
        <SalaryInput 
          totalSalary={totalProjectSalary}
          onChange={setTotalProjectSalary}
        />
        
        <RolesInput
          numberOfRoles={numberOfRoles}
          maxRoles={maxRoles}
          onChange={setNumberOfRoles}
        />

        <CalculationResults 
          result={result}
          paymentTerm={paymentTerm}
        />
      </div>
    </div>
  );
};

export default PriceCalculator;