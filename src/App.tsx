import React, { useState } from 'react';
import AutoScroll from "./Components/AutoScroll"
import Home from './Home';
import Currency from './Conversions/Currencies';
import Health_Calculators from './Conversions/Health_Calculators';
import UnitConversions from './Conversions/Unit_conversions';
import Financial from './Conversions/Financial';
import All_Conversions from './Conversions/All_Conversions';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Regular_Calculator from './Conversions/Regular_Calculator';
import TimeConverter from './ConveterComponents/TimeConverter';
import Length_And_Distance_Converter from './ConveterComponents/Length&Distance';



function App() {


  return (<>
  
    
    <Router>
      <AutoScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Currency" element={<Currency />} />
        <Route path = '/Health_Calculators' element = {<Health_Calculators />} />
        <Route path = '/UnitConvert' element = {<UnitConversions/>} />
        <Route path = '/Financial' element = {<Financial/>} />
        <Route path = '/All_Conversions' element = {<All_Conversions />} />
        <Route path = '/Regular_Calculator' element = {<Regular_Calculator />} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/All_Conversions/TimeConverter' element={<TimeConverter/>} />
        <Route path = '/All_Conversions/Length_and_Distance_Converter' element={<Length_And_Distance_Converter/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;