import React from "react";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 min-w-0">
            <div className="flex items-center space-x-3 mb-6 flex-wrap">
              <img
                src="../src/assets/logo.png"
                alt="CalcVerse Logo"
                className="h-10 w-auto object-contain brightness-0 invert flex-shrink-0"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent break-words">
                CalcVerse
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6 break-words">
              The world's most comprehensive calculation platform, trusted by millions of users worldwide for accurate and reliable results.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 flex-wrap">
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-teal-600 dark:hover:bg-teal-600 transition-colors duration-200 flex-shrink-0">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-200 flex-shrink-0">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-600 dark:hover:bg-pink-600 transition-colors duration-200 flex-shrink-0">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="min-w-0">
            <h4 className="font-semibold text-white mb-6 text-lg break-words">Calculators</h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                  Currency Converter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Unit Converter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Financial Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Scientific Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Health Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="min-w-0">
            <h4 className="font-semibold text-white mb-6 text-lg break-words">Company</h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Our Mission</a></li>
              <li><a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Press Kit</a></li>
              <li><a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Blog</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="min-w-0">
            <h4 className="font-semibold text-white mb-6 text-lg break-words">Get in Touch</h4>
            <div className="space-y-4 text-gray-300 dark:text-gray-400">
              <div className="flex items-center break-words">
                <Mail className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" />
                <a href="mailto:support@calcverse.com" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-all">
                  support@calcverse.com
                </a>
              </div>
              <div className="flex items-center break-words">
                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                <span className="break-words">
                  123 Calculator Street<br />
                  Tech Valley, CA 94000<br />
                  United States
                </span>
              </div>
            </div>
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-3 break-words">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 min-w-0"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-all duration-200 font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-gray-500 mb-4 md:mb-0 text-center md:text-left break-words">
              © 2025 CalcVerse. Built with ❤️ by{" "}
              <a href="https://github.com/Akshith080" className="text-teal-400 hover:text-teal-300 transition-colors duration-200 break-words">
                Akshith080
              </a>
              . All rights reserved.
            </p>
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:space-x-6 text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;