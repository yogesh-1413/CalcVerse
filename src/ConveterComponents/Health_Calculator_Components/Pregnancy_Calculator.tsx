import { useState } from 'react';
import { Baby } from 'lucide-react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

export const PregnancyCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [result, setResult] = useState<{ dueDate: string; weeksPregnant: number } | null>(null);

  const handleCalculate = () => {
    const date = new Date(lastPeriod);
    if (!isNaN(date.getTime())) {
      const dueDate = new Date(date);
      dueDate.setDate(dueDate.getDate() + 280);

      const today = new Date();
      const diffTime = Math.abs(today.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const weeksPregnant = Math.floor(diffDays / 7);

      setResult({
        dueDate: dueDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        weeksPregnant: weeksPregnant
      });
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
          <Link to='/All-calculators/Health-Calculators/Pregnancy-Calculator'>
            <span className='hover:underline'>  Pregnancy Calculator </span>
          </Link>
        </p>
      </div>

      <div className='flex flex-col items-center justify-center min-h-[80vh] px-4'>
        <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-white/80 dark:bg-gray-800/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
              <Baby className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Pregnancy Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last Period Date
              </label>
              <input
                type="date"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              />
            </div>

            <button
              disabled={!lastPeriod}
              onClick={handleCalculate}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 
                        ${lastPeriod
                  ? "bg-pink-600 hover:bg-pink-700 hover:scale-[1.02] hover:shadow-md"
                  : "bg-pink-500/80 hover:bg-pink-600 cursor-not-allowed"
                }`}>
              Calculate
            </button>

            {result !== null && (
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4 border border-pink-200 dark:border-pink-800 space-y-2">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Due Date</p>
                  <p className="text-xl font-bold text-pink-600 dark:text-pink-400">
                    {result.dueDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Weeks Pregnant</p>
                  <p className="text-xl font-bold text-pink-600 dark:text-pink-400">
                    {result.weeksPregnant} weeks
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
export default PregnancyCalculator;