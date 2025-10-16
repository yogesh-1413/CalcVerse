import React, { useState } from 'react';
import AutoScroll from "./Components/AutoScroll"
import Home from './Home';
import Currency from './Conversions/Currencies';
import Health_Calculators from './Conversions/Health_Calculators';
import UnitConversions from './Conversions/Unit_conversions';
import Financial from './Conversions/Financial';
import All_Conversions from './Conversions/All_Conversions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Regular_Calculator from './Conversions/Regular_Calculator';
import TimeConverter from './ConveterComponents/TimeConverter';
import Length_And_Distance_Converter from './ConveterComponents/Length&Distance';
import About_Us from "./Footer_Pages/About_Us";
import Our_Mission from './Footer_Pages/Our_Mission';
import SIPCalculator from "./ConveterComponents/Financial_Calculator_Components/SIP_Calculator";
import SWPCalulator from './ConveterComponents/Financial_Calculator_Components/SWP_Calculator';
import CAGR_Calculator from './ConveterComponents/Financial_Calculator_Components/CAGR_Calculator';



function App() {


  return (<>


    <Router>
      <AutoScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All-calculators/Currency-Calculators" element={<Currency />} />
        <Route path='/All-calculators/Health-Calculators' element={<Health_Calculators />} />
        <Route path='/All-calculators/Unit-Conversions' element={<UnitConversions />} />
        <Route path='/All-calculators/Financial-Calculators' element={<Financial />} />
        <Route path='/All-Calculators' element={<All_Conversions />} />
        <Route path='/All-calculators/Regular-Calculator' element={<Regular_Calculator />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/All-calculators/Unit-Conversions/TimeConverter' element={<TimeConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Length_and_Distance_Converter' element={<Length_And_Distance_Converter />} />
        <Route path='/About Us' element={<About_Us />} />
        <Route path='/Our Mission' element={<Our_Mission />} />
        <Route path='/All-calculators/Financial-Calculators/SIP-Calculator' element={<SIPCalculator />} />
        <Route path='/All-calculators/Financial-Calculators/SWP-Calculator' element={<SWPCalulator />} />
        <Route path='/All-calculators/Financial-Calculators/CAGR-Calculator' element={<CAGR_Calculator />} />

      </Routes>
    </Router>
  </>
  );
}

export default App;