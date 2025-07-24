import React, { useState } from 'react';
// import { ArrowRightLeft, TrendingUp, Shield, Zap, Globe, Star, Users, Award } from 'lucide-react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonial from './Components/Testimonal';
import Footer from './Components/Footer';


function App() {
  const [fromAmount, setFromAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY'];

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
      {/* Testimonials */}
      <Testimonial/>

      

      {/* Footer */}
    <Footer/>
    </div>
  );
}

export default App;