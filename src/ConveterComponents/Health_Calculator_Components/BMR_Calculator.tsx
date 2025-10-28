import { useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

export const BMICalculator = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      return;
    }

    let bmi: number;

    if (unit === 'metric') {
      bmi = w / ((h / 100) * (h / 100));
    } else {
      bmi = (w / (h * h)) * 703;
    }

    let category = '';
    let color = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = '#3b82f6';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
      color = '#10b981';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = '#f59e0b';
    } else {
      category = 'Obese';
      color = '#ef4444';
    }

    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, color });
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <div className='bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out'>
        <Navbar />
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent mb-2">
            BMI Calculator
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Calculate your Body Mass Index to assess your weight status
          </p>
        </div>

        <div className="flex gap-2 mb-6 p-1 bg-slate-100 dark:bg-slate-700 rounded-xl">
          <button
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              unit === 'metric'
                ? 'bg-gradient-to-r from-purple-600 to-purple-900 text-white shadow-lg'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
            onClick={() => setUnit('metric')}
          >
            Metric
          </button>
          <button
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              unit === 'imperial'
                ? 'bg-gradient-to-r from-purple-600 to-purple-900 text-white shadow-lg'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
            onClick={() => setUnit('imperial')}
          >
            Imperial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
              Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
            </label>
            <input
              type="number"
              className="py-3.5 px-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-base transition-all duration-300 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
              Height {unit === 'metric' ? '(cm)' : '(inches)'}
            </label>
            <input
              type="number"
              className="py-3.5 px-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-base transition-all duration-300 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g., 170' : 'e.g., 67'}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <button
            className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-900 text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
          <button
            className="flex-1 py-4 px-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-xl font-semibold text-base border-2 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-0.5"
            onClick={resetCalculator}
          >
            Reset
          </button>
        </div>

        {result && (
          <div
            className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 text-center border-4 animate-[slideIn_0.5s_ease]"
            style={{ borderColor: result.color }}
          >
            <div className="text-6xl font-bold mb-2" style={{ color: result.color }}>
              {result.bmi}
            </div>
            <div className="text-2xl font-semibold mb-6" style={{ color: result.color }}>
              {result.category}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-blue-500"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Underweight (&lt;18.5)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-green-500"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Normal (18.5-24.9)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-amber-500"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Overweight (25-29.9)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-red-500"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Obese (≥30)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
};
export default BMICalculator;