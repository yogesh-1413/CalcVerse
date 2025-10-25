import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Updated list based on the screenshot
const calculators = [
  // Currency Converters
  { name: "USD to INR", path: "/All-calculators/Currency-Converter" },
  { name: "USD to EUR", path: "/All-calculators/Currency-Converter" },
  { name: "USD to GBP", path: "/All-calculators/Currency-Converter" },
  { name: "USD to JPY", path: "/All-calculators/Currency-Converter" },
  { name: "USD to CHF", path: "/All-calculators/Currency-Converter" },
  { name: "USD to CAD", path: "/All-calculators/Currency-Converter" },
  { name: "USD to NZD", path: "/All-calculators/Currency-Converter" },
  { name: "EUR to GBP", path: "/All-calculators/Currency-Converter" },
  { name: "EUR to JPY", path: "/All-calculators/Currency-Converter" },
  { name: "AUD to CHF", path: "/All-calculators/Currency-Converter" },

  // Financial Calculators
  { name: "SIP Calculator", path: "/All-calculators/Financial-Calculators/SIP-Calculator" },
  { name: "SWP Calculator", path: "/All-calculators/Financial-Calculators/SWP-Calculator" },
  { name: "CAGR Calculator", path: "/All-calculators/Financial-Calculators/CAGR-Calculator" },
  { name: "EMI Calculator", path: "/All-calculators/Financial-Calculators/EMI-Calculator" },
  { name: "XIRR Calculator", path: "/All-calculators/Financial-Calculators/XIRR-Calculator" },
  { name: "How Long to Save", path: "/All-calculators/Financial-Calculators/How-Long-To-Save" },
  { name: "How Long Will My Money Last", path: "/All-calculators/Financial-Calculators/Money-Last-Calculator" },
  { name: "Simple Interest Calculator", path: "/All-calculators/Financial-Calculators/Simple-Interest-Calculator" },
  { name: "Compound Interest Calculator", path: "/All-calculators/Financial-Calculators/Compound-Interest-Calculator" },
  { name: "Loan Payoff Calculator", path: "/All-calculators/Financial-Calculators/Loan-Pay-Off-Calculator" },

  // Unit Conversions
  { name: "Time Converter", path: "/All-calculators/Unit-Conversions/Time-Converter" },
  { name: "Length & Distance", path: "/All-calculators/Unit-Conversions/Length-Distance-Converter" },
  { name: "Mass & Weight", path: "/All-calculators/Unit-Conversions/Mass-Weight-Converter" },
  { name: "Area Converter", path: "/All-calculators/Unit-Conversions/Area-Converter" },
  { name: "Speed Converter", path: "/All-calculators/Unit-Conversions/Speed-Converter" },
  { name: "Temperature Converter", path: "/All-calculators/Unit-Conversions/Temperature-Converter" },
  { name: "Pressure Converter", path: "/All-calculators/Unit-Conversions/Pressure-Converter" },
  { name: "Fuel Consumption", path: "/All-calculators/Unit-Conversions/Fuel-Consumption-Converter" },
  { name: "Acceleration", path: "/All-calculators/Unit-Conversions/Acceleration-Converter" },
  { name: "Data Storage", path: "/All-calculators/Unit-Conversions/Data-Storage-Converter" },

  // Health Calculators
  { name: "Body Mass Index (BMI)", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Basal Metabolic Rate (BMR)", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Kilojoules to Calories", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Miles to Steps", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Steps to Kilometers", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Steps to Calories", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Pregnancy Calculator", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Sobriety Calculator", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
  { name: "Age Calculator", path: "/All-calculators/Health-Calculators/BMI-Calculator" },
];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<typeof calculators>([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 150);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = calculators.filter((calc) =>
      calc.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setFiltered(results);
  }, [debouncedQuery]);

  const handleSelect = (path: string) => {
    setQuery("");
    setFiltered([]);
    navigate(path);
  };

  return (
     <div className="relative w-full max-w-md mx-auto mt-6">
            <div className="flex ">
                <div className="rounded-3xl  w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ">
                    <div className="flex flex-col-2 dark:text-white">
                        <input
                            className="w-full px-4 text-lg py-2 max-w-md border rounded-3xl border-[#000000] focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-purple-600 dark:bg-transparent dark:text-white transition-all duration-300 ease-in-out"
                            type="text"
                            placeholder={"Search Here..."}
                            onChange={(e) => setQuery(e.target.value)}

                        />
                    </div>
                </div>
            </div>  

      {filtered.length > 0 && (
        <ul className="absolute z-20 w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 max-h-72 overflow-y-auto">
          {filtered.map((calc, index) => (
            <li
              key={index}
              onClick={() => handleSelect(calc.path)}
              className="px-5 py-2.5 text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-teal-100 dark:hover:bg-gray-700 transition duration-150"
            >
              {calc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
