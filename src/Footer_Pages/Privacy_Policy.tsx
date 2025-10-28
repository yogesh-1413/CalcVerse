// PrivacyPolicy.tsx
import React, { useState } from "react";
import Navbar from "../Components/Navbar";  
import Footer from "../Components/Footer";

export type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

function Toc({ sections }: { sections: Section[] }) {
  return (
    <nav className="hidden md:block md:w-64 lg:w-72 sticky top-20 self-start">
      <div className="rounded-2xl p-4 bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700">
        <h4 className="text-sm font-semibold mb-3 text-slate-700 dark:text-slate-200">On this page</h4>
        <ul className="space-y-2 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block hover:underline text-slate-600 dark:text-slate-300">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function SectionBlock({ s }: { s: Section }) {
  const [open, setOpen] = useState(true);
  return (
    <section id={s.id} className="mb-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between py-2 px-3 rounded-xl bg-white dark:bg-slate-900/40 border border-gray-100 dark:border-slate-700"
      >
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{s.title}</h3>
        <span className="ml-3 text-sm text-slate-500 dark:text-slate-300">{open ? "−" : "+"}</span>
      </button>
      <div className={`mt-3 px-3 ${open ? "block" : "hidden"} text-slate-700 dark:text-slate-200 prose prose-sm dark:prose-invert`}>{s.body}</div>
    </section>
  );
}

function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-transparent shadow-sm text-sm font-medium bg-slate-900 text-white hover:opacity-95 dark:bg-slate-200 dark:text-slate-900"
    >
      Print
    </button>
  );
}

 function PrivacyPolicy() {
  const sections: Section[] = [
    { id: "overview", title: "Overview", body: <p>CalcVerse respects your privacy and does not require Gmail or sign-in. But You can Subscribe for the News Letter Regarding new Updates in the Footer.</p> },
    { id: "data", title: "Data We Collect", body: <p>We collect no personal data. Only anonymous analytics may be used to track feature usage.</p> },
    { id: "cookies", title: "Cookies & Local Storage", body: <p>Only used for remembering theme preferences; no essential cookies required.</p> },
    { id: "thirdparty", title: "Third-party Services", body: <p>External integrations (if any) follow their respective privacy policies, But for now there are No Third Party Integrations.</p> },
    { id: "children", title: "Children", body: <p>CalcVerse is not intended for children under 10 years old.</p> },
  ];

  return (
    <div className="bg-gradient-to-r min-h-screen from-slate-50/80 via-blue-50/60 to-teal-50/80 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80 transform-all duration-300 transition:ease-in-out">
        <Navbar />
    <article className="mx-auto max-w-6xl p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:flex-1">
          <header className="mb-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Last updated: Oct 28, 2025</p>
              </div>
              <PrintButton />
            </div>
          </header>

          <div className="space-y-6">
            {sections.map((s) => (
              <SectionBlock key={s.id} s={s} />
            ))}
          </div>
        </div>

        <Toc sections={sections} />
      </div>
    </article>
    <Footer />
    </div>
  );
}
export default PrivacyPolicy;