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
}

export default function CalculatorLayout({
    title,
    description,
    icon,
    color,
    children,
}: CalculatorLayoutProps) {
    const getColorClasses = () => {
        const colors: Record<string, { bg: string; text: string; border: string }> = {
            emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
            blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
            violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200' },
            orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
            teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
            sky: { bg: 'bg-sky-100', text: 'text-sky-600', border: 'border-sky-200' },
            rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200' },
            amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
            lime: { bg: 'bg-lime-100', text: 'text-lime-600', border: 'border-lime-200' },
            cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200' },
        };
        return colors[color] || colors.emerald;
    };

    const colors = getColorClasses();

    return (
        <div className='bg-gradient-to-r from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out'>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300">

                {/* Back Button */}
                <Link
                    to="/All-calculators/Financial-Calculators"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors mb-6 font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Calculators
                </Link>

                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-[0_0_15px_rgba(0,0,0,0.4)] p-8 md:p-10 transition-colors duration-300">

                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                            <span className={colors.text}>{icon}</span>
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

                    <div className="dark:text-slate-200 text-slate-800 transition-colors">
                        {children}
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
}
