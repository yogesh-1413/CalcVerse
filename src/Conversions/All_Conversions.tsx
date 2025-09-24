import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ExternalLink, } from "lucide-react";


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
                            <div className="bg-[#D9D9D9] dark:bg-transparent border border-black backdrop-blur-sm shadow-md rounded-lg p-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl transition-all duration-300 ease-in-out">
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
                                    <div className="flex px-9  py-2 rounded-3xl border border-black backdrop-blur-md hover:scale-105 hover:shadow-md hover:text-blue-600 dark:hover:text-teal-400 hover:border-blue-600 dark:hover:border-teal-400 transition-all duration-300 ease-in-out  ">
                                        <p className="text-md  sm:text-sm md:text-md lg:text-xl">Regular Calculator</p>
                                        <ExternalLink className="mt-1 mb-1 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-6 lg:w-6 ml-3 " />
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="text-[#000000] dark:text-white/90 mt-5 text-center px-4 text-sm sm:text-sm md:text-md lg:text-lg  ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus repudiandae perspiciatis et perferendis non asperiores delectus debitis! Cum culpa a vel, ad nesciunt amet expedita quos laboriosam est, repudiandae, esse sint laudantium!
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mr-4 ml-4 bg-white/80 dark:bg-gray-700 backdrop-blur-md rounded-3xl shadow-2xl border-slate-200 dark:border-gray-700 p-8 relative overflow-hidden transition-all duration-300 ease-in-out ">
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-teal-700 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30">
                                <h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start">Currency </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                                    <div>
                                        <p className="dark:text-white/90 ml-5">USD to INR</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                        <p className="dark:text-white/90 ml-5">Hello</p>
                                    </div>
                                    <div>
                                        <p className="dark:text-white/90">Hello2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-blue-700 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
                                <h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start">Unit Conversions</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                                    <div>
                                        <p className="dark:text-white/90">Hello</p>
                                    </div>
                                    <div>
                                        <p className="dark:text-white/90">Hello2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-green-700 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30">
                                <h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start">Financial </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                                    <div>
                                        <p className="dark:text-white/90">Hello</p>
                                    </div>
                                    <div>
                                        <p className="dark:text-white/90">Hello2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto border border-purple-600 shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                                <h2 className="dark:text-white/90 font-bold flex flex-col sm:text-sm md:text-sm lg:text-lg self-start">Scientific Calculators</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                                    <div>
                                        <p className="dark:text-white/90">Hello</p>
                                    </div>
                                    <div>
                                        <p className="dark:text-white/90">Hello2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default All_Conversions