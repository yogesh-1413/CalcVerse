import { useState } from 'react';
import { Award } from 'lucide-react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

export const SobrietyCalculator = () => {
  const [sobrietyDate, setSobrietyDate] = useState('');
  const [result, setResult] = useState<{ years: number; months: number; days: number; totalDays: number } | null>(null);

  const handleCalculate = () => {
    const startDate = new Date(sobrietyDate);
    const today = new Date();

    if (!isNaN(startDate.getTime())) {
      const diffTime = today.getTime() - startDate.getTime();
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      let years = today.getFullYear() - startDate.getFullYear();
      let months = today.getMonth() - startDate.getMonth();
      let days = today.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setResult({ years, months, days, totalDays });
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-r min-h-screen from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out'>
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
          <Link to='/All-calculators/Health-Calculators'>
            <span className='hover:underline'> Health Calculators </span>
          </Link>
          &gt;
          <Link to='/All-calculators/Health-Calculators/Sobriety-Calculator'>
            <span className='hover:underline'>  Sobriety Calculator </span>
          </Link>
        </p>
      </div>
      <div className='flex flex-col items-center justify-center min-h-[80vh] px-5 '>
        <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-white/80 dark:bg-gray-800/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
              <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Sobriety Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sobriety Start Date
              </label>
              <input
                type="date"
                value={sobrietyDate}
                onChange={(e) => setSobrietyDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            <button
              onClick={handleCalculate}
              disabled={!sobrietyDate}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 
                        ${sobrietyDate
                  ? "bg-teal-600 hover:bg-teal-700hover:scale-[1.02] hover:shadow-md"
                  : "bg-teal-400 hover:bg-teal-500 cursor-not-allowed"
                }`}>
              Calculate
            </button>

            {result !== null && (
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800 space-y-2">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Time Sober</p>
                  <p className="text-xl font-bold text-teal-600 dark:text-teal-400">
                    {result.years}y {result.months}m {result.days}d
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Days</p>
                  <p className="text-xl font-bold text-teal-600 dark:text-teal-400">
                    {result.totalDays} days
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SobrietyCalculator;