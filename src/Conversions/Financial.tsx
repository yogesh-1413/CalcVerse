import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Financial_Calculators from '../Conversions/Calculator-Home-Pages/Financial-Calculators-Home';

const Financial: React.FC = () => {
    return (<div className='bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out'>
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
                    <Link to='/All-calculators/Financial-Calculators'>
                        <span className='hover:underline'> Financial Calculator</span>
                    </Link>
                </p>
            </div>
            <Financial_Calculators />
        </div>
        <Footer />
    </div>
    )
}
export default Financial;