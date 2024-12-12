export const calculateAverageSalary = (totalSalary: number, numberOfRoles: number): number => {
  if (numberOfRoles <= 0) return 0;
  return totalSalary / numberOfRoles;
};

export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
};