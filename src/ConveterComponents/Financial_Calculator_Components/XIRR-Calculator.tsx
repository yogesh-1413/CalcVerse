import { useState } from 'react';
import { PiggyBank, Info, Plus, Trash2 } from 'lucide-react';
import CalculatorLayout from './Calculator-layout';

interface CashFlow {
    date: string;
    amount: number;
}

export default function XIRRCalculator() {
    const [cashFlows, setCashFlows] = useState<CashFlow[]>([
        { date: '2020-01-01', amount: -100000 },
        { date: '2025-01-01', amount: 150000 },
    ]);
    const [result, setResult] = useState<number | null>(null);

    const addCashFlow = () => {
        setCashFlows([...cashFlows, { date: '', amount: 0 }]);
    };

    const removeCashFlow = (index: number) => {
        setCashFlows(cashFlows.filter((_, i) => i !== index));
    };

    const updateCashFlow = (index: number, field: 'date' | 'amount', value: string | number) => {
        const updated = [...cashFlows];
        updated[index] = { ...updated[index], [field]: value };
        setCashFlows(updated);
    };

    const calculateXIRR = () => {
        const flows = cashFlows.filter((cf) => cf.date && cf.amount !== 0);
        if (flows.length < 2) return;

        const dates = flows.map((cf) => new Date(cf.date).getTime());
        const amounts = flows.map((cf) => cf.amount);

        const xnpv = (rate: number) => {
            const firstDate = dates[0];
            return amounts.reduce((acc, amount, i) => {
                const days = (dates[i] - firstDate) / (1000 * 60 * 60 * 24);
                return acc + amount / Math.pow(1 + rate, days / 365);
            }, 0);
        };

        let guess = 0.1;
        let rate = guess;
        let delta = 1;
        let iterations = 0;

        while (Math.abs(delta) > 0.00001 && iterations < 100) {
            const npv = xnpv(rate);
            const npv1 = xnpv(rate + 0.0001);
            const derivative = (npv1 - npv) / 0.0001;
            delta = npv / derivative;
            rate = rate - delta;
            iterations++;
        }

        setResult(rate * 100);
    };

    return (
        <CalculatorLayout
            title="XIRR Calculator"
            description="Calculate Extended Internal Rate of Return"
            icon={<PiggyBank className="w-8 h-8" />}
            color="teal"
            route='XIRR-Calculator'
        >
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6 rounded dark:bg-teal-800/30 transition-colors">
                <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5 dark:text-teal-100" />
                    <div className="text-sm text-teal-800 dark:text-teal-100">
                        <p className="font-semibold mb-1">What is XIRR?</p>
                        <p>
                            XIRR (Extended Internal Rate of Return) calculates returns for investments with irregular cash flows.
                            Perfect for SIPs, mutual funds with multiple transactions. Use negative values for investments and positive for redemptions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="space-y-3">
                    {cashFlows.map((cf, index) => (
                        <div key={index} className="flex gap-3">
                            <input
                                type="date"
                                value={cf.date}
                                onChange={(e) => updateCashFlow(index, 'date', e.target.value)}
                                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
                            />
                            <input
                                type="number"
                                value={cf.amount || ''}
                                onChange={(e) => updateCashFlow(index, 'amount', parseFloat(e.target.value) || 0)}
                                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:border-white dark:bg-slate-900/20"
                                placeholder="Amount (negative for investment)"
                            />
                            {cashFlows.length > 2 && (
                                <button
                                    onClick={() => removeCashFlow(index)}
                                    className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={addCashFlow}
                    className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-teal-300 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors font-medium"
                >
                    <Plus className="w-5 h-5" />
                    Add Cash Flow
                </button>

                <button
                    onClick={calculateXIRR}
                    className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
                >
                    Calculate XIRR
                </button>

                {result !== null && (
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Your Returns</h3>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600 font-semibold">XIRR (Annual Return)</span>
                            <span className="font-bold text-3xl text-teal-700">
                                {result.toFixed(2)}%
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </CalculatorLayout>
    );
}
