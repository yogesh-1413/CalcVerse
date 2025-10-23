import { useState } from 'react';
import { Coins, Info } from 'lucide-react';
import CalculatorLayout from './Calculator-layout';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState('100000');
  const [interestRate, setInterestRate] = useState('8');
  const [timePeriod, setTimePeriod] = useState('10');
  const [frequency, setFrequency] = useState('12');
  const [result, setResult] = useState<{
    finalAmount: number;
    interestEarned: number;
  } | null>(null);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(timePeriod);
    const n = parseFloat(frequency);

    if (P > 0 && r > 0 && t > 0 && n > 0) {
      const amount = P * Math.pow(1 + r / n, n * t);
      const interest = amount - P;

      setResult({
        finalAmount: amount,
        interestEarned: interest,
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
      title="Compound Interest Calculator"
      description="Calculate the power of compound interest"
      icon={<Coins className="w-8 h-8" />}
      color="lime"
    >
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold mb-1">The Power of Compound Interest</p>
            <p>
              Compound interest is calculated on the initial principal and accumulated interest from previous periods.
              Albert Einstein called it "the eighth wonder of the world" because your money grows exponentially over time.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Principal Amount
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            placeholder="Enter principal amount"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            placeholder="e.g., 8"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Time Period (Years)
          </label>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            placeholder="e.g., 10"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Compounding Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
          >
            <option value="1">Annually</option>
            <option value="2">Semi-annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>

        <button
          onClick={calculateCompoundInterest}
          className="w-full bg-lime-600 text-white py-4 rounded-lg font-semibold hover:bg-lime-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Calculate Compound Interest
        </button>

        {result && (
          <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-xl border border-lime-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Investment Growth</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-lime-200">
                <span className="text-slate-600">Principal Amount</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(parseFloat(principal))}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-lime-200">
                <span className="text-slate-600">Interest Earned</span>
                <span className="font-bold text-lime-700">
                  {formatCurrency(result.interestEarned)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600 font-semibold">Final Amount</span>
                <span className="font-bold text-2xl text-lime-800">
                  {formatCurrency(result.finalAmount)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
