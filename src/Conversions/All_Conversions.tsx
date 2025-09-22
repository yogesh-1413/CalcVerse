import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const All_Conversions: React.FC = () => {
    return (
        <>
            <div className="min-h-screen min-w-screen bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
                <Navbar />

                {/* <p className="text-gray-700 dark:text-[#d6d6d6]">All Conversion</p> */}
                <div className="flex justify-center mt-4 rounded-lg p-2 ">
                    <div className="bg-[#D9D9D9] dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-lg p-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl transition-all duration-300 ease-in-out">
                        <h1 className="dark:text-teal-400 text-blue-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold transition-all duration-300 ease-in-out">
                            Free Calculators
                        </h1>
                    </div>
                </div>

                <div className="">
                    <p className="text-[#000000] dark:text-gray-300 text-center px-4 text-sm sm:text-sm md:text-md xl:text-lg  ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus repudiandae perspiciatis et perferendis non asperiores delectus debitis! Cum culpa a vel, ad nesciunt amet expedita quos laboriosam est, repudiandae, esse sint laudantium!
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-4 ml-4">
                        <div className="flex justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                            <h2 className="">Currency Conversions</h2>
                            <p>Hello</p>
                        </div>
                        <div className="flex justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                            <h2 className="">Unit Conversions</h2>
                            <p>Hello</p>
                        </div>
                        <div className="flex justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                            <h2 className="">Financial Calculators</h2>
                            <p>Hello</p>
                        </div>
                        <div className="flex justify-center min-h-auto min-w-auto shadow-lg rounded-md mt-4 ml-5 mr-5 p-5 ">
                            <h2 className="">Scientific Calculators</h2>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default All_Conversions;