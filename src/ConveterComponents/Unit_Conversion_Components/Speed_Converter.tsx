import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const SpeedConverter: React.FC = () => {
    return (
            <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-blue-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Acceleration Converter Component</h1>
                </div>
                <Footer />
    </div>
    );
};
export default SpeedConverter;