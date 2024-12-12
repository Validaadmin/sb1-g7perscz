import React from 'react';

interface RolesInputProps {
  numberOfRoles: number;
  maxRoles: number;
  onChange: (value: number) => void;
}

const RolesInput: React.FC<RolesInputProps> = ({ numberOfRoles, maxRoles, onChange }) => {
  return (
    <div>
      <label htmlFor="roles" className="text-sm text-gray-600 block mb-2">
        Number of roles {maxRoles < Infinity && `(max ${maxRoles})`}:
      </label>
      <input
        type="number"
        id="roles"
        value={numberOfRoles}
        min={1}
        max={maxRoles}
        onChange={(e) => onChange(Math.max(1, Math.min(maxRoles, Number(e.target.value))))}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#339476] text-gray-700"
      />
    </div>
  );
}

export default RolesInput;