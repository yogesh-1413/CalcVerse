import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const TemperatureConverter: React.FC = () => {
  const units = ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)"];

  const [fromUnit, setFromUnit] = useState("Celsius (°C)");
  const [toUnit, setToUnit] = useState("Fahrenheit (°F)");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const convertTemperature = (value: number, from: string, to: string): number => {
    let celsiusValue: number;

    switch (from) {
      case "Celsius (°C)":
        celsiusValue = value;
        break;
      case "Fahrenheit (°F)":
        celsiusValue = (value - 32) * (5 / 9);
        break;
      case "Kelvin (K)":
        celsiusValue = value - 273.15;
        break;
      case "Rankine (°R)":
        celsiusValue = (value - 491.67) * (5 / 9);
        break;
      default:
        celsiusValue = value;
    }

    switch (to) {
      case "Celsius (°C)":
        return celsiusValue;
      case "Fahrenheit (°F)":
        return celsiusValue * (9 / 5) + 32;
      case "Kelvin (K)":
        return celsiusValue + 273.15;
      case "Rankine (°R)":
        return (celsiusValue + 273.15) * (9 / 5);
      default:
        return value;
    }
  };

  const handleConvert = () => {
    if (inputValue === "" || isNaN(Number(inputValue))) {
      setResult("Enter a valid number");
      return;
    }

    const numericValue = parseFloat(inputValue);
    const converted = convertTemperature(numericValue, fromUnit, toUnit);
    setResult(`${converted.toFixed(2)} ${toUnit}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
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
          <Link to='/All-calculators/Unit-Conversions'>
            <span className='hover:underline'> Unit Conversions </span>
          </Link>
          &gt;
          <Link to='/All-calculators/Unit-Conversions/Temperature-Converter'>
            <span className='hover:underline'>  Temperature Converter </span>
          </Link>
        </p>
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen px-4 ">
      <div className="bg-teal-200/40 dark:bg-teal-800/30 shadow-lg rounded-2xl p-6 w-full max-w-md text-center border border-teal-300 dark:border-teal-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
           Temperature Converter
        </h2>

        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className="w-full mb-4 px-4 py-2 border rounded-md text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
        />

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">From</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
            >
              {units.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">To</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
            >
              {units.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleConvert}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
        >
          Convert
        </button>

        {result && (
          <div className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100">
            Result: {result}
          </div>
        )}
      </div>

    </div>
    <Footer />
    </div>
  );
};

export default TemperatureConverter;
