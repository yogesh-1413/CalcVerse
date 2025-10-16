import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const calculators = [
    { name: "SIP Calculator", path: "/calculators/sip" },
    { name: "EMI Calculator", path: "/calculators/emi" },
    { name: "SWP Calculator", path: "/calculators/swp" },
    { name: "CAGR Calculator", path: "/calculators/cagr" },
    { name: "FD Calculator", path: "/calculators/fd" },
    { name: "RD Calculator", path: "/calculators/rd" },
];

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState<typeof calculators>([]);
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 100);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        if (debouncedQuery.trim() === "") {
            setFiltered([]);
            return;
        }

        const results = calculators.filter((calc) =>
            calc.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setFiltered(results);
    }, [debouncedQuery]);

    const handleSelect = (path: string) => {
        setQuery("");
        setFiltered([]);
        navigate(path);
    };

    return (
        <div className="relative w-full max-w-md mx-auto mt-6">
            <div className="flex p-4">
                <div className="rounded-3xl  w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ">
                    <div className="flex flex-col-2 dark:text-white">
                        <input
                            className="w-full px-4 text-lg py-2 max-w-md border rounded-3xl border-[#000000] focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-purple-600 dark:bg-transparent dark:text-white transition-all duration-300 ease-in-out"
                            type="text"
                            placeholder={"Search Here..."}
                            onChange={(e) => setQuery(e.target.value)}

                        />
                    </div>
                </div>
            </div>
            {filtered.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-900 dark:border-gray-700">
                    {filtered.map((calc, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(calc.path)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            {calc.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
