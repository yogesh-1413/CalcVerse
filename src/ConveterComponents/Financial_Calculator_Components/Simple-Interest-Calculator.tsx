import { useState } from 'react';
import { DollarSign, Info } from 'lucide-react';
import CalculatorLayout from './Calculator-layout';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState('100000');
  const [interestRate, setInterestRate] = useState('6');
  const [timePeriod, setTimePeriod] = useState('5');
  const [result, setResult] = useState<{
    simpleInterest: number;
    totalAmount: number;
  } | null>(null);

  const calculateSimpleInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(timePeriod);

    if (P > 0 && r > 0 && t > 0) {
      const interest = P * r * t;
      const total = P + interest;

      setResult({
        simpleInterest: interest,
        totalAmount: total,
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
    <div className='bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out'>
    <CalculatorLayout
      title="Simple Interest Calculator"
      description="Calculate simple interest on your investments"
      icon={<DollarSign className="w-8 h-8" />}
      color="amber"
    route='Simple-Interest-Calculator'
    >
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded dark:bg-amber-800/30 transition-colors">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800 dark:text-white">
            <p className="font-semibold mb-1">What is Simple Interest?</p>
            <p>
              Simple interest is calculated only on the principal amount. It's commonly used in fixed deposits,
              bonds, and short-term loans. Formula: SI = P × R × T / 100, where P is principal, R is rate, and T is time.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Principal Amount
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="Enter principal amount"
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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="e.g., 6"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 dark:text-slate-200">
            Time Period (Years)
          </label>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
            placeholder="e.g., 5"
          />
        </div>

        <button
          onClick={calculateSimpleInterest}
          className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Calculate Simple Interest
        </button>

        {result && (
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Interest Calculation</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-amber-200">
                <span className="text-slate-600">Principal Amount</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(parseFloat(principal))}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-200">
                <span className="text-slate-600">Simple Interest</span>
                <span className="font-bold text-amber-700">
                  {formatCurrency(result.simpleInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600 font-semibold">Total Amount</span>
                <span className="font-bold text-2xl text-amber-800">
                  {formatCurrency(result.totalAmount)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
    </div>
  );
}
