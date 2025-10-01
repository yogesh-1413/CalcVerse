import { SIPResult, SWPResult } from './SIP_SWP_Calculation_Frame';

export const calculateSIP = (
  monthlyInvestment: number,
  period: number,
  annualReturn: number
): SIPResult => {
  const monthlyRate = annualReturn / 12 / 100;
  const months = period * 12;

  const chartData = [];
  let totalInvested = 0;
  let currentValue = 0;

  for (let month = 1; month <= months; month++) {
    totalInvested += monthlyInvestment;
    currentValue = currentValue * (1 + monthlyRate) + monthlyInvestment;

    if (month % 6 === 0 || month === 1 || month === months) {
      chartData.push({
        month,
        invested: Math.round(totalInvested),
        value: Math.round(currentValue),
      });
    }
  }

  const totalValue = Math.round(currentValue);
  const totalInvestment = Math.round(totalInvested);
  const estimatedReturns = totalValue - totalInvestment;

  return {
    monthlyInvestment,
    investmentPeriod: period,
    expectedReturn: annualReturn,
    totalInvestment,
    estimatedReturns,
    totalValue,
    chartData,
  };
};

export const calculateSWP = (
  initialInvestment: number,
  monthlyWithdrawal: number,
  period: number,
  annualReturn: number
): SWPResult => {
  const monthlyRate = annualReturn / 12 / 100;
  const months = period * 12;

  const chartData = [];
  let remaining = initialInvestment;
  let totalWithdrawn = 0;

  for (let month = 1; month <= months; month++) {
    remaining = remaining * (1 + monthlyRate) - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;

    if (remaining < 0) {
      remaining = 0;
      totalWithdrawn = totalWithdrawn + remaining + monthlyWithdrawal;
      chartData.push({
        month,
        withdrawn: Math.round(totalWithdrawn),
        remaining: 0,
      });
      break;
    }

    if (month % 6 === 0 || month === 1 || month === months) {
      chartData.push({
        month,
        withdrawn: Math.round(totalWithdrawn),
        remaining: Math.round(remaining),
      });
    }
  }

  return {
    initialInvestment,
    monthlyWithdrawal,
    withdrawalPeriod: period,
    expectedReturn: annualReturn,
    totalWithdrawn: Math.round(totalWithdrawn),
    remainingValue: Math.round(Math.max(0, remaining)),
    chartData,
  };
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};
