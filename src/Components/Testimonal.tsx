import React, {useState, useEffect} from "react";
import {Star, Users,Award} from "lucide-react";

function Testimonial(){
    return (
        <>
        <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-300 ease-in-out">
              Trusted by millions worldwide
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-600 dark:text-gray-300 ml-2 transition-all duration-300 ease-in-out">
                4.9/5 from 50,000+ reviews
              </span>
            </div>
          </div> */}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400 rounded-full flex items-center justify-center shadow-lg dark:shadow-teal-500/25">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 dark:text-white transition-call duration-300 ease-in-out">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out">
                    Financial Analyst
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out">
                "CalcVerse has revolutionized how I handle financial calculations. The accuracy and comprehensive tools are unmatched."
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 rounded-full flex items-center justify-center shadow-lg dark:shadow-green-500/25">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 dark:text-white transition-all duration-300 ease-in-out">
                    Michael Chen
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out">
                    Business Owner
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out">
                "As someone who needs various calculations daily, this platform saves me hours of work every week with its comprehensive calculator suite."
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full flex items-center justify-center shadow-lg dark:shadow-purple-500/25">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 dark:text-white transition-all duration-300 ease-in-out">
                    Emma Rodriguez
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out">
                    Travel Blogger
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out">
                "Perfect for travelers! I can quickly convert currencies, calculate tips, and budget effectively during my international trips."
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default Testimonial;