import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const All_Conversions: React.FC = () => {
    return (
        <>
            <Navbar />
             <div className="min-h-screen min-w-screen bg-gray-200 dark:bg-[#1f1f1f]">
            <p className="text-gray-700 dark:text-[#d6d6d6]">All Conversion</p>
        </div>
            <Footer />
        </>
    )
}
export default All_Conversions;