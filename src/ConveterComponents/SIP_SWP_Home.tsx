import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { SIPCalculator } from './SIP_Calculator';
import { SWPCalculator } from './SWP_Calculator';

function SIP_SWP_Calculator_App() {
  const [activeTab, setActiveTab] = useState<'sip' | 'swp'>('sip');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-4 rounded-2xl shadow-lg">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Investment Calculator
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Plan your investments and withdrawals with our interactive calculators
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-6">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('sip')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'sip'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              SIP Calculator
            </button>
            <button
              onClick={() => setActiveTab('swp')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'swp'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              SWP Calculator
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {activeTab === 'sip' ? <SIPCalculator /> : <SWPCalculator />}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>SIP: Systematic Investment Plan | SWP: Systematic Withdrawal Plan</p>
        </div>
      </div>
    </div>
  );
}

export default SIP_SWP_Calculator_App;
