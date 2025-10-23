import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Updated list based on the screenshot
const calculators = [
  // Currency Converters
  { name: "USD to INR", path: "/usd-inr" },
  { name: "USD to EUR", path: "/usd-eur" },
  { name: "USD to GBP", path: "/usd-gbp" },
  { name: "USD to JPY", path: "/usd-jpy" },
  { name: "USD to CHF", path: "/usd-chf" },
  { name: "USD to CAD", path: "/usd-cad" },
  { name: "USD to NZD", path: "/usd-nzd" },
  { name: "EUR to GBP", path: "/eur-gbp" },
  { name: "EUR to JPY", path: "/eur-jpy" },
  { name: "AUD to CHF", path: "/aud-chf" },

  // Financial Calculators
  { name: "SIP Calculator", path: "/sip-calculator" },
  { name: "SWP Calculator", path: "/swp-calculator" },
  { name: "CAGR Calculator", path: "/cagr-calculator" },
  { name: "EMI Calculator", path: "/emi-calculator" },
  { name: "XIRR Calculator", path: "/xirr-calculator" },
  { name: "How Long to Save", path: "/how-long-to-save" },
  { name: "How Long Will My Money Last", path: "/money-last" },
  { name: "Simple Interest Calculator", path: "/simple-interest" },
  { name: "Compound Interest Calculator", path: "/compound-interest" },
  { name: "Loan Payoff Calculator", path: "/loan-payoff" },

  // Unit Conversions
  { name: "Time Converter", path: "/time" },
  { name: "Length & Distance", path: "/length-distance" },
  { name: "Mass & Weight", path: "/mass-weight" },
  { name: "Area Converter", path: "/area" },
  { name: "Speed Converter", path: "/speed" },
  { name: "Temperature Converter", path: "/temperature" },
  { name: "Pressure Converter", path: "/pressure" },
  { name: "Fuel Consumption", path: "/fuel" },
  { name: "Acceleration", path: "/acceleration" },
  { name: "Data Storage", path: "/data-storage" },

  // Health Calculators
  { name: "Body Mass Index (BMI)", path: "/bmi" },
  { name: "Basal Metabolic Rate (BMR)", path: "/bmr" },
  { name: "Kilojoules to Calories", path: "/kilojoules-to-calories" },
  { name: "Miles to Steps", path: "/miles-to-steps" },
  { name: "Steps to Kilometers", path: "/steps-to-km" },
  { name: "Steps to Calories", path: "/steps-to-calories" },
  { name: "Pregnancy Calculator", path: "/pregnancy" },
  { name: "Sobriety Calculator", path: "/sobriety" },
  { name: "Age Calculator", path: "/age" },
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
