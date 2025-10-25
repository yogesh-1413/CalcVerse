import { useState } from 'react';
import { Clock, Info } from 'lucide-react';
import CalculatorLayout from './Calculator-layout';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export default function HowLongToSave() {
  const [targetAmount, setTargetAmount] = useState('1000000');
  const [currentSavings, setCurrentSavings] = useState('100000');
  const [monthlyContribution, setMonthlyContribution] = useState('10000');
  const [expectedReturn, setExpectedReturn] = useState('10');
  const [result, setResult] = useState<{
    years: number;
    months: number;
    totalInvested: number;
    interestEarned: number;
  } | null>(null);

  const calculateTime = () => {
    const target = parseFloat(targetAmount);
    const current = parseFloat(currentSavings);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(expectedReturn) / 100 / 12;

    if (target > current && monthly > 0 && rate >= 0) {
      let balance = current;
      let months = 0;
      let totalInvested = current;

      while (balance < target && months < 1000) {
        balance = balance * (1 + rate) + monthly;
        totalInvested += monthly;
        months++;
      }

      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      setResult({
        years,
        months: remainingMonths,
        totalInvested,
        interestEarned: balance - totalInvested,
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
      title="How Long to Save"
      description="Calculate time needed to reach your savings goal"
      icon={<Clock className="w-8 h-8" />}
      color="sky"
      route='How-Long-To-Save'
    >
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded dark:bg-blue-800/30 transition-colors">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 dark:text-blue-100" />
          <div className="text-sm text-blue-800 dark:text-blue-100">
            <p className="font-semibold mb-1">Plan Your Savings Goal</p>
            <p>
              This calculator helps you determine how long it will take to reach your financial goal
              based on your current savings, monthly contributions, and expected investment returns.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Target Amount
          </label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent  dark:border-white dark:bg-slate-900/20"
            placeholder="Enter your goal amount"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Current Savings
          </label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent  dark:border-white dark:bg-slate-900/20"
            placeholder="Enter current savings"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Monthly Contribution
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent  dark:border-white dark:bg-slate-900/20"
            placeholder="How much can you save monthly?"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="e.g., 10"
            step="0.1"
          />
        </div>

        <button
          onClick={calculateTime}
          className="w-full bg-sky-600 text-white py-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Calculate Time Required
        </button>

        {result && (
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Timeline to Your Goal</h3>
            <div className="space-y-3">
              <div className="bg-sky-100 p-4 rounded-lg mb-3">
                <div className="text-center">
                  <p className="text-slate-600 mb-2">You'll reach your goal in</p>
                  <p className="font-bold text-3xl text-sky-700">
                    {result.years} years {result.months} months
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-sky-200">
                <span className="text-slate-600">Target Amount</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(parseFloat(targetAmount))}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-sky-200">
                <span className="text-slate-600">Total Invested</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(result.totalInvested)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Interest Earned</span>
                <span className="font-bold text-sky-600">
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
