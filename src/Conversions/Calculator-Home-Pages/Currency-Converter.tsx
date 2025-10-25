import { useState, useEffect } from 'react';
import { DollarSign, ArrowRight, RefreshCw, Info, ArrowLeftRight } from 'lucide-react';
import { Link } from 'react-router-dom';


interface RatesData {
    base: string;
    rates: Record<string, number>;
}

const currencyNames: Record<string, string> = {
    EUR: 'Euro',
    USD: 'US Dollar',
    JPY: 'Japanese Yen',
    BGN: 'Bulgarian Lev',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HUF: 'Hungarian Forint',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    SEK: 'Swedish Krona',
    CHF: 'Swiss Franc',
    ISK: 'Icelandic Króna',
    NOK: 'Norwegian Krone',
    HRK: 'Croatian Kuna',
    RUB: 'Russian Ruble',
    TRY: 'Turkish Lira',
    AUD: 'Australian Dollar',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CNY: 'Chinese Yuan',
    HKD: 'Hong Kong Dollar',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    ZAR: 'South African Rand',

};

const currencyFlags: Record<string, string> = {
    EUR: '🇪🇺',
    USD: '🇺🇸',
    JPY: '🇯🇵',
    BGN: '🇧🇬',
    CZK: '🇨🇿',
    DKK: '🇩🇰',
    GBP: '🇬🇧',
    HUF: '🇭🇺',
    PLN: '🇵🇱',
    RON: '🇷🇴',
    SEK: '🇸🇪',
    CHF: '🇨🇭',
    ISK: '🇮🇸',
    NOK: '🇳🇴',
    HRK: '🇭🇷',
    RUB: '🇷🇺',
    TRY: '🇹🇷',
    AUD: '🇦🇺',
    BRL: '🇧🇷',
    CAD: '🇨🇦',
    CNY: '🇨🇳',
    HKD: '🇭🇰',
    IDR: '🇮🇩',
    ILS: '🇮🇱',
    INR: '🇮🇳',
    KRW: '🇰🇷',
    MXN: '🇲🇽',
    MYR: '🇲🇾',
    NZD: '🇳🇿',
    PHP: '🇵🇭',
    SGD: '🇸🇬',
    THB: '🇹🇭',
    ZAR: '🇿🇦'

};

export default function CurrencyConverter() {
    const [rates, setRates] = useState<RatesData | null>(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState('100');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState<number | null>(null);

    useEffect(() => {
        fetchRates();
    }, []);

    const fetchRates = async () => {
        try {
            setLoading(true);
            const response = await fetch('/currency_data.json');
            const data = await response.json();
            setRates(data);
        } catch (error) {
            console.error('Error fetching rates:', error);
        } finally {
            setLoading(false);
        }
    };

    const convert = () => {
        if (!rates || !amount) return;

        const amountNum = parseFloat(amount);
        if (isNaN(amountNum)) return;

        let convertedAmount: number;

        if (fromCurrency === 'USD') {
            convertedAmount = amountNum * (rates.rates[toCurrency] || 1);
        } else if (toCurrency === 'USD') {
            convertedAmount = amountNum / (rates.rates[fromCurrency] || 1);
        } else {
            const inUSD = amountNum / (rates.rates[fromCurrency] || 1);
            convertedAmount = inUSD * (rates.rates[toCurrency] || 1);
        }

        setResult(convertedAmount);
    };

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setResult(null);
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4,
        }).format(num);
    };

    const allCurrencies = rates ? ['USD', ...Object.keys(rates.rates).sort()] : [];

    return (<div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-black/50 p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 md:gap-0">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Currency Converter</h1>
                            <p className="text-slate-600 dark:text-slate-400 mt-1">Accurate currency exchange rates <span className='text-xs'>(Updates Every 2 Hours)</span></p>

                        </div>
                    </div>
                    <button
                        onClick={fetchRates}
                        disabled={loading}
                        className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title="Refresh rates"
                    >
                        <RefreshCw className={`w-5 h-5 text-slate-600 dark:text-slate-400 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/50 border-l-4 border-emerald-500 dark:border-emerald-400 p-4 mb-6 rounded">
                    <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5 dark:text-emerald-100" />
                        <div className="text-sm text-emerald-800 dark:text-emerald-100">
                            <p className="font-semibold mb-1">Exchange Rate Information</p>
                            <p>
                                All rates are based on USD as the base currency. Convert between 30+ currencies
                                with Accurate exchange rates for accurate financial planning.
                            </p>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <RefreshCw className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-spin mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-400">Loading exchange rates...</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Amount</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setResult(null);
                                }}
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                                placeholder="Enter amount"
                            />
                        </div>

                        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-end">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    From
                                </label>
                                <div className="relative">
                                    <select
                                        value={fromCurrency}
                                        onChange={(e) => {
                                            setFromCurrency(e.target.value);
                                            setResult(null);
                                        }}
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                                    >
                                        {allCurrencies.map((currency) => (
                                            <option key={currency} value={currency}>
                                                {currencyFlags[currency]} {currency} - {currencyNames[currency]}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <button
                                    onClick={swapCurrencies}
                                    className="p-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-colors"
                                    title="Swap currencies"
                                >
                                    <ArrowLeftRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    To
                                </label>
                                <div className="relative">
                                    <select
                                        value={toCurrency}
                                        onChange={(e) => {
                                            setToCurrency(e.target.value);
                                            setResult(null);
                                        }}
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg  focus:ring-2 focus:ring-emerald-500 focus:border-transparent  appearance-none text-lg bg-white dark:bg-slate-800  text-slate-900 dark:text-slate-100"
                                    >
                                        {allCurrencies.map((currency) => (
                                            <option key={currency} value={currency}>
                                                {currencyFlags[currency]} {currency} - {currencyNames[currency]}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col md:flex-row gap-4">
                            <button
                                onClick={convert}
                                className="flex-1 bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Convert
                            </button>

                        </div>

                        {result !== null && (
                            <div className="bg-gradient-to-br from-emerald-50 dark:from-emerald-900 to-teal-50 dark:to-teal-900 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Conversion Result</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-emerald-200 dark:border-emerald-700">
                                        <span className="text-slate-600 dark:text-slate-400">
                                            {formatNumber(parseFloat(amount))} {fromCurrency}
                                        </span>
                                        <span className="text-emerald-600 dark:text-emerald-300">
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold">Converted Amount</span>
                                        <span className="font-bold text-2xl text-emerald-700 dark:text-emerald-400">
                                            {formatNumber(result)} {toCurrency}
                                        </span>
                                    </div>
                                    {rates && (
                                        <div className="pt-3 mt-3 border-t border-emerald-200 dark:border-emerald-700 text-sm text-slate-600 dark:text-slate-400">
                                            <p>
                                                Exchange Rate: 1 {fromCurrency} ={" "}
                                                {fromCurrency === "USD"
                                                    ? formatNumber(rates.rates[toCurrency] || 1)
                                                    : toCurrency === "USD"
                                                        ? formatNumber(1 / (rates.rates[fromCurrency] || 1))
                                                        : formatNumber(
                                                            ((rates.rates[toCurrency] || 1) / (rates.rates[fromCurrency] || 1))
                                                        )}{" "}
                                                {toCurrency}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {rates && (
                            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
                                    Popular Exchange Rates (1 USD =)
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {["EUR", "GBP", "JPY", "INR", "AUD", "CAD", "CNY", "CHF"].map((currency) => (
                                        <div
                                            key={currency}
                                            className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-2xl">{currencyFlags[currency]}</span>
                                                <span className="font-semibold text-slate-700 dark:text-slate-300">{currency}</span>
                                            </div>
                                            <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                                                {formatNumber(rates.rates[currency])}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
    );
}
