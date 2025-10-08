import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { calculateSIP, formatCurrency } from '../../Utils/SIP_SWP_CAGR_Calculator';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

export const SIPCalculator: React.FC = () => {
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
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
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
          <div className='mt-4 bg-gray-50 rounded-lg p-4'>
            <h2 className='text-sm font-semibold text-gray-700  mb-2'>What is SIP</h2>
            <div className='text-xs text-gray-600 leading-relaxed'>
              <p>A Systematic Investment Plan (SIP) is a method of investing a fixed amount of money at regular intervals—typically monthly, quarterly, or even weekly—into a mutual fund scheme of the investor's choice</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className='bg-transparent flex flex-col items-center mt-5 mb-10 '>
      <section className='max-w-7xl '>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-white">
          💰 SIP (Systematic Investment Plan)
        </h1>

        <p className="text-lg leading-relaxed mb-8 text-justify">
          A <strong>Systematic Investment Plan (SIP)</strong> lets you invest a fixed
          amount regularly (usually monthly) in mutual funds. It encourages
          disciplined investing and harnesses the <strong>power of compounding</strong>.
        </p>

        <div className="bg-indigo-100 dark:bg-gray-700 rounded-2xl p-6 mb-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700 dark:text-white">
            How SIP Works
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base sm:text-lg dark:text-gray-200">
            <li>You invest a fixed amount at regular intervals.</li>
            <li>The amount buys units of your chosen mutual fund.</li>
            <li>Returns compound over time, creating long-term growth.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-white">
            Formula
          </h2>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center text-lg sm:text-xl font-mono mb-4">
           <p className='dark:text-gray-200'> FV = P × ((1 + r)ⁿ - 1) × (1 + r) / r </p>
          </div>
          <p className="text-sm sm:text-base leading-relaxed dark:text-gray-200">
            P = SIP amount per month <br />
            r = Monthly rate of return (annual rate / 12) <br />
            n = Total number of months <br />
            FV = Future Value
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-indigo-700 dark:text-white">
            Example
          </h3>
          <p className='dark:text-gray-200'>
            ₹5,000/month for 10 years at 12% annual return →
            FV ≈ ₹11.6 Lakhs
          </p>
        </div>
      </section>
    </div>

    <Footer />
    <></>
  </div>
  );
};
export default SIPCalculator;