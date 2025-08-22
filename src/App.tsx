import React, { useState } from 'react';
import Home from './Home';
import Currency from './Conversions/Currencies';
import Scientific from './Conversions/Scientific';
import UnitConversions from './Conversions/Unit_conversions';
import Financial from './Conversions/Financial';
import All_Conversions from './Conversions/All_Conversions';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
 



function App() {


  return (<>
  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Currency" element={<Currency />} />
        <Route path = '/Scientific' element = {<Scientific />} />
        <Route path = '/UnitConvert' element = {<UnitConversions/>} />
        <Route path = '/Financial' element = {<Financial/>} />
        <Route path = '/All_Conversions' element = {<All_Conversions />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;