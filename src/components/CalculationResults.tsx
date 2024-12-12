import React from 'react';
import { formatCurrency } from '../utils/salaryCalculations';
import { CalculationResult } from '../utils/priceCalculations';
import { COLORS } from '../utils/constants';

interface CalculationResultsProps {
  result: CalculationResult;
  paymentTerm: number;
}

const CalculationResults: React.FC<CalculationResultsProps> = ({ result, paymentTerm }) => {
  if (!result.isValid) {
    return <p className="text-red-500 text-sm">{result.errorMessage}</p>;
  }

  const inHouseMonthlyMin = 7500; // $90,000 annually
  const inHouseMonthlyMax = 9167; // $110,000 annually
  const savings = inHouseMonthlyMin - result.monthlyPayment;

  return (
    <div className="mt-4 space-y-2">
      <p className="text-4xl font-bold text-[#339476]">
        {formatCurrency(result.monthlyPayment)}
        <span className="text-base font-normal text-gray-600">/month</span>
      </p>
      <p className="text-sm text-gray-600">for {paymentTerm} months</p>
      <p className="text-sm text-gray-600">
        Total Fee: {formatCurrency(result.totalFee)}
      </p>
      <p className="text-sm text-gray-500">
        Average per role: {formatCurrency(result.averageSalaryPerRole)}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm">
          <span className="font-bold text-[#1D2F4F]">Compared to in-house recruiter cost:</span>
          <br />
          {formatCurrency(inHouseMonthlyMin)} - {formatCurrency(inHouseMonthlyMax)}/month
        </p>
        {savings > 0 && (
          <p className="text-sm text-[#339476] font-semibold mt-1">
            Save up to {formatCurrency(savings)}/month
          </p>
        )}
      </div>
    </div>
  );
}

export default CalculationResults;