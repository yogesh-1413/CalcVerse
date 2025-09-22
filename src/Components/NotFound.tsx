import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";


const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
                <h1 className=" sm:text-lg md:text-2xl lg:text-3xl dark:text-[#ffffff]">Opps!  Page Your are Looking for Doesn't Exist</h1>
                <p className="m-2 sm:text-sm md:text-md lg:text-lg">Navigate to Home </p>
                <Link to="/" title="Home">
                    <div className="rounded-md p-1 bg-blue-400 dark:bg-teal-300 hover:scale-110 transition-all duration-300 ease-in-out">
                        <Home className="h-10 w-10 m-2 transition-all duration-300 ease-in-out" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default NotFound;