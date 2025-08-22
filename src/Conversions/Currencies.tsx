import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Currency = () => {
    return (<>
    <Navbar />
        <div className="min-h-screen min-w-screen bg-gray-200 dark:bg-[#1f1f1f]">
            <p className="text-gray-700 dark:text-[#d6d6d6]">Currency Calculators</p>
        </div>
        <Footer />
    </>
    )
}
export default Currency;