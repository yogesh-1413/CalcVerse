import { useState } from 'react';
import { Flame } from 'lucide-react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

function BMRCalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [bmr, setBmr] = useState<number | null>(null);

  const calculateBMR = () => {
    let weightKg = parseFloat(weight);
    let heightCm = parseFloat(height);
    const ageNum = parseFloat(age);

    if (unit === 'imperial') {
      weightKg = weightKg * 0.453592; // lbs to kg
      heightCm = heightCm * 2.54;   // inches to cm
    }

    if (weightKg > 0 && heightCm > 0 && ageNum > 0) {
      let bmrValue: number;

      // Mifflin-St Jeor Equation
      if (gender === 'male') {
        bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + 5;
      } else {
        bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * ageNum - 161;
      }

      setBmr(Math.round(bmrValue));
    }
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setBmr(null);
  };

  const activityLevels = [
    { level: 'Sedentary', multiplier: 1.2, description: 'Little or no exercise' },
    { level: 'Lightly Active', multiplier: 1.375, description: 'Exercise 1-3 times/week' },
    { level: 'Moderately Active', multiplier: 1.55, description: 'Exercise 4-5 times/week' },
    { level: 'Very Active', multiplier: 1.725, description: 'Daily exercise or intense 3-4 times/week' },
    { level: 'Extra Active', multiplier: 1.9, description: 'Intense exercise 6-7 times/week' },
  ];

  const baseButtonStyles = "p-4 rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out";
  
  const activeUnitButtonStyles = "bg-gradient-to-bl from-[#667eea] to-[#764ba2] text-white shadow-[0_8px_16px_rgba(102,126,234,0.3)]";
  const inactiveUnitButtonStyles = "bg-slate-100 text-slate-500 dark:bg-gray-700 dark:text-slate-300";
  
  const activeGenderButtonStyles = "bg-gradient-to-bl from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_12px_rgba(102,126,234,0.3)]";
  const inactiveGenderButtonStyles = "bg-slate-100 text-slate-500 dark:bg-gray-700 dark:text-slate-300";

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
          <Link to='/All-calculators/Health-Calculators/BMR-Calculator'>
            <span className='hover:underline'>  BMR Calculator </span>
          </Link>
        </p>
      </div>
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full max-w-[60rem] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl px-8 py-12">
        
        <div className="text-center mb-8">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold bg-gradient-to-bl from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2">
            BMR Calculator
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-[clamp(0.875rem,2vw,1rem)]">
            Calculate your Basal Metabolic Rate to determine daily calorie needs
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setUnit('metric')}
            className={`${baseButtonStyles} text-lg ${unit === 'metric' ? activeUnitButtonStyles : inactiveUnitButtonStyles}`}
          >
            Metric
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={`${baseButtonStyles} text-lg ${unit === 'imperial' ? activeUnitButtonStyles : inactiveUnitButtonStyles}`}
          >
            Imperial
          </button>
        </div>

        {/* Gender Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setGender('male')}
            className={`${baseButtonStyles} text-base ${gender === 'male' ? activeGenderButtonStyles : inactiveGenderButtonStyles}`}
          >
            Male
          </button>
          <button
            onClick={() => setGender('female')}
            className={`${baseButtonStyles} text-base ${gender === 'female' ? activeGenderButtonStyles : inactiveGenderButtonStyles}`}
          >
            Female
          </button>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-slate-800 dark:text-slate-200 font-semibold mb-2 text-sm">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
              className="w-full px-4 py-[0.875rem] rounded-xl border-2 border-slate-200 text-base text-slate-800 outline-none transition-all duration-300 ease-in-out 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         dark:bg-gray-700 dark:border-gray-600 dark:text-slate-100 dark:placeholder-gray-400 
                         focus:dark:border-indigo-500 focus:dark:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-slate-800 dark:text-slate-200 font-semibold mb-2 text-sm">
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g., 170' : 'e.g., 67'}
              className="w-full px-4 py-[0.875rem] rounded-xl border-2 border-slate-200 text-base text-slate-800 outline-none transition-all duration-300 ease-in-out 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         dark:bg-gray-700 dark:border-gray-600 dark:text-slate-100 dark:placeholder-gray-400 
                         focus:dark:border-indigo-500 focus:dark:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-slate-800 dark:text-slate-200 font-semibold mb-2 text-sm">
              Age (years)
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g., 30"
              className="w-full px-4 py-[0.875rem] rounded-xl border-2 border-slate-200 text-base text-slate-800 outline-none transition-all duration-300 ease-in-out 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         dark:bg-gray-700 dark:border-gray-600 dark:text-slate-100 dark:placeholder-gray-400 
                         focus:dark:border-indigo-500 focus:dark:ring-indigo-600"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            onClick={calculateBMR}
            disabled={!weight || !height || !age}
            className="w-full px-8 py-4 rounded-xl text-lg font-bold text-white transition-all duration-300 ease-in-out 
                       bg-gradient-to-bl from-[#667eea] to-[#764ba2] shadow-[0_8px_16px_rgba(102,126,234,0.3)] 
                       cursor-pointer hover:scale-[1.02] transform 
                       disabled:bg-slate-300 disabled:dark:bg-gray-600 disabled:shadow-none 
                       disabled:cursor-not-allowed disabled:scale-100"
          >
            Calculate BMR
          </button>
          <button
            onClick={reset}
            className="w-full px-8 py-4 rounded-xl border-2 border-slate-200 text-lg font-bold text-slate-500 
                       cursor-pointer transition-all duration-300 ease-in-out bg-white hover:bg-slate-50 
                       dark:bg-gray-700 dark:border-gray-600 dark:text-slate-300 dark:hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        {/* Results Section */}
        {bmr !== null && (
          <div className="p-8 rounded-2xl border-[3px] border-emerald-500 bg-gradient-to-bl from-emerald-50 to-emerald-100
                          dark:from-emerald-900/70 dark:to-emerald-800/70 dark:border-emerald-600">
            
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-100 m-0">
                  Your BMR
                </h2>
              </div>
              <p className="text-[clamp(3rem,8vw,4rem)] font-bold text-emerald-500 dark:text-emerald-400 my-2">
                {bmr}
              </p>
              <p className="text-lg text-emerald-700 dark:text-emerald-200 font-semibold">
                calories/day
              </p>
            </div>

            <div className="border-t-2 border-emerald-500 dark:border-emerald-600 pt-6 mt-6">
              <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-100 mb-4 text-center">
                Daily Calorie Needs by Activity Level
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {activityLevels.map((activity) => (
                  <div
                    key={activity.level}
                    className="bg-white p-[0.875rem] rounded-lg shadow-md shadow-emerald-500/10 dark:bg-emerald-800/80"
                  >
                    <div className="text-xs text-emerald-700 dark:text-emerald-200 font-bold mb-1">
                      {activity.level}
                    </div>
                    <div className="text-xl font-bold text-emerald-500 dark:text-emerald-400 mb-1">
                      {Math.round(bmr * activity.multiplier)}
                    </div>
                    <div className="text-[0.7rem] text-gray-500 dark:text-emerald-300">
                      {activity.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/70 dark:bg-emerald-900/50 rounded-lg text-sm text-emerald-700 dark:text-emerald-200 leading-relaxed">
              <strong className="font-semibold">Note:</strong> BMR represents the calories your body burns at rest. Multiply by your activity level above to determine your Total Daily Energy Expenditure (TDEE).
            </div>

          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default BMRCalculator;