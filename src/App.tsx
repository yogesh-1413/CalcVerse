import React, { useState } from 'react';
import AutoScroll from "./Components/AutoScroll"
import Home from './Home';
import Currency from './Conversions/Currencies';
import Scientific from './Conversions/Scientific';
import UnitConversions from './Conversions/Unit_conversions';
import Financial from './Conversions/Financial';
import All_Conversions from './Conversions/All_Conversions';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Regular_Calculator from './Conversions/Regular_Calculator';
import TimeConverter from './ConveterComponents/TimeConverter';




function App() {


  return (<>
  
    
    <Router>
      <AutoScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Currency" element={<Currency />} />
        <Route path = '/Scientific' element = {<Scientific />} />
        <Route path = '/UnitConvert' element = {<UnitConversions/>} />
        <Route path = '/Financial' element = {<Financial/>} />
        <Route path = '/All_Conversions' element = {<All_Conversions />} />
        <Route path = '/Regular_Calculator' element = {<Regular_Calculator />} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/All_Conversions/TimeConverter' element={<TimeConverter/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;