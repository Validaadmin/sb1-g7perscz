export interface PricingPlan {
  name: string;
  bestFor: string;
  roles: number;
  feePercentage: number;
  totalFee: number;
  monthlyPayment: number;
  paymentTerm: number;
  features: string[];
  popular?: boolean;
}