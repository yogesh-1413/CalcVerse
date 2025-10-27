import {useMemo, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";


type UnitKey =
  | "N"
  | "kN"
  | "MN"
  | "kgf"
  | "lbf"
  | "dyne"
  | "poundal";

const UNIT_FACTORS: Record<UnitKey, number> = {
  "N": 1.0,                
  "kN": 1000.0,            
  "MN": 1e6,               
  "kgf": 9.80665,         
  "lbf": 4.4482216152605, 
  "dyne": 1e-5,            
  "poundal": 0.138254954376 
};

const UNIT_LABELS: Record<UnitKey, string> = {
  "N": "Newton (N)",
  "kN": "Kilonewton (kN)",
  "MN": "Meganewton (MN)",
  "kgf": "Kilogram-force (kgf)",
  "lbf": "Pound-force (lbf)",
  "dyne": "Dyne (dyne)",
  "poundal": "Poundal (poundal)"
};

 function ForceConverter(): JSX.Element {
  const [value, setValue] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<UnitKey>("N");
  const [toUnit, setToUnit] = useState<UnitKey>("lbf");
  const [precision, setPrecision] = useState<number>(6);

  const conversions = useMemo(() => {
    const raw = parseFloat(value);
    const result: Record<UnitKey, number | null> = Object.create(null);
    if (!isFinite(raw)) {
      for (const k of Object.keys(UNIT_FACTORS) as UnitKey[]) result[k] = null;
      return result;
    }

    const pa = raw * UNIT_FACTORS[fromUnit];

    for (const k of Object.keys(UNIT_FACTORS) as UnitKey[]) {
      result[k] = pa / UNIT_FACTORS[k];
    }

    return result;
  }, [value, fromUnit]);

  function fmt(n: number | null) {
    if (n === null || !isFinite(n)) return "—";
    return Number(n).toLocaleString(undefined, { maximumFractionDigits: precision });
  }

  const sampleSteps = useMemo(() => {
    const raw = parseFloat(value);
    if (!isFinite(raw)) return ["Invalid input"];
    const pa = raw * UNIT_FACTORS[fromUnit];
    const toVal = pa / UNIT_FACTORS[toUnit];
    return [
      `${raw} ${UNIT_LABELS[fromUnit]} × ${UNIT_FACTORS[fromUnit].toLocaleString()}  = ${pa.toLocaleString()} N`,
      `${pa.toLocaleString()} N ÷ ${UNIT_FACTORS[toUnit].toLocaleString()}= ${toVal.toLocaleString(undefined, { maximumFractionDigits: precision })} ${toUnit}`,
    ];
  }, [value, fromUnit, toUnit, precision]);

  return (
    <div className="bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
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
          <Link to='/All-calculators/Unit-Conversions/Force-Converter'>
            <span className='hover:underline'>  Force Converter </span>
          </Link>
        </p>
      </div>
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="max-w-6xl w-full bg-indigo-200/20 dark:bg-indigo-800/20 rounded-2xl shadow-lg overflow-hidden border border-indigo-300 dark:border-indigo-700 transition-all duration-300 ease-in-out">
        <div className="p-4 md:p-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100">Force Converter</h1>
              <div className="flex items-center gap-3">
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-sm mb-2 text-slate-600 dark:text-slate-300">Value</label>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="px-4 py-2 rounded-lg border dark:border-slate-700 bg-white dark:bg-gray-700 text-slate-900 dark:text-slate-50"
                  inputMode="decimal"
                />
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-sm mb-2 block text-slate-600 dark:text-slate-300">From</label>
                  <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value as UnitKey)}
                    className="w-full px-4 py-2 rounded-lg border dark:border-slate-700 bg-white dark:bg-gray-700 text-slate-900 dark:text-slate-50"
                  >
                    {Object.keys(UNIT_FACTORS).map((k) => (
                      <option key={k} value={k}>
                        {UNIT_LABELS[k as UnitKey]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label className="text-sm mb-2 block text-slate-600 dark:text-slate-300">To</label>
                  <select
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value as UnitKey)}
                    className="w-full px-4 py-2 rounded-lg border dark:border-slate-700 bg-white dark:bg-gray-700 text-slate-900 dark:text-slate-50"
                  >
                    {Object.keys(UNIT_FACTORS).map((k) => (
                      <option key={k} value={k}>
                        {UNIT_LABELS[k as UnitKey]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <label className="text-sm mb-2 block text-slate-600 dark:text-slate-300">Precision</label>
                  <input
                    type="range"
                    min={0}
                    max={12}
                    value={precision}
                    onChange={(e) => setPrecision(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="w-28">
                  <button
                    onClick={() => {
                      setValue("1");
                      setFromUnit("N");
                      setToUnit("lbf");
                      setPrecision(6);
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 border border-indigo-300 dark:border-indigo-600 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm mb-2 block text-slate-600 dark:text-slate-300">Converted values</label>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.keys(UNIT_FACTORS).map((k) => {
                    const uk = k as UnitKey;
                    return (
                      <div key={k} className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-gray-700">
                        <div className="text-xs text-slate-500 dark:text-slate-300">{UNIT_LABELS[uk]}</div>
                        <div className="text-lg font-mono text-slate-900 dark:text-slate-100">{fmt(conversions[uk])}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <aside className="md:col-span-1 border-l dark:border-slate-700 pl-4">
            <div className="sticky top-6">
              <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Quick result</h2>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-gray-700 border dark:border-slate-700 mb-4">
                <div className="text-xs text-slate-500 dark:text-slate-300">{value} {UNIT_LABELS[fromUnit]}</div>
                <div className="text-2xl font-semibold mt-2 text-slate-800 dark:text-slate-50">
                  {fmt(conversions[toUnit])} <span className="text-sm font-normal">{toUnit}</span>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Steps</h3>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-gray-700 border dark:border-slate-700 mb-4 text-sm">
                {sampleSteps.map((s, i) => (
                  <div key={i} className="mb-2">{s}</div>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Available units</h3>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-gray-700 border dark:border-slate-700 text-xs">
                <ul className="list-disc pl-4">
                  {Object.keys(UNIT_LABELS).map((k) => (
                    <li key={k}>{UNIT_LABELS[k as UnitKey]}</li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default ForceConverter;   