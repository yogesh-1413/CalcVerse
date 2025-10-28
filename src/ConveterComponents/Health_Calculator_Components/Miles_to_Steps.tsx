import { useState } from 'react';
import { Footprints } from 'lucide-react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

export const MilesToSteps = () => {
  const [miles, setMiles] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [displayMiles, setDisplayMiles] = useState('');

  const handleCalculate = () => {
    const m = parseFloat(miles);
    if (!isNaN(m)) {
      setResult(Math.round(m * 2112));
      setDisplayMiles(miles);
    }
  };

  return (
    <div className='bg-gradient-to-r min-h-screen from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out'>
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
          <Link to='/All-calculators/Health-Calculators/Miles-to-Steps-Calculator'>
            <span className='hover:underline'>  Miles to Steps Calculator </span>
          </Link>
        </p>
      </div>

      <div className='flex flex-col items-center justify-center min-h-[80vh] px-5'>
        <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-white/80 dark:bg-gray-800/60 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Footprints className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Miles to Steps</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Miles
              </label>
              <input
                type="number"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
                placeholder="Enter miles"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Calculate
            </button>

            {result !== null && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">Result</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {result.toLocaleString()} steps
                </p>
                <p className='text-sm text-gray-900 dark:text-white'>To cover {displayMiles} Miles you need to take {result.toLocaleString()} Foot Steps</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MilesToSteps;