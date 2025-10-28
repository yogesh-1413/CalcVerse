import { useState } from "react";
import { Cake } from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [birthdayMessage, setBirthdayMessage] = useState<string | null>(null);

  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
  } | null>(null);

  const getDaysUntilNextBirthday = (birth: Date) => {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };


  const handleCalculate = () => {
    const birth = new Date(birthDate);
    const today = new Date();

    if (!isNaN(birth.getTime())) {
      const diffTime = today.getTime() - birth.getTime();
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      let years = today.getFullYear() - birth.getFullYear();
      let months = today.getMonth() - birth.getMonth();
      let days = today.getDate() - birth.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      // 🎉 Check for birthday
      if (today.getDate() === birth.getDate() && today.getMonth() === birth.getMonth()) {
        setBirthdayMessage("🎉 Happy Birthday! 🎂");
      } else {
        const daysLeft = getDaysUntilNextBirthday(birth);
        setBirthdayMessage(`🎈 ${daysLeft} days left for your next birthday!`);
      }

      setResult({ years, months, days, totalDays });
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-r min-h-screen from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
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
          <Link to='/All-calculators/Health-Calculators/Age-Calculator'>
            <span className='hover:underline'>  Age Calculator </span>
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-white/80 dark:bg-gray-800/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl">
              <Cake className="w-8 h-8 text-red-500 dark:text-red-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white ">
              Age Calculator
            </h2>
          </div>

          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Your Birth Date
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 dark:border-gray-200 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />

          <button
            onClick={handleCalculate}
            disabled={!birthDate}
            className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 
                        ${birthDate
                ? "bg-gradient-to-r from-red-500 to-pink-500 hover:scale-[1.02] hover:shadow-md"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 bg-gradient-to-br from-red-100/60 to-pink-100/40 
                            dark:from-red-900/20 dark:to-pink-900/20 
                            border border-red-200/60 dark:border-red-700/40 
                            rounded-2xl p-5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
                Your Age Details
              </h3>
              <div className="space-y-2">
                <p className="text-gray-900 dark:text-gray-100">
                  <span className="font-semibold">Age:</span>{" "}
                  {result.years} years, {result.months} months, {result.days} days
                </p>
                <p className="text-gray-900 dark:text-gray-100">
                  <span className="font-semibold">Total Days:</span>{" "}
                  {result.totalDays.toLocaleString()} days
                </p>
                {birthdayMessage && (
                  <p className="text-2xl font-bold text-center mt-3 text-pink-600 dark:text-pink-600 animate-pulse">
                    {birthdayMessage}
                  </p>
                )}


              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgeCalculator;
