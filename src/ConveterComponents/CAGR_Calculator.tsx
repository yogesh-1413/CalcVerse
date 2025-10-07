import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { calculateCAGR, formatCurrency } from '../Utils/SIP_SWP_CAGR_Calculator';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const CAGR_Calculator: React.FC = () => {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(250000);
  const [period, setPeriod] = useState(5);

  const result = calculateCAGR(initialValue, finalValue, period);

  return (
    <div className='flex flex-col bg-gradient-to-r from-slate-50/60 via-blue-50/90 to-teal-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out'>
        <Navbar />
    <div className="rounded-2xl shadow-xl p-8 ">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-3 rounded-xl">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">CAGR Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 dark:text-white">
              Initial Investment Value
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <input
                type="number"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{formatCurrency(initialValue)}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 dark:text-white">
              Final Investment Value
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={finalValue}
                onChange={(e) => setFinalValue(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <input
                type="number"
                value={finalValue}
                onChange={(e) => setFinalValue(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{formatCurrency(finalValue)}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 dark:text-white">
              Investment Period (Years)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="30"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{period} years</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 space-y-4 border border-orange-100">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Initial Value</span>
              <span className="text-xl font-bold text-gray-800">{formatCurrency(result.initialValue)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Final Value</span>
              <span className="text-xl font-bold text-gray-800">{formatCurrency(result.finalValue)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Total Gain</span>
              <span className="text-xl font-bold text-orange-600">{formatCurrency(result.totalGain)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Absolute Return</span>
              <span className="text-xl font-bold text-orange-600">{result.totalGainPercentage.toFixed(2)}%</span>
            </div>
            <div className="h-px bg-orange-200"></div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">CAGR</span>
              <span className="text-3xl font-bold text-orange-700">{result.cagr.toFixed(2)}%</span>
            </div>
            <p className="text-xs text-gray-500 text-center pt-2">
              Compound Annual Growth Rate
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Investment Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={result.chartData}>
              <defs>
                <linearGradient id="colorCAGR" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
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
                dataKey="value"
                stroke="#f97316"
                fillOpacity={1}
                fill="url(#colorCAGR)"
                name="Investment Value"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">What is CAGR?</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Compound Annual Growth Rate (CAGR) is the rate of return required for an investment to grow from its initial value to its final value over a specified period, assuming profits are reinvested at the end of each year.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};
export default CAGR_Calculator;