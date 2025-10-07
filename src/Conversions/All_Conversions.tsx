import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ExternalLink, } from "lucide-react";
import { Link } from "react-router-dom"


const All_Conversions: React.FC = () => {
    return (
        <div >
            <div className="flex flex-col min-h-screen min-h-screen ">
                <div>
                    <Navbar /> </div>
                <div className=" min-h-screen flex flex-col bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
                    <div className="mt-3 grid grid-cols-3 ">
                        <div className="flex p-4">
                            <div className="rounded-3xl  w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ">
                                <div className="flex flex-col-2 dark:text-white">
                                    <input
                                        className="w-full px-4 text-lg py-2 max-w-md border rounded-3xl border-[#000000] focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-purple-600 dark:bg-transparent dark:text-white transition-all duration-300 ease-in-out"
                                        type="text"
                                        placeholder={"Search Here..."}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center rounded-lg p-2">
                            <div className="bg-transparent dark:bg-transparent border border-black backdrop-blur-sm shadow-md rounded-lg p-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl transition-all duration-300 ease-in-out">
                                <h1 className="dark:text-teal-400 text-blue-700 text-md sm:text-xl md:text-3xl lg:text-4xl text-center font-semibold transition-all duration-300 ease-in-out">
                                    Free Calculators
                                </h1>
                            </div>
                        </div>
                        <div className="flex justify-center">

                            <div className="flex items-center justify-center rounded-3xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ">
                                <button
                                    className=""
                                    onClick={() => (window.open("/Regular_Calculator", "_blank"))}
                                >
                                    <div className="flex px-3 py-2 rounded-3xl border border-black backdrop-blur-md hover:scale-105 hover:shadow-md hover:text-blue-600 dark:hover:text-teal-400 hover:border-blue-600 dark:hover:border-teal-400 overflow-hidden transition-all duration-300 ease-in-out  ">
                                        <p className="text-md  sm:text-sm md:text-md lg:text-xl">Regular Calculator</p>
                                        <ExternalLink className="mt-1 mb-1 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-6 lg:w-6 ml-3 " />
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="text-[#000000] mt-5 text-center px-4 text-sm sm:text-sm md:text-md lg:text-lg dark:bg-gradient-to-r dark:from-blue-700 dark:to-indigo-700 dark:bg-clip-text dark:text-transparent">
                            Here is the Collection of the all Extensive Calculators and Converters, Trusted over Millions.......
                        </p>

                    </div>
                    <div className="flex-1 flex-col justify-center mt-5 mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mr-4 ml-4 bg-white/80 dark:bg-gray-700 backdrop-blur-md rounded-3xl shadow-2xl border-slate-200 dark:border-gray-700 p-8 relative overflow-hidden transition-all duration-300 ease-in-out ">
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-teal-700 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 transition-all duration-300 ease-in-out">
                                <Link to="/Currency" className="self-start"><h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start hover:underline transition-all duration-200 ease-in-out ">Currency Converters</h2></Link>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full ">
                                    <div className="flex flex-col gap-2 mt-4 ">
                                        <Link to="/" title="US Dollar to Indian Rupee"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"> <span className="font-bold ">USD</span> to <span className="font-bold">INR</span></p></Link>
                                        <Link to="/" title="US Dollar to Euro"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"> <span className="font-bold ">USD</span> to <span className="font-bold">EUR</span></p></Link>
                                        <Link to="/" title="US Dollar to Great Britain Pound"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"> <span className="font-bold ">USD</span> to <span className="font-bold">GBP</span></p></Link>
                                        <Link to="/" title="US Dollar to Japanese Yen"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"> <span className="font-bold ">USD</span> to <span className="font-bold">JPY</span></p></Link>
                                        <Link to="/" title="US Dollar to Swiss franc"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"> <span className="font-bold ">USD</span> to <span className="font-bold">CHF</span></p></Link>
                                    </div>
                                    <div className="flex flex-col gap-2 md:mt-4">
                                        <Link to="/" title="US Dollar to Canadian dollar"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"><span className="font-bold ">USD</span> to <span className="font-bold">CAD</span></p></Link>
                                        <Link to="/" title="US Dollar to New Zealand dollar"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"><span className="font-bold ">USD</span> to <span className="font-bold">NZD</span></p></Link>
                                        <Link to="/" title="Euro to Great Britain Pound"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"><span className="font-bold ">EUR</span> to <span className="font-bold">GBP</span></p></Link>
                                        <Link to="/" title="Euro to Japanese yen"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"><span className="font-bold ">EUR</span> to <span className="font-bold">JPY</span></p></Link>
                                        <Link to="/" title="Australian Dollar to Swiss franc"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out"><span className="font-bold ">AUD</span> to <span className="font-bold">CHF</span></p></Link>
                                        <Link to="/" title="More Currency Converters"><p className="dark:text-white ml-3 text-sm md:text-md lg:text-md hover:underline transition-all duration-300 ease-in-out">More.....</p></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-purple-600 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 transition-all duration-300 ease-in-out">
                                <Link to="/Financial" className="self-start"><h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start hover:underline transition-all duration-300 ease-in-out">Financial Calculators</h2></Link>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                                    <div className="flex flex-col mt-4 gap-2">
                                        <Link to="/SIP Calculator"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">SIP Calculator</p></Link>
                                        <Link to="/SWP Calculator"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">SWP Calculator</p></Link>
                                        <Link to="/CAGR Calculator"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">CAGR Calculator</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">EMI calculator</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">XIRR Calculator</p></Link>
                                    </div>
                                    <div className="flex flex-col gap-2  md:mt-4 ">
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">How Long to Save</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">How Long Will My Money Last</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Simple Interest Calculator</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Compound Interest Calculator</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Loan Payoff Calculator</p></Link>
                                        {/* <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">More.....</p></Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-blue-700 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 transition-all duration-300 ease-in-out">
                                <Link to="/Unitconvert" className="self-start"><h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start hover:underline transition-all duration-300 ease-in-out">Unit Conversions</h2></Link>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                                    <div className="flex flex-col gap-2 mt-4">
                                        <Link to="TimeConverter"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Time</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Area</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Speed</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Temperature</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Pressure</p></Link>
                                    </div>
                                    <div className="flex flex-col gap-2 md:mt-4">
                                        <Link to="Length_and_Distance_Converter"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Length & Distance</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Mass & Weight</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Fuel Consumption</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Acceleration</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Data Storage</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">More........</p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-green-700 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 transition-all duration-300 ease-in-out">
                                <Link to="/Health" className="self-start"><h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start hover:underline transition-all duration-300 ease-in-out">Health Calculators </h2></Link>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                                    <div className="flex flex-col gap-2 mt-4">
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Body Mass Index <span className="font-bold">(BMI)</span></p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Basal Metabolic Rate <span className="font-bold">(BMR)</span></p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Kilojoules to Calories</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Miles to Steps</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Steps to Kilometers</p></Link>
                                    </div>
                                    <div className="flex flex-col gap-2 md:mt-4">
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Steps to Calories</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Pregnancy Calculator</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Sobriety Calculator</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Age Calculator</p></Link>
                                        <Link to="/"><p className="dark:text-white ml-3 text-sm sm:text-sm md:text-md lg:text-md hover:underline">Hello2</p></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <></>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default All_Conversions