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
                                <div className="flex flex-col-2">
                                    <input
                                        className="w-full px-4 text-lg py-2 max-w-md  border rounded-3xl border-[#000000] focus:ring-2 text-bold focus:ring-orange-500 focus:border-transparent dark:focus:ring-orange-600 dark:bg-gray-100  dark:text-black transition-all duration-300 ease-in-out"
                                        type="text"
                                        placeholder={"Search Here..."}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center rounded-lg p-2">
                            <div className="bg-[#D9D9D9] dark:bg-gray-800/80 backdrop-blur-sm shadow-md rounded-lg p-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl transition-all duration-300 ease-in-out">
                                <h1 className="dark:text-teal-400 text-blue-700 text-md sm:text-xl md:text-3xl lg:text-4xl text-center font-semibold transition-all duration-300 ease-in-out">
                                    Free Calculators
                                </h1>
                            </div>
                        </div>
                        <div className="flex justify-center">

                            <div className="flex items-center justify-center rounded-3xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                                <button
                                    onClick={() => (window.open("/Regular_Calculator", "_blank"))}
                                >
                                    <div className="flex p-3 rounded-3xl border border-black backdrop-blur-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out  ">
                                        <p className="text-md sm:text-sm md:text-md lg:text-lg">Regular Calculator</p>
                                        <ExternalLink className="mt-1 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="text-[#000000] dark:text-gray-300 text-center px-4 text-sm sm:text-sm md:text-md lg:text-lg  ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus repudiandae perspiciatis et perferendis non asperiores delectus debitis! Cum culpa a vel, ad nesciunt amet expedita quos laboriosam est, repudiandae, esse sint laudantium!
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4 ml-4">
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                                <h2 className="">Currency Conversions</h2>
                                <p>Hello</p>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                                <h2 className="">Unit Conversions</h2>
                                <p>Hello</p>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                                <h2 className="">Financial Calculators</h2>
                                <p>Hello</p>
                            </div>
                            <div className="flex flex-col items-center justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                                <h2 className="">Scientific Calculators</h2>
                                <p>Hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default All_Conversions;