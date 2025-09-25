// src/components/Converter.tsx
import React, { useState } from "react";
import { TimeUnit, convertTime, timeFactors } from "../Utils/time";

const units: TimeUnit[] = [
  "milliseconds",
  "seconds",
  "minutes",
  "hours",
  "days",
  "weeks",
  "months",
  "years",
  "decades",
  "centuries",
];

const TimeConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<TimeUnit>("seconds");
  const [toUnit, setToUnit] = useState<TimeUnit>("minutes");
  const [result, setResult] = useState<number>(0);

  const handleConvert = () => {
    const converted = convertTime(inputValue, fromUnit, toUnit);
    setResult(converted);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-xl font-bold mb-4">⏱ Time Converter</h1>

      <div className="mb-3">
        <label className="block font-medium">Value</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium">From</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as TimeUnit)}
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
        <label className="block font-medium">To</label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as TimeUnit)}
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
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>

      {result !== 0 && (
        <div className="mt-4 text-lg font-semibold">
          Result: {result} {toUnit}
        </div>
      )}
    </div>
  );
};

export default TimeConverter;
