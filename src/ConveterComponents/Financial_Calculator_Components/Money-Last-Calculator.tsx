import { useState } from 'react';
import { Hourglass, Info } from 'lucide-react';
import CalculatorLayout from './Calculator-layout';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export default function MoneyLastCalculator() {
  const [currentSavings, setCurrentSavings] = useState('1000000');
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState('20000');
  const [expectedReturn, setExpectedReturn] = useState('8');
  const [result, setResult] = useState<{
    years: number;
    months: number;
    totalWithdrawn: number;
    interestEarned: number;
  } | null>(null);

  const calculateDuration = () => {
    const savings = parseFloat(currentSavings);
    const withdrawal = parseFloat(monthlyWithdrawal);
    const rate = parseFloat(expectedReturn) / 100 / 12;

    if (savings > 0 && withdrawal > 0 && rate >= 0) {
      let balance = savings;
      let months = 0;
      let totalWithdrawn = 0;

      while (balance > 0 && months < 1200) {
        balance = balance * (1 + rate) - withdrawal;
        if (balance > 0) {
          totalWithdrawn += withdrawal;
          months++;
        } else {
          totalWithdrawn += balance + withdrawal;
          break;
        }
      }

      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      setResult({
        years,
        months: remainingMonths,
        totalWithdrawn,
        interestEarned: totalWithdrawn - savings,
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
      title="How Long Will Money Last"
      description="Calculate how long your savings will sustain you"
      icon={<Hourglass className="w-8 h-8" />}
      color="rose"
      route='Money-Last-Calculator'
    >
      <div className="bg-rose-50 border-l-4 border-rose-500 p-4 mb-6 rounded dark:bg-rose-800/30 transition-colors">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5 dark:text-rose-100" />
          <div className="text-sm text-rose-800 dark:text-rose-100">
            <p className="font-semibold mb-1">Plan Your Retirement or Emergency Fund</p>
            <p>
              This calculator helps you understand how long your savings will last with regular withdrawals,
              considering the growth from your investments. Perfect for retirement planning and emergency fund management.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Current Savings
          </label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="Enter your current savings"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Monthly Withdrawal
          </label>
          <input
            type="number"
            value={monthlyWithdrawal}
            onChange={(e) => setMonthlyWithdrawal(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="How much do you need monthly?"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="e.g., 8"
            step="0.1"
          />
        </div>

        <button
          onClick={calculateDuration}
          className="w-full bg-rose-600 text-white py-4 rounded-lg font-semibold hover:bg-rose-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Calculate Duration
        </button>

        {result && (
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Your Money Will Last</h3>
            <div className="space-y-3">
              <div className="bg-rose-100 p-4 rounded-lg mb-3">
                <div className="text-center">
                  <p className="text-slate-600 mb-2">Duration</p>
                  <p className="font-bold text-3xl text-rose-700">
                    {result.years} years {result.months} months
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-rose-200">
                <span className="text-slate-600">Initial Savings</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(parseFloat(currentSavings))}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-rose-200">
                <span className="text-slate-600">Total Withdrawn</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(result.totalWithdrawn)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Interest Earned</span>
                <span className="font-bold text-rose-600">
                  {formatCurrency(result.interestEarned)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
