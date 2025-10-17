import { Link } from 'react-router-dom';
import {
    Activity,
    Flame,
    UtensilsCrossed,
    Footprints,
    CircleFadingPlusIcon,
    Zap,
    Baby,
    Ban,
    Cake,
    MessageCircle,
} from "lucide-react";

interface CalculatorCard {
    title: string;
    description: string;
    icon: React.ReactNode;
    path: string;
    color: string;
}

function Health_Calculators_Home() {
    const calculators: CalculatorCard[] = [
        {
            title: 'Body Mass Index (BMI) Calculator',
            description: 'Find out your Body Mass Index to determine whether you are underweight, normal, overweight, or obese based on your height and weight.',
            icon: <Activity className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/BMI-Calculator',
            color: 'emerald',
        },
        {
            title: 'Basal Metabolic Rate (BMR) Calculator',
            description: 'Estimate the number of calories your body needs at rest to maintain vital functions like breathing and circulation.',
            icon: <Flame className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/BMR-Calculator',
            color: 'blue',
        },
        {
            title: 'Kilojoules to Calories Calculator',
            description: 'Convert energy values between kilojoules (kJ) and calories (Cal) to better track your food and energy intake.',
            icon: <UtensilsCrossed className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Kilojoules-to-Calories-Calculator',
            color: 'violet',
        },
        {
            title: 'Miles to Steps Calculator',
            description: 'Convert miles walked or run into an approximate number of steps based on your stride length.',
            icon: <Footprints className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Miles-to-Steps-Calculator',
            color: 'orange',
        },
        {
            title: 'Steps to Kilometers Calculator',
            description: 'Easily convert your daily step count into distance covered in kilometers to track your fitness goals.',
            icon: <CircleFadingPlusIcon className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Steps-to-Kilometers-Calculator',
            color: 'teal',
        },
        {
            title: 'Steps to Calories Calculator',
            description: 'Estimate how many calories you’ve burned based on your daily step count and walking intensity.',
            icon: <Zap className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Steps-to-Calories-Calculator',
            color: 'sky',
        },
        {
            title: 'Pregnancy Calculator',
            description: 'Predict your due date and track important milestones during pregnancy using your last menstrual period.',
            icon: <Baby className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Pregnancy-Calculator',
            color: 'rose',
        },
        {
            title: 'Sobriety Calculator',
            description: 'Track how long you have been sober and measure your progress toward your sobriety goals.',
            icon: <Ban className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Sobriety-Calculator',
            color: 'amber',
        },
        {
            title: 'Age Calculator',
            description: 'Quickly find your exact age in years, months, and days from your date of birth.',
            icon: <Cake className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Age-Calculator',
            color: 'lime',
        },
        {
            title: 'Health Overview',
            description: 'Get a quick summary of your health stats and conversions — all your essential wellness tools in one place.',
            icon: <MessageCircle className="w-8 h-8" />,
            path: '/All-calculators/Health-Calculators/Health-Overview',
            color: 'cyan',
        },
    ];


    const getColorClasses = (color: string) => {
        const colors: Record<
        string,
            {
                bg: string;
                icon: string;
                hover: string;
                textHover: string;
                border: string;
                darkBorder: string;
                divBg: string;
                darkDivBg: string;
            }
        > = {
            emerald: { bg: "bg-emerald-100", icon: "text-emerald-600", hover: "group-hover:bg-emerald-600", textHover: "group-hover:text-emerald-600", border: "border-emerald-100", darkBorder: "dark:border-emerald-200", divBg: "bg-gradient-to-br from-emerald-100 to-teal-100", darkDivBg: "dark:from-emerald-900/30 dark:to-teal-900/30", },
            blue: { bg: "bg-blue-100", icon: "text-blue-600", hover: "group-hover:bg-blue-600", textHover: "group-hover:text-blue-600", border: "border-blue-100", darkBorder: "dark:border-blue-200", divBg: "bg-gradient-to-br from-blue-100 to-cyan-100", darkDivBg: "dark:from-blue-900/30 dark:to-cyan-900/30", },
            violet: { bg: "bg-violet-100", icon: "text-violet-600", hover: "group-hover:bg-violet-600", textHover: "group-hover:text-violet-600", border: "border-violet-100", darkBorder: "dark:border-violet-200", divBg: "bg-gradient-to-br from-violet-100 to-fuchsia-100", darkDivBg: "dark:from-violet-900/30 dark:to-fuchsia-900/30", },
            orange: { bg: "bg-orange-100", icon: "text-orange-600", hover: "group-hover:bg-orange-600", textHover: "group-hover:text-orange-600", border: "border-orange-100", darkBorder: "dark:border-orange-200", divBg: "bg-gradient-to-br from-orange-100 to-amber-100", darkDivBg: "dark:from-orange-900/30 dark:to-amber-900/30", },
            teal: { bg: "bg-teal-100", icon: "text-teal-600", hover: "group-hover:bg-teal-600", textHover: "group-hover:text-teal-600", border: "border-teal-100", darkBorder: "dark:border-teal-200", divBg: "bg-gradient-to-br from-teal-100 to-blue-100", darkDivBg: "dark:from-teal-900/30 dark:to-blue-900/30", },
            sky: { bg: "bg-sky-100", icon: "text-sky-600", hover: "group-hover:bg-sky-600", textHover: "group-hover:text-sky-600", border: "border-sky-100", darkBorder: "dark:border-sky-200", divBg: "bg-gradient-to-br from-sky-100 to-indigo-100", darkDivBg: "dark:from-sky-900/30 dark:to-indigo-900/30", },
            rose: { bg: "bg-rose-100", icon: "text-rose-600", hover: "group-hover:bg-rose-600", textHover: "group-hover:text-rose-600", border: "border-rose-100", darkBorder: "dark:border-rose-200", divBg: "bg-gradient-to-br from-rose-100 to-pink-100", darkDivBg: "dark:from-rose-900/30 dark:to-pink-900/30", },
            amber: { bg: "bg-amber-100", icon: "text-amber-600", hover: "group-hover:bg-amber-600", textHover: "group-hover:text-amber-600", border: "border-amber-100", darkBorder: "dark:border-amber-200", divBg: "bg-gradient-to-br from-amber-100 to-yellow-100", darkDivBg: "dark:from-amber-900/30 dark:to-yellow-900/30", },
            lime: { bg: "bg-lime-100", icon: "text-lime-600", hover: "group-hover:bg-lime-600", textHover: "group-hover:text-lime-600", border: "border-lime-100", darkBorder: "dark:border-lime-200", divBg: "bg-gradient-to-br from-lime-100 to-green-100", darkDivBg: "dark:from-lime-900/30 dark:to-green-900/30", },
            cyan: { bg: "bg-cyan-100", icon: "text-cyan-600", hover: "group-hover:bg-cyan-600", textHover: "group-hover:text-cyan-600", border: "border-cyan-100", darkBorder: "dark:border-cyan-200", divBg: "bg-gradient-to-br from-cyan-100 to-blue-100", darkDivBg: "dark:from-cyan-900/30 dark:to-blue-900/30", },
        };

        return colors[color] || colors.emerald;
    };


    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 dark:text-back">
                    Health Calculators
                </h1>
                <p className="text-lg text-slate-600 max-w-4xl mx-auto dark:text-white">
                    Choose from our comprehensive suite of health calculators to better understand your body, track your fitness progress, and achieve your wellness goals.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-gray-700 w-full rounded-xl p-12">
                {calculators.map((calc) => {
                    const colors = getColorClasses(calc.color);
                    return (
                        <Link
                            key={calc.path}
                            to={calc.path}
                            className={`group bg-gradient-to-br ${colors.divBg} ${colors.darkDivBg} p-6 border ${colors.border} ${colors.darkBorder}  rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 `}
                        >
                            <div
                                className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 transition-colors ${colors.hover}`}
                            >
                                <span className={`${colors.icon} group-hover:text-white transition-colors`}>
                                    {calc.icon}
                                </span>
                            </div>
                            <h3 className={`text-xl font-bold text-slate-800 mb-2 transition-colors dark:text-gray-300 ${colors.textHover}`}>
                                {calc.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-400">
                                {calc.description}
                            </p>
                        </Link>

                    );
                })}
            </div>
        </div>
    );
}
export default Health_Calculators_Home;
