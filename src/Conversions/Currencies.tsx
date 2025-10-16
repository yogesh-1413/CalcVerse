import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Currency = () => {
    return (<div className="  bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
        <Navbar />

        <div className="min-h-screen min-w-screen ">
            <div className="ml-10  mb-3 mt-3">
                <p className="text-xs dark:text-white ">
                    <span className='hover:underline'>
                        <Link to='/'>Home </Link>
                    </span>
                    &gt;
                    <span className='hover:underline'>
                        <Link to="/All-Calculators"> All Calculators </Link>
                    </span>
                    &gt;
                    <Link to='/All-calculators/Currency-Calculators'>
                        <span className='hover:underline'> Currency Calculators</span>
                    </Link>
                </p>
            </div>
            <p className="text-gray-700 dark:text-[#d6d6d6]">Currency Calculators</p>
        </div>
        <Footer />
    </div>
    )
}
export default Currency;