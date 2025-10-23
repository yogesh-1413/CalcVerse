import { useState } from 'react';
import { Home, Info } from 'lucide-react';
import CalculatorLayout from './Calculator-layout';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('1000000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [loanTenure, setLoanTenure] = useState('20');
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalAmount: number;
  } | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTenure) * 12;

    if (P > 0 && r > 0 && n > 0) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalAmount = emi * n;
      const totalInterest = totalAmount - P;

      setResult({
        emi,
        totalInterest,
        totalAmount,
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
      title="EMI Calculator"
      description="Calculate your Equated Monthly Installment"
      icon={<Home className="w-8 h-8" />}
      color="orange"
    >
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold mb-1">What is EMI?</p>
            <p>
              Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender
              at a specified date each month. EMIs consist of both principal and interest components.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Loan Amount
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter loan amount"
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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="e.g., 8.5"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Loan Tenure (Years)
          </label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="e.g., 20"
          />
        </div>

        <button
          onClick={calculateEMI}
          className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Calculate EMI
        </button>

        {result && (
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Your EMI Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-orange-200">
                <span className="text-slate-600 font-semibold">Monthly EMI</span>
                <span className="font-bold text-2xl text-orange-700">
                  {formatCurrency(result.emi)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-orange-200">
                <span className="text-slate-600">Principal Amount</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(parseFloat(loanAmount))}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-orange-200">
                <span className="text-slate-600">Total Interest</span>
                <span className="font-bold text-orange-600">
                  {formatCurrency(result.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600 font-semibold">Total Amount Payable</span>
                <span className="font-bold text-xl text-orange-700">
                  {formatCurrency(result.totalAmount)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
