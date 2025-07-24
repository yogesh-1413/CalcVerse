import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Currency", href: "#currency" },
  { name: "Unit", href: "#unit" },
  { name: "Financial", href: "#financial" },
  { name: "Health", href: "#health" },
  { name: "Scientific", href: "#scientific" },
];

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-slate-50/80 dark:bg-gray-900/80 border-b border-slate-200 dark:border-gray-700 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img
                src="../src/assets/logo.png"
                alt="CalcVerse Logo"
                className="h-[48px] sm:h-[56px] md:h-[64px] w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
                style={{ maxWidth: 96 }}
              />
            </a>
          </div>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-400 font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-teal-50 dark:hover:bg-teal-900/20"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Right side - Dark mode toggle and Mobile menu button */}
          <div className="flex items-center space-x-3">
            {/* Dark mode toggle */}
            <button
              aria-label="Toggle Dark Mode"
              onClick={() => setDarkMode((d) => !d)}
              className="rounded-full border border-slate-300 dark:border-gray-600 p-2 sm:p-2.5 bg-white/80 dark:bg-gray-800/80 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-200 shadow-sm"
            >
              {darkMode ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-500 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 4V2m0 20v-2m8-8h2M2 12H4m15.364-7.364l1.414 1.414M4.222 19.778l1.414-1.414M18.364 19.778l-1.414-1.414M4.222 4.222l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-slate-600 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle Mobile Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg border border-slate-300 dark:border-gray-600 p-2 bg-white/80 dark:bg-gray-800/80 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-200 shadow-sm"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-700 dark:text-slate-100" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700 dark:text-slate-100" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <nav className="py-4 border-t border-slate-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-700 hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-400 font-medium transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 active:bg-teal-100 dark:active:bg-teal-900/40"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;