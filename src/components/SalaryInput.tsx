import React from 'react';
import { Calculator } from 'lucide-react';
import { formatCurrency } from '../utils/salaryCalculations';

interface SalaryInputProps {
  totalSalary: number;
  onChange: (value: number) => void;
}

const SalaryInput: React.FC<SalaryInputProps> = ({ totalSalary, onChange }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="h-4 w-4 text-[#339476]" />
        <label htmlFor="salary" className="text-sm text-gray-600">
          Total project salaries for all roles:
        </label>
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        <input
          type="number"
          id="salary"
          value={totalSalary}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#339476] text-gray-700"
          placeholder="Enter total project salaries"
        />
      </div>
    </div>
  );
};

export default SalaryInput;