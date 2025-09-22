import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Currency = () => {
    return (<>
    <Navbar />
        <div className="min-h-screen min-w-screen bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
            <p className="text-gray-700 dark:text-[#d6d6d6]">Currency Calculators</p>
        </div>
        <Footer />
    </>
    )
}
export default Currency;