export interface CalculationResult {
  monthlyPayment: number;
  totalFee: number;
  averageSalaryPerRole: number;
  isValid: boolean;
  errorMessage?: string;
}

export const calculatePricing = (
  totalProjectedSalary: number,
  numberOfRoles: number,
  feePercentage: number,
  paymentTerm: number,
  maxRoles: number
): CalculationResult => {
  if (numberOfRoles > maxRoles) {
    return {
      monthlyPayment: 0,
      totalFee: 0,
      averageSalaryPerRole: 0,
      isValid: false,
      errorMessage: `Maximum ${maxRoles} roles allowed for this plan`
    };
  }

  if (numberOfRoles <= 0) {
    return {
      monthlyPayment: 0,
      totalFee: 0,
      averageSalaryPerRole: 0,
      isValid: false,
      errorMessage: 'Number of roles must be greater than 0'
    };
  }

  const averageSalaryPerRole = totalProjectedSalary / numberOfRoles;
  const totalSalary = averageSalaryPerRole * numberOfRoles;
  const totalFee = (totalSalary * feePercentage) / 100;
  const monthlyPayment = totalFee / paymentTerm;

  return {
    monthlyPayment,
    totalFee,
    averageSalaryPerRole,
    isValid: true
  };
};