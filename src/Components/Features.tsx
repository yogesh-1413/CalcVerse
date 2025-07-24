import React, { useState, useEffect } from "react";
import { Zap, Shield, Globe, TrendingUp } from 'lucide-react';

function Features(){
    return (
        <>
       <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Why choose CalcVerse?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Experience the most accurate, fast, and reliable calculation platform trusted by professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-200 shadow-lg dark:shadow-teal-500/25">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Get instant calculations with real-time data processing updated every second.
              </p>
            </div>

            {/* <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-200 shadow-lg dark:shadow-green-500/25">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Bank-Grade Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Your data is protected with enterprise-level security and encryption standards.
              </p>
            </div> */}

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-200 shadow-lg dark:shadow-purple-500/25">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                25+ Calculator Types
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                From currency to scientific calculations, we cover all your computational needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-200 shadow-lg dark:shadow-orange-500/25">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Advanced Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Access historical data and advanced analytics for better financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Features;