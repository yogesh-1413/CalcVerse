import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";


const UnitConversions: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-slate-50/60 via-blue-50/60 to-teal-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
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
                        <Link to='/Unit-Conversions'>
                            <span className='hover:underline'> Unit Conversions </span>
                        </Link>
                    </p>
                </div>
                <p className="text-gray-700 dark:text-[#d6d6d6]">Unit Conversions</p>
            </div>
            <Footer />
        </div>
    )
}
export default UnitConversions;