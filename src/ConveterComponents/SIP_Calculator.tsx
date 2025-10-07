import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { calculateSIP, formatCurrency } from '../Utils/SIP_SWP_CAGR_Calculator';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const  SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [period, setPeriod] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const result = calculateSIP(monthlyInvestment, period, expectedReturn);

  return (<div className='flex flex-col bg-gradient-to-r from-slate-50/60 via-blue-50/80 to-teal-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out'>
    <Navbar />
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-10 mb-10 ml-2 mr-2 bg-gradient-to-r from-slate-50/60 via-blue-50/80 to-teal-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-orange-500 dark:to-red-500 p-3 rounded-xl ">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">SIP Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 ">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3">
              Monthly Investment
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 dark:bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600 dark:accent-orange-500"
              />
              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:focus:ring-orange-500"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{formatCurrency(monthlyInvestment)}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white mb-3">
              Investment Period (Years)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="30"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600 dark:accent-orange-500"
              />
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:focus:ring-orange-500"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{period} years</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white mb-3">
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
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600 dark:accent-orange-500"
              />
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:focus:ring-orange-500"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{expectedReturn}% per annum</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-orange-50 dark:to-red-50 rounded-xl p-6 space-y-4 border border-green-100 dark:border-orange-500">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Total Investment</span>
              <span className="text-xl font-bold text-gray-800">{formatCurrency(result.totalInvestment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Estimated Returns</span>
              <span className="text-xl font-bold text-green-600 dark:text-orange-600">{formatCurrency(result.estimatedReturns)}</span>
            </div>
            <div className="h-px bg-green-200 dark:bg-orange-200"></div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Total Value</span>
              <span className="text-2xl font-bold text-green-700 dark:text-orange-700">{formatCurrency(result.totalValue)}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4 dark:text-gray-200  ">Investment Growth</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={result.chartData}>
              <defs>
                <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
                stroke="#000000ff"
              />
              <YAxis
                tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                stroke="#000000ff"
              />
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="invested"
                stroke="#64748b"
                fillOpacity={1}
                fill="url(#colorInvested)"
                name="Total Invested"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorValue)"
                name="Portfolio Value"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
     <div className="bg-transparent flex flex-col items-center px-6 py-12">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-white">
          What is SIP (Systematic Investment Plan)?
        </h1>

    
        <p className="text-lg leading-relaxed mb-8 text-justify">
          A <strong>Systematic Investment Plan (SIP)</strong> is a disciplined way
          to invest a fixed amount regularly in mutual funds. Instead of
          investing a lump sum, you contribute small amounts at regular
          intervals (monthly or quarterly). Over time, this allows you to benefit
          from <strong>rupee cost averaging</strong> and the <strong>power of compounding</strong>.
        </p>

    
        <div className="bg-indigo-100 dark:bg-gray-700 rounded-2xl p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-white">
             How SIP Works
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base sm:text-lg dark:text-gray-200">
            <li>You decide an amount (e.g., ₹1000/month) to invest regularly.</li>
            <li>The money is automatically invested in your chosen mutual fund.</li>
            <li>You receive units based on the fund’s NAV (Net Asset Value) each time.</li>
            <li>Over time, your investment grows with returns and compounding.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-white">
            SIP Formula
          </h2>
          <p className="text-base sm:text-lg mb-3 dark:text-gray-200">
            The future value of your SIP investment is calculated using this formula:
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center text-lg sm:text-xl font-mono mb-4 dark:text-white">
            FV = P × ((1 + r)ⁿ - 1) × (1 + r) / r
          </div>

          <p className="text-sm sm:text-base leading-relaxed dark:text-gray-200">
            Where: <br />
            <strong>P</strong> = SIP amount per installment <br />
            <strong>r</strong> = Rate of return per month (annual rate / 12) <br />
            <strong>n</strong> = Total number of months <br />
            <strong>FV</strong> = Future Value of the investment
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-white">
             Example
          </h2>
          <p className="text-base sm:text-lg leading-relaxed dark:text-gray-200">
            Suppose you invest ₹5,000 every month for 10 years at an annual return
            rate of 12%:
          </p>

          <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono dark:text-gray-200">
            P = 5000, r = 12% / 12 = 0.01, n = 10 × 12 = 120 <br />
            FV = 5000 × ((1 + 0.01)¹²⁰ - 1) × (1 + 0.01) / 0.01 ≈ ₹11,61,695
          </div>

          <p className="mt-3 text-base sm:text-lg dark:text-gray-200  ">
            So, your total invested amount = ₹6,00,000 (5000 × 120)  
            and the estimated future value ≈ ₹11.6 lakhs.
          </p>
        </div>

        <p className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-200 mt-10 ">
          SIPs are ideal for long-term wealth creation. Start small, stay consistent, and let time grow your investment 🌱
        </p>
      </div>
    </div>
    <Footer />
    <></>
    </div>
  );
};
export default SIPCalculator;