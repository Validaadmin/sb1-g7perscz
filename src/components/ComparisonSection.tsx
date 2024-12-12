import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 className="text-3xl font-bold text-[#1D2F4F] mb-8 text-center">
        Cost Comparison
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#339476] mb-4">
            In-house Senior Recruiter
          </h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Average Salary (per year): 
              <span className="font-semibold">CAD $90,000 - $110,000</span>
            </p>
            <p className="text-gray-600">
              Monthly Cost: 
              <span className="font-semibold">CAD $7,500 - $9,167</span>
            </p>
            <p className="text-sm text-gray-400 italic">
              *Employee expenses not included
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#339476] mb-4">
            Traditional Recruitment Agency
          </h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Average Fee: <span className="font-semibold">20% per placement</span>
            </p>
            <p className="text-gray-600">
              Cost for 5 roles: 
              <span className="font-semibold">CAD $110,000 average annual salary</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonSection;