import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Linkedin, Github } from "lucide-react";

function AboutUs() {
    const team = [
        {
            name: "Yogesh",
            role: "Developer",
            linkedin: "https://www.linkedin.com/in/yogeshwarao",
            github: "https://github.com/yogesh-1413",
        },
        {
            name: "Akshith",
            role: "Developer",
            linkedin: "https://www.linkedin.com/in/sai-akshith-reddy-bb2011285/",
            github: "https://github.com/Akshith080",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-slate-50/60 via-blue-50/80 to-indigo-50/60 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transition-all duration-300 ease-in-out">
                <section className="  py-12 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
                        <p className="text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                            CalcVerse is an all-in-one calculator platform built with the vision of simplifying everyday
                            calculations — from academics to professional needs — without requiring any login or data collection.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mt-10">
                            {team.map((member) => (
                                <div
                                    key={member.name}
                                    className="rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-slate-700 p-6 text-center"
                                >
                                    <h2 className="text-2xl font-semibold mb-1 dark:text-white">{member.name}</h2>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{member.role}</p>
                                    <div className="flex justify-center gap-5">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                                        >
                                            <Linkedin className="w-5 h-5  dark:text-gray-200/50" />
                                        </a>
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                                        >
                                            <Github className="w-5 h-5 dark:text-gray-200/50" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
};

export default AboutUs;
