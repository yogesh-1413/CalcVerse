export interface SIPResult {
  monthlyInvestment: number;
  investmentPeriod: number;
  expectedReturn: number;
  totalInvestment: number;
  estimatedReturns: number;
  totalValue: number;
  chartData: { month: number; invested: number; value: number }[];
}

export interface SWPResult {
  initialInvestment: number;
  monthlyWithdrawal: number;
  withdrawalPeriod: number;
  expectedReturn: number;
  totalWithdrawn: number;
  remainingValue: number;
  chartData: { month: number; withdrawn: number; remaining: number }[];
}
export interface CAGRResult {
  initialValue: number;
  finalValue: number;
  investmentPeriod: number;
  cagr: number;
  totalGain: number;
  totalGainPercentage: number;
  chartData: { year: number; value: number }[];
}
