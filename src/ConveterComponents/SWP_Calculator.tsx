import React, { useState } from 'react';
import { TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { calculateSWP, formatCurrency } from '../Utils/SIP_SWP_Calculator';

export const SWPCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(10000);
  const [period, setPeriod] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(10);

  const result = calculateSWP(initialInvestment, monthlyWithdrawal, period, expectedReturn);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl">
          <TrendingDown className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">SWP Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Initial Investment
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">{formatCurrency(initialInvestment)}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Monthly Withdrawal
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlyWithdrawal}
                onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <input
                type="number"
                value={monthlyWithdrawal}
                onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">{formatCurrency(monthlyWithdrawal)}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Withdrawal Period (Years)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="30"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">{period} years</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Expected Annual Return (%)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">{expectedReturn}% per annum</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 space-y-4 border border-blue-100">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Initial Investment</span>
              <span className="text-xl font-bold text-gray-800">{formatCurrency(result.initialInvestment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Total Withdrawn</span>
              <span className="text-xl font-bold text-blue-600">{formatCurrency(result.totalWithdrawn)}</span>
            </div>
            <div className="h-px bg-blue-200"></div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Remaining Value</span>
              <span className="text-2xl font-bold text-blue-700">{formatCurrency(result.remainingValue)}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Withdrawal Analysis</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={result.chartData}>
              <defs>
                <linearGradient id="colorWithdrawn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorRemaining" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
                stroke="#6b7280"
              />
              <YAxis
                tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                stroke="#6b7280"
              />
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="withdrawn"
                stroke="#f59e0b"
                fillOpacity={1}
                fill="url(#colorWithdrawn)"
                name="Total Withdrawn"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="remaining"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorRemaining)"
                name="Remaining Value"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default SWPCalculator;