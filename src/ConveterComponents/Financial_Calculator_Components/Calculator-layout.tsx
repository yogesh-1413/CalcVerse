import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

interface CalculatorLayoutProps {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    children: ReactNode;
    route?: string;
}

export default function CalculatorLayout({
    title,
    description,
    icon,
    color,
    children,
    route,
}: CalculatorLayoutProps) {
    const getColorClasses = () => {
        const colors: Record<string, { bg: string; text: string; border: string; darkBorder: string; darkDiv: string; }> = {
            emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200', darkBorder: 'dark:border-emerald-400', darkDiv: 'dark:bg-emerald-600/80' },
            blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', darkBorder: 'dark:border-blue-400', darkDiv: 'dark:bg-blue-600/80' },
            violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200', darkBorder: 'dark:border-violet-400', darkDiv: 'dark:bg-violet-600/80' },
            orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', darkBorder: 'dark:border-orange-400', darkDiv: 'dark:bg-orange-600/80' },
            teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200', darkBorder: 'dark:border-teal-400', darkDiv: 'dark:bg-teal-600/80' },
            sky: { bg: 'bg-sky-100', text: 'text-sky-600', border: 'border-sky-200', darkBorder: 'dark:border-sky-400', darkDiv: 'dark:bg-sky-600/80' },
            rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200', darkBorder: 'dark:border-rose-400', darkDiv: 'dark:bg-rose-600/80' },
            amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200', darkBorder: 'dark:border-amber-400', darkDiv: 'dark:bg-amber-600/80' },
            lime: { bg: 'bg-lime-100', text: 'text-lime-600', border: 'border-lime-200', darkBorder: 'dark:border-lime-400', darkDiv: 'dark:bg-lime-600/80' },
            cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200', darkBorder: 'dark:border-cyan-400', darkDiv: 'dark:bg-cyan-600/80' },
        };
        return colors[color] || colors.emerald;
    };

    const colors = getColorClasses();

    return (
        <div className='bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out'>
            <Navbar />
            <div className="ml-10  mt-3">
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
                        <span className='hover:underline'> Financial Calculators </span>
                    </Link>
                    &gt;
                    <Link to={`/All-calculators/Financial-Calculators/${route}`}>
                        <span className='hover:underline'> {route} </span>
                    </Link>
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300">

                <div className=" bg-white/80 dark:bg-gray-700 backdrop-blur-md rounded-3xl shadow-2xl border-slate-200 dark:border-gray-700 p-8 relative overflow-hidden  p-8 md:p-10 transition-colors duration-300">

                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center ${colors.darkDiv} transition-colors`}>
                            <span className={`dark:text-white/80 ${colors.text}`}>{icon}</span>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold text-slate-800 dark:text-white transition-colors">
                                {title}
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 mt-1 transition-colors">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="dark:text-slate-200 text-slate-800 transition-colors duration-300">
                        {children}
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
}
