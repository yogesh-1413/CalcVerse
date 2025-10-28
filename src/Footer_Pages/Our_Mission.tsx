import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Our_Mission: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-slate-50/60 via-blue-50/80 to-indigo-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
<section className=" py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
          At CalcVerse, our mission is to make complex calculations effortless and accessible for everyone.
          We believe that tools should be fast, accurate, and require no unnecessary sign-ups or data sharing.
        </p>

        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
          Built by a team of passionate developers, CalcVerse combines technology and simplicity to create a
          seamless experience — ensuring every user can focus on results rather than setup.
        </p>

        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Our goal is to continuously expand CalcVerse with new, reliable calculators while maintaining
          a privacy-first, ad-free experience for our users.
        </p>
      </div>
    </section>
            </div>
            <Footer />
        </div>
    )
};

export default Our_Mission;
