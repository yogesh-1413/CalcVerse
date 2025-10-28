import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

export const StepstoMiles = () => {
  const [steps, setSteps] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [displaysteps, setdisplaysteps] = useState('');

  const handleCalculate = () => {
    const s = parseFloat(steps);
    if (!isNaN(s)) {
      setResult(s * (1 / 2112));
      setdisplaysteps(steps);
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
          <Link to='/All-calculators/Health-Calculators/Steps-to-Miles-Calculator'>
            <span className='hover:underline'>  Steps to Miles Calculator </span>
          </Link>
        </p>
      </div>

      <div className='flex flex-col items-center justify-center min-h-[80vh] px-5'>
        <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-white/80 dark:bg-gray-800/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Steps to Miles</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Steps
              </label>
              <input
                type="number"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter steps"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Calculate
            </button>

            {result !== null && (
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">Result</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {result.toFixed(2)} Miles
                </p>
                <p className='text-sm text-gray-800 dark:text-gray-100'>You Covered {result.toFixed(2)} Miles by waking {displaysteps} Steps</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default StepstoMiles;   