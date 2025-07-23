import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Currency Conversions", href: "#currency" },
  { name: "Unit Conversions", href: "#unit" },
  { name: "Financial Calculators", href: "#financial" },
  { name: "Health Calculator", href: "#health" },
  { name: "Scientific Calculator", href: "#scientific" },
];

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 border-b border-blue-100 dark:border-gray-800 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo only, no text */}
          <div className="flex items-center space-x-2">
           <a href="/"><img
              src="../src/assets/logo.png" 
               alt="Logo"
              className="h-[64px] w-auto object-contain" 
              style={{ maxWidth: 96 }}
            /></a>
          </div>
          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Dark mode toggle */}
          <div className="flex items-center space-x-4">
            <button
              aria-label="Toggle Dark Mode"
              onClick={() => setDarkMode((d) => !d)}
              className="rounded-full border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              {darkMode ? (
                // Sun icon (light mode)
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 4V2m0 20v-2m8-8h2M2 12H4m15.364-7.364l1.414 1.414M4.222 19.778l1.414-1.414M18.364 19.778l-1.414-1.414M4.222 4.222l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z"
                  />
                </svg>
              ) : (
                // Moon icon (dark mode)
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 dark:text-blue-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;