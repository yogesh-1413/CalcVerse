
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="min-w-0">
           <Link to = '/All_Conversions' className="hover:underline"> <h4 className="font-semibold text-white mb-6 text-lg break-words hover:text-teal-300">All Calculators</h4></Link>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li>
                <Link to="/Currency" className="hover:text-teal-400 dark:hover:text-teal-300 hover:underline transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link to="/UnitConvert" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Unit Converter
                </Link>
              </li>
              <li>
                <Link to="/Financial" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Financial Calculator
                </Link>
              </li>
              <li>
                <Link to="/Health_Calculators" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Health Calculators
                </Link>
              </li>
      
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-semibold text-white mb-6 text-lg break-words">Company</h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Our Mission</a></li>
              <li><a href="#" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Careers</a></li>
              <li><a href="#" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Press Kit</a></li>
              <li><a href="#" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Blog</a></li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-semibold text-white mb-6 text-lg break-words">Get in Touch</h4>
            <div className="space-y-4 text-gray-300 dark:text-gray-400">
              <div className="flex items-center break-words">
                <Mail className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" />
                <a href="mailto:support@calcverse.com" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-all hover:underline">
                  support@calcverse.com
                </a>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                <a href="https://www.google.com/maps/place/Visakhapatnam,+Andhra+Pradesh/" target="_blank" className="">
                <span className="break-words dark:hover:text-teal-400 hover:underline">
                Visakhapatanam, INDIA
                </span>
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium text-white mb-3 break-words">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row gap-0">
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

        <div className="border-t border-gray-300 dark:border-gray-400 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:space-x-6 text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap hover:underline">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;