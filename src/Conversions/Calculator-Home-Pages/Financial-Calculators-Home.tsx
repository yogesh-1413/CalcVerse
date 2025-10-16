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
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

interface CalculatorCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

export default function Financial_Calculators() {
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
    const colors: Record<string, { bg: string; icon: string; hover: string }> = {
      emerald: { bg: 'bg-emerald-100 dark:bg-emerald-800', icon: 'text-emerald-600', hover: 'group-hover:bg-emerald-600' },
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600', hover: 'group-hover:bg-blue-600' },
      violet: { bg: 'bg-violet-100', icon: 'text-violet-600', hover: 'group-hover:bg-violet-600' },
      orange: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'group-hover:bg-orange-600' },
      teal: { bg: 'bg-teal-100', icon: 'text-teal-600', hover: 'group-hover:bg-teal-600' },
      sky: { bg: 'bg-sky-100', icon: 'text-sky-600', hover: 'group-hover:bg-sky-600' },
      rose: { bg: 'bg-rose-100', icon: 'text-rose-600', hover: 'group-hover:bg-rose-600' },
      amber: { bg: 'bg-amber-100', icon: 'text-amber-600', hover: 'group-hover:bg-amber-600' },
      lime: { bg: 'bg-lime-100', icon: 'text-lime-600', hover: 'group-hover:bg-lime-600' },
      cyan: { bg: 'bg-cyan-100', icon: 'text-cyan-600', hover: 'group-hover:bg-cyan-600' },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Financial Calculators
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Choose from our comprehensive suite of financial calculators to make informed decisions
          about your investments, loans, and savings goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => {
          const colors = getColorClasses(calc.color);
          return (
            <Link
              key={calc.path}
              to={calc.path}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-4 transition-colors ${colors.hover}`}
              >
                <span className={`${colors.icon} group-hover:text-white transition-colors`}>
                  {calc.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                {calc.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {calc.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
