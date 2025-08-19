import React, { useState } from 'react';
import Home from './Home';
import Currency from './Conversions/Currencies';
import Scientific from './Conversions/Scientific';
import UnitConversions from './Conversions/Unit_conversions';
import Financial from './Conversions/Financial';
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
      </Routes>
    </Router>
    </>
  );
}

export default App;