import React, { useState } from "react";
import { LengthUnit, convertLength } from "../Utils/Length&Distance";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const units: LengthUnit[] = [
  "planck",
  "nanometers",
  "microns",
  "millimeters",
  "centimeters",
  "meters",
  "kilometers",
  "inches",
  "feet",
  "yards",
  "miles",
  "nauticalMiles",
  "astronomicalUnits",
  "lightYears",
  "parsecs",
];

const Length_And_Distance_Converter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<LengthUnit>("meters");
  const [toUnit, setToUnit] = useState<LengthUnit>("kilometers");
  const [result, setResult] = useState<number>(0);

  const handleConvert = () => {
    const converted = convertLength(inputValue, fromUnit, toUnit);
    setResult(converted);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-100/60 via-blue-50/60 to-indigo-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
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
          <Link to='Length_and_Distance_Converter'>
            <span className='hover:underline'> Length & Distance Converter </span>
          </Link>
        </p>
      </div>
      <div className="min-h-screen flex justify-center items-center ">
        <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg w-full bg-[#cfcfcf] dark:bg-gray-800/80 transition-all duration-300 ease-in-out">
          <h1 className="text-xl font-bold mb-4 dark:text-gray-200">📏 Length and Distance Converter</h1>

          <div className="mb-3">
            <label className="block font-medium dark:text-gray-200">Value</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium dark:text-gray-200">From</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as LengthUnit)}
              className="w-full border p-2 rounded"
            >
              {units.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="block font-medium dark:text-gray-200">To</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as LengthUnit)}
              className="w-full border p-2 rounded"
            >
              {units.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleConvert}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Convert
          </button>

          {result !== 0 && (
            <div className="mt-4 text-lg font-semibold dark:text-gray-200">
              Result: {result.toExponential(10)} {toUnit}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Length_And_Distance_Converter;
