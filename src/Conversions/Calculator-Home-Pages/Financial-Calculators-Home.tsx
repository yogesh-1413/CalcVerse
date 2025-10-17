import { Link } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Home,
  Calculator,
  Clock,
  Hourglass,
  DollarSign,
  Coins,
  CreditCard,
} from 'lucide-react';

interface CalculatorCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

 function Financial_Calculators() {
  const calculators: CalculatorCard[] = [
    {
      title: 'SIP Calculator',
      description: 'Calculate returns on your Systematic Investment Plan. Plan your monthly investments and see how they grow over time with compound interest.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/All-calculators/Financial-Calculators/SIP-Calculator',
      color: 'emerald',
    },
    {
      title: 'SWP Calculator',
      description: 'Systematic Withdrawal Plan calculator to plan regular withdrawals from your investments while maintaining your corpus growth.',
      icon: <TrendingDown className="w-8 h-8" />,
      path: '/All-calculators/Financial-Calculators/SWP-Calculator',
      color: 'blue',
    },
    {
      title: 'CAGR Calculator',
      description: 'Calculate Compound Annual Growth Rate to understand the year-over-year growth rate of your investments over time.',
      icon: <Calculator className="w-8 h-8" />,
      path: '/All-calculators/Financial-Calculators/CAGR-Calculator',
      color: 'violet',
    },
    {
      title: 'EMI Calculator',
      description: 'Calculate your Equated Monthly Installment for loans. Find out your monthly payment, total interest, and payment schedule.',
      icon: <Home className="w-8 h-8" />,
      path: '/calculator/emi',
      color: 'orange',
    },
    {
      title: 'XIRR Calculator',
      description: 'Calculate Extended Internal Rate of Return for irregular cash flows. Perfect for mutual fund investments with multiple transactions.',
      icon: <PiggyBank className="w-8 h-8" />,
      path: '/calculator/xirr',
      color: 'teal',
    },
    {
      title: 'How Long to Save',
      description: 'Determine how long it will take to reach your savings goal based on your monthly contributions and expected returns.',
      icon: <Clock className="w-8 h-8" />,
      path: '/calculator/how-long-to-save',
      color: 'sky',
    },
    {
      title: 'How Long Will Money Last',
      description: 'Calculate how long your savings will last with regular withdrawals. Plan your retirement or emergency fund duration.',
      icon: <Hourglass className="w-8 h-8" />,
      path: '/calculator/money-last',
      color: 'rose',
    },
    {
      title: 'Simple Interest Calculator',
      description: 'Calculate simple interest on your principal amount. Understand returns on fixed deposits and simple interest-based investments.',
      icon: <DollarSign className="w-8 h-8" />,
      path: '/calculator/simple-interest',
      color: 'amber',
    },
    {
      title: 'Compound Interest Calculator',
      description: 'Calculate compound interest to see how your money grows exponentially. The most powerful force in finance.',
      icon: <Coins className="w-8 h-8" />,
      path: '/calculator/compound-interest',
      color: 'lime',
    },
    {
      title: 'Loan Payoff Calculator',
      description: 'Calculate how quickly you can pay off your loan with extra payments. Save on interest and become debt-free faster.',
      icon: <CreditCard className="w-8 h-8" />,
      path: '/calculator/loan-payoff',
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
          Financial Calculators
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto dark:text-white">
          Choose from our comprehensive suite of financial calculators to make informed decisions
          about your investments, loans, and savings goals.
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
export default Financial_Calculators;
