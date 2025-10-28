
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import StayUpdated from "./StayUpdated";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="min-w-0">
           <Link to = '/All-Calculators' className="hover:underline"> <h4 className="font-semibold text-white mb-6 text-lg break-words hover:text-teal-300">All Calculators</h4></Link>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li>
                <Link to="/All-calculators/Currency-Converter" className="hover:text-teal-400 dark:hover:text-teal-300 hover:underline transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link to="/All-calculators/Unit-Conversions" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Unit Converter
                </Link>
              </li>
              <li>
                <Link to="/All-calculators/Financial-Calculators" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Financial Calculator
                </Link>
              </li>
              <li>
                <Link to="/All-calculators/Health-Calculators" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 flex items-center break-words">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Health Calculators
                </Link>
              </li>
      
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-semibold text-white mb-6 text-lg break-words">Company</h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li><Link to="/About-Us" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">About Us</Link></li>
              <li><Link to="/Our Mission" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Our Mission</Link></li>
              {/* <li><Link to="#" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Press Kit</Link></li>
              <li><Link to="#" className="hover:underline hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 break-words">Blog</Link></li> */}
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
                Visakhapatnam, INDIA
                </span>
                </a>
              </div>
            </div>

           <StayUpdated />
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-400 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:space-x-6 text-gray-400 dark:text-gray-500">
              <Link to="/Privacy-Policy" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap hover:underline">Privacy Policy</Link>
              <Link to="/Terms-Of-Service" className="hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 whitespace-nowrap hover:underline">Terms of Service</Link>
            </div>
            <p>© CalcVerse All Right Reserved, 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;