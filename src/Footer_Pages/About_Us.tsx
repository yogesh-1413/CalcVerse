import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const About_Us: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 flex bg-gradient-to-r from-slate-50/60 via-blue-50/80 to-indigo-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">

            </div>
            <Footer />
        </div>
    )
};

export default About_Us;
