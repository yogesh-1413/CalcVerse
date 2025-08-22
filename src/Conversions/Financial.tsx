import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Financial: React.FC = () => {
    return (<>
    <Navbar />
         <div className="min-h-screen min-w-screen bg-gray-200 dark:bg-[#1f1f1f]">
            <p className="text-gray-700 dark:text-[#d6d6d6]">Financial Calculators</p>
        </div>
        <Footer />
    </>
    )
}
export default Financial;