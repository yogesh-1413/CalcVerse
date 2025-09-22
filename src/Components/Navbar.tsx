import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { href, Link } from "react-router-dom";
import { Sun, Moon} from "lucide-react";

const navLinks = [
  {name:"Home",href:"/" ,title:"Home"},
  { name: "Currency", href: "/Currency" ,title:"Currency Conversions"},
  { name: "Unit", href: "/Unitconvert" ,title:"Unit Calculators"},
  { name: "Financial", href: "/Financial" ,title:"Financial Calculators"},
  // { name: "Health", href: "#health" ,title:"Health Calculators"},
  { name: "Scientific", href: "/Scientific" ,title:"Scientific Calculators"},

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
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="block"
            title="Home">
              <img
                src="../src/assets/logo.png"
                alt="CalcVerse Logo"
                className="h-[48px] sm:h-[56px] md:h-[64px] w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
                style={{ maxWidth: 96 }}
              />
            </Link>
          </div>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:underline text-slate-700 hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-400 font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-teal-50 dark:hover:bg-teal-900/20"
                title={link.title}
              >
                {link.name}
              </Link>
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
                <Sun className="text-black dark:text-white"></Sun>
              ) : (
                <Moon />
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
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-700 hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-400 font-medium transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 active:bg-teal-100 dark:active:bg-teal-900/40"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;