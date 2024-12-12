import { PricingPlan } from '../types/pricing';

export const plans: PricingPlan[] = [
  {
    name: 'Starter Plan',
    bestFor: 'Small businesses starting their hiring journey',
    roles: 2,
    feePercentage: 20,
    totalFee: 44000,
    monthlyPayment: 7333.33,
    paymentTerm: 6,
    features: [
      '2 Roles included',
      'Access to 1 Recruiter',
      'Weekly Reporting',
      'Flexible Payment Options'
    ]
  },
  {
    name: 'Scale Plan',
    bestFor: 'Growing companies with multiple hiring needs',
    roles: 4,
    feePercentage: 17,
    totalFee: 74800,
    monthlyPayment: 6233.33,
    paymentTerm: 12,
    features: [
      '4 Roles included',
      'Access to 2 Recruiters',
      'Weekly Reporting',
      'Flexible Payment Options'
    ],
    popular: true
  },
  {
    name: 'Partner Plan',
    bestFor: 'Organizations with ongoing recruitment demands',
    roles: 5,
    feePercentage: 16,
    totalFee: 105600,
    monthlyPayment: 5866.67,
    paymentTerm: 18,
    features: [
      '5+ Roles included',
      'Access to 2 Recruiters',
      'Weekly Reporting',
      'Flexible Payment Options'
    ]
  }
];