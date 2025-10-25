import { useState } from 'react';
import { CreditCard, Info } from 'lucide-react';
import CalculatorLayout from './Calculator-layout';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export default function LoanPayoffCalculator() {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [interestRate, setInterestRate] = useState('9');
  const [loanTenure, setLoanTenure] = useState('10');
  const [extraPayment, setExtraPayment] = useState('5000');
  const [result, setResult] = useState<{
    normalMonths: number;
    normalInterest: number;
    withExtraMonths: number;
    withExtraInterest: number;
    timeSaved: number;
    moneySaved: number;
  } | null>(null);

  const calculatePayoff = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTenure) * 12;
    const extra = parseFloat(extraPayment);

    if (P > 0 && r > 0 && n > 0) {
      const normalEMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const normalInterest = normalEMI * n - P;

      let balance = P;
      let months = 0;
      let totalPaid = 0;

      while (balance > 0 && months < n * 2) {
        const interest = balance * r;
        const principal = normalEMI + extra - interest;
        balance -= principal;
        totalPaid += normalEMI + extra;
        months++;
      }

      const withExtraInterest = totalPaid - P;
      const timeSaved = n - months;
      const moneySaved = normalInterest - withExtraInterest;

      setResult({
        normalMonths: n,
        normalInterest,
        withExtraMonths: months,
        withExtraInterest,
        timeSaved,
        moneySaved,
      });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <CalculatorLayout
      title="Loan Payoff Calculator"
      description="Calculate early loan payoff with extra payments"
      icon={<CreditCard className="w-8 h-8" />}
      color="cyan"
    >
      <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-6 rounded dark:bg-cyan-800/30 transition-colors">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5 dark:text-cyan-100" />
          <div className="text-sm text-cyan-800 dark:text-cyan-100">
            <p className="font-semibold mb-1">Accelerate Your Loan Payoff</p>
            <p>
              Making extra monthly payments can significantly reduce your loan tenure and save you thousands in interest.
              See how much time and money you can save by paying a little extra each month.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Loan Amount
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="Enter loan amount"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="e.g., 9"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Loan Tenure (Years)
          </label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="e.g., 10"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Extra Monthly Payment
          </label>
          <input
            type="number"
            value={extraPayment}
            onChange={(e) => setExtraPayment(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="Additional amount per month"
          />
        </div>

        <button
          onClick={calculatePayoff}
          className="w-full bg-cyan-600 text-white py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Calculate Payoff Time
        </button>

        {result && (
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Payoff Comparison</h3>

            <div className="bg-cyan-100 p-4 rounded-lg mb-4">
              <p className="text-sm text-slate-600 mb-2">You'll save</p>
              <p className="font-bold text-2xl text-cyan-700 mb-1">
                {formatCurrency(result.moneySaved)}
              </p>
              <p className="text-sm text-cyan-600">
                and become debt-free {Math.floor(result.timeSaved / 12)} years{' '}
                {result.timeSaved % 12} months earlier!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-200 p-4 rounded-lg">
                <p className="text-sm font-semibold text-slate-600 mb-3">Regular Payment</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration</span>
                  <span className="font-semibold text-black">
                      {Math.floor(result.normalMonths / 12)}y {result.normalMonths % 12}m
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Interest</span>
                    <span className="font-semibold text-red-600">
                      {formatCurrency(result.normalInterest)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-cyan-300 bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-cyan-700 mb-3">With Extra Payment</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration</span>
                    <span className="font-semibold text-cyan-700">
                      {Math.floor(result.withExtraMonths / 12)}y {result.withExtraMonths % 12}m
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Interest</span>
                    <span className="font-semibold text-cyan-700">
                      {formatCurrency(result.withExtraInterest)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
