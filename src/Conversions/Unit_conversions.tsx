import React from "react";
import Navber from "../Components/Navbar";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const UnitConversions: React.FC = () => {
    return (
        <>
        <Navbar />
             <div className="min-h-screen min-w-screen bg-gray-200 dark:bg-[#1f1f1f]">
            <p className="text-gray-700 dark:text-[#d6d6d6]">Unit Conversions</p>
        </div>
            <Footer />
        </>
    )
}
export default UnitConversions;