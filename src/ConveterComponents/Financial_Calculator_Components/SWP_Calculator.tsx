import React, { useState } from 'react';
import { TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { calculateSWP, formatCurrency } from '../../Utils/SIP_SWP_CAGR_Calculator';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

export const SWPCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number | string>(1000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState<number | string>(10000);
  const [period, setPeriod] = useState<number | string>(8);
  const [expectedReturn, setExpectedReturn] = useState<number | string>(12);
  const [withdrawalWarning, setWithdrawalWarning] = useState(false);

  const result = calculateSWP(Number(initialInvestment), Number(monthlyWithdrawal), Number(period), Number(expectedReturn));

  return (
    <div className='flex flex-col bg-gradient-to-r from-slate-50/60 via-blue-50/90 to-teal-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out'>
      <Navbar />
      <div className="ml-10  mt-3">
        <p className="text-xs dark:text-white ">
          <span className='hover:underline'>
            <Link to='/'>Home </Link>
          </span>
          &gt;
          <span className='hover:underline'>
            <Link to="/All-Calculators"> All Calculators </Link>
          </span>
          &gt;
          <Link to='/All-calculators/Financial-Calculators'>
            <span className='hover:underline'> Financial Calculators </span>
          </Link>
          &gt;
          <Link to='/SWP-Calculator'>
            <span className='hover:underline'>  SWP Calculator </span>
          </Link>
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8  mb-10 ml-2 mr-2 bg-gradient-to-r from-slate-50/60 via-blue-50/80 to-teal-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl dark:from-orange-500 dark:to-red-500">
            <TrendingDown className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">SWP Calculator</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 shadow-lg pb-5">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 dark:text-white">
                Initial Investment
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="10000"
                  max="100000000"
                  step="50000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-orange-500"
                />
                <input
                  type="number"
                  min={10000}
                  max={100000000}
                  step={50000}
                  value={initialInvestment}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (value === '') {
                      setInitialInvestment('');
                      return;
                    }

                    const numericValue = Number(value);

                    if (numericValue >= 0 && numericValue <= 100000000) {
                      setInitialInvestment(numericValue);
                    }
                  }}
                  onBlur={() => {

                    if (initialInvestment === '' || Number(initialInvestment) < 10000) {
                      setInitialInvestment(10000);
                    } else if (Number(initialInvestment) > 100000000) {
                      setInitialInvestment(100000000);
                    }
                  }}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-orange-500"
                />

              </div>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{formatCurrency(Number(initialInvestment))}</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
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
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-orange-500"
                />

                <input
                  type="text" 
                  value={monthlyWithdrawal}
                  inputMode="numeric" 
                  onChange={(e) => {
                    const value = e.target.value;

                    if (/^\d*$/.test(value)) {
                      if (value === '') {
                        setMonthlyWithdrawal('');
                        return;
                      }

                      const numericValue = Number(value);

                      if (numericValue > Number(initialInvestment)) {
                        setWithdrawalWarning(true);
                        const cappedValue = Math.min(100000, Number(initialInvestment));
                        setMonthlyWithdrawal(cappedValue);

                        setTimeout(() => setWithdrawalWarning(false), 3000);
                      } else {
                        setWithdrawalWarning(false);
                      }


                      if (numericValue <= 100000000) {
                        setMonthlyWithdrawal(numericValue);
                      }
                    }
                  }}
                  onBlur={() => {
                    if (monthlyWithdrawal === '' || Number(monthlyWithdrawal) < 1000) {
                      setMonthlyWithdrawal(1000);
                      setWithdrawalWarning(false);
                    } else if (Number(monthlyWithdrawal) > 100000) {
                      setMonthlyWithdrawal(100000);
                      setWithdrawalWarning(false);
                    }
                  }}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-orange-500"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{formatCurrency(Number(monthlyWithdrawal))}</p>
            </div>
            {withdrawalWarning && (
              <p className="text-xs text-red-500 mt-1">
                Monthly withdrawal cannot exceed initial investment. Automatically reset to max allowed.
              </p>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Withdrawal Period (Years)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="60"
                  step={1}
                  value={period}
                  onChange={(e) => setPeriod(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-orange-500"
                />
                <input
                  type="number"
                  value={period}
                  min={1}
                  max={60}
                  step={1}
                  onChange={(e) => {
                    const tenureValue = (e.target.value);
                    if (tenureValue === '') {
                      setPeriod('');
                      return;
                    }
                    const tenureNumericValue = Number(tenureValue);
                    if(tenureNumericValue >= 1 && tenureNumericValue <= 60){
                      setPeriod(tenureNumericValue);
                    }

                  }}

                  onBlur={()=>{
                    if(period === '' || Number(period) < 1){
                      setPeriod(1);
                    }
                    else if(Number(period) > 60){
                      setPeriod(60);
                    }
                  }}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-orange-500"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{period} years</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Expected Annual Return (%)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="0.1"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-orange-500"
                />
                <input
                  type="number"
                  min={1}
                  max={100}
                  step={0.1}
                  value={expectedReturn}
                  onChange={(e) => {
                    const returnValue = (e.target.value);
                    if (returnValue === '') {
                      setExpectedReturn('');
                      return;
                    }
                    const returnValueNuber = Number(returnValue);
                    if(returnValueNuber >= 1 && returnValueNuber <= 100){
                      setExpectedReturn(returnValueNuber);
                    }
          
                  }}
                  onBlur={()=>{
                    if(expectedReturn === '' || Number(expectedReturn)<= 1){
                      setExpectedReturn(1)
                    }
                    else if(Number(expectedReturn) >=100){
                      setExpectedReturn(100);
                    }
                  }}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-orange-500"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{expectedReturn}% per annum</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 space-y-4 border border-blue-100 dark:from-orange-50 dark:to-red-50 " >
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Initial Investment</span>
                <span className="text-xl font-bold text-gray-800">{formatCurrency(result.initialInvestment)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Total Withdrawn</span>
                <span className="text-xl font-bold text-blue-600 dark:text-orange-600">{formatCurrency(result.totalWithdrawn)}</span>
              </div>
              <div className="h-px bg-blue-200 dark:bg-orange-200"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">Remaining Value</span>
                <span className="text-2xl font-bold text-blue-700 dark:text-orange-700">{formatCurrency(result.remainingValue)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-4">Withdrawal Analysis</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={result.chartData}>
                <defs>
                  <linearGradient id="colorWithdrawn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorRemaining" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
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
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">What is SWP?</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A Systematic Withdrawal Plan (SWP) is a facility offered by mutual funds that allows investors to withdraw a fixed amount from their investment at regular intervals, such as monthly, or annually</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-transparent items-center mt-5 mb-10'>
          <section className='max-w-7xl'>
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-purple-600 dark:text-white mt-10">
              💸 SWP (Systematic Withdrawal Plan)
            </h1>

            <p className="text-lg leading-relaxed mb-8 text-justify">
              A <strong>Systematic Withdrawal Plan (SWP)</strong> allows you to withdraw a
              fixed amount at regular intervals from your mutual fund investment.
              It helps generate a steady income while your remaining corpus
              continues to grow.
            </p>

            <div className="bg-purple-100 dark:bg-gray-700 rounded-2xl p-6 mb-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-3 text-purple-700 dark:text-white">
                How SWP Works
              </h2>
              <ul className="list-disc list-inside space-y-3 text-base sm:text-lg dark:text-gray-300">
                <li>You invest a lump sum initially in a mutual fund.</li>
                <li>You set a withdrawal amount and frequency (e.g., ₹5,000/month).</li>
                <li>The amount is redeemed periodically from your units.</li>
                <li>Remaining units continue to earn returns.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-white">
                SWP Formula
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center text-lg sm:text-xl font-mono mb-4 dark:text-gray-200">
                FV = P × (1 - (1 + r)^(-n)) / r
              </div>
              <p className="text-sm sm:text-base leading-relaxed dark:text-gray-200">
                P = Withdrawal amount <br />
                r = Monthly rate of return (annual rate / 12) <br />
                n = Total number of months <br />
                FV = Present Value of investment needed
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold mb-3 text-purple-700 dark:text-white">
                Example
              </h3>
              <p className='dark:text-gray-200'>
                To withdraw ₹10,000/month for 10 years with 10% annual returns,
                you need an initial investment of about ₹7.5 lakhs.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SWPCalculator;