
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, HeartPulse} from "lucide-react";
import Navbar from "./Navbar";


function Hero() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <section className="relative overflow-hidden pt-16 pb-24 flex-1 ">
        <div className="pb-10">
          <div className=" absolute inset-0 bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-all duration-300 ease-in-out">
                  All-in-One Calculator
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent block">
                    Universe
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                  From currency conversions to scientific calculations, health metrics to financial planning - CalcVerse is your comprehensive calculation companion for every need.
                </p>
                <div className="flex flex-col md:flex-col-2 sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to='/All-Calculators'>
                    <div className="bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-500 dark:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-700 hover:to-blue-700 dark:hover:from-teal-600 dark:hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 "
                    >
                      Explore Calculators <ArrowRight className="inline ml-1  text-white" />
                    </div>
                  </Link>
                  <button className="backdrop-blur-md p-4 border border-black rounded-xl hover:text-blue-700 hover:border-blue-700 dark:hover:text-teal-400 dark:hover:border-teal-400 shadow-xl hover-shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
                    onClick={() => (window.open("/All-calculators/Regular-Calculator"))}
                  >
                    <div className="flex justify-center ">
                      Regular Calculator <ExternalLink className="ml-3" />
                    </div>
                  </button>
                </div>


              </div>

              <div className="relative">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200 dark:border-gray-700 p-8 relative overflow-hidden transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-600 to-blue-600"></div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Calculator Categories</h3>
                    <p className="text-gray-600 dark:text-gray-300">Powerful tools for every calculation need</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <Link to="/All-calculators/Currency-Converter" >
                      <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 p-6 rounded-2xl border border-teal-100 dark:border-teal-800 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Currency</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Real-time exchange rates</p>
                      </div>
                    </Link>

                    <Link to="/All-calculators/Unit-Conversions">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Unit Convert</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Length, weight, volume ....etc</p>
                      </div>
                    </Link>

                    <Link to="/All-calculators/Financial-Calculators">
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 p-6 rounded-2xl border border-green-100 dark:border-green-800 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Financial</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Loans, SIP, EMI.... etc</p>
                      </div>
                    </Link>

                    <Link to="/All-calculators/Health-Calculators">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-2xl border border-purple-100 dark:border-purple-800 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                        <HeartPulse className="text-white"/>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Health Calculators</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">BMI, BMR...etc</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default Hero;
