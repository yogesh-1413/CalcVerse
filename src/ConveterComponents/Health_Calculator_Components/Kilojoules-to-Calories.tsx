import { useState } from 'react';
import { Flame } from 'lucide-react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

 const KilojoulesToCalories = () => {
    const [kilojoules, setKilojoules] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        const kj = parseFloat(kilojoules);
        if (!isNaN(kj)) {
            setResult(kj / 4.184);
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
          <Link to='/All-calculators/Health-Calculators/Kilojoules-to-Calories-Calculator'>
            <span className='hover:underline'>  Kilojoules to Calories Calculator </span>
          </Link>
        </p>
      </div>
            <div className='flex flex-col items-center justify-center min-h-[80vh] px-5'>
                <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-white/80 dark:bg-gray-800/60 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                            <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Kilojoules to Calories</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Kilojoules (kJ)
                            </label>
                            <input
                                type="number"
                                value={kilojoules}
                                onChange={(e) => setKilojoules(e.target.value)}
                                placeholder="Enter kilojoules"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                            />
                        </div>

                        <button
                            onClick={handleCalculate}
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl transition-colors"
                        >
                            Calculate
                        </button>

                        {result !== null && (
                            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                                <p className="text-sm text-gray-600 dark:text-gray-400">Result</p>
                                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                    {result.toFixed(2)} cal
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default KilojoulesToCalories;