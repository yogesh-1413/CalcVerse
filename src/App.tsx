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
import About_Us from "./Footer_Pages/About_Us";
import Our_Mission from './Footer_Pages/Our_Mission';

//Financial Calculators Imports
import SIPCalculator from "./ConveterComponents/Financial_Calculator_Components/SIP_Calculator";
import SWPCalulator from './ConveterComponents/Financial_Calculator_Components/SWP_Calculator';
import CAGR_Calculator from './ConveterComponents/Financial_Calculator_Components/CAGR_Calculator';
import SimpleInterestCalculator from './ConveterComponents/Financial_Calculator_Components/Simple-Interest-Calculator';
import EMICalculator from './ConveterComponents/Financial_Calculator_Components/EMI_Calculator';
import HowLongToSave from './ConveterComponents/Financial_Calculator_Components/How-Long-To-Save';
import MoneyLastCalculator from './ConveterComponents/Financial_Calculator_Components/Money-Last-Calculator';
import LoanPayoffCalculator from './ConveterComponents/Financial_Calculator_Components/Loan-Pay-Off-Calculator';
import CompoundInterestCalculator from './ConveterComponents/Financial_Calculator_Components/Compound-Interest-Calculator';
import XIRRCalculator from './ConveterComponents/Financial_Calculator_Components/XIRR-Calculator';


//Unit Conversion Imports
import AccelerationConverter from './ConveterComponents/Unit_Conversion_Components/Accelration_Converter';
import DataStorageConverter from './ConveterComponents/Unit_Conversion_Components/Data_Storage_Converter';
import FuelConsumption from './ConveterComponents/Unit_Conversion_Components/Fuel_Consuption';
import AreaConverter from './ConveterComponents/Unit_Conversion_Components/Area_Converter';
import MassAndWeight from './ConveterComponents/Unit_Conversion_Components/Mass_and_Weight';
import PressureConverter from './ConveterComponents/Unit_Conversion_Components/Pressure_Converter';
import TempratureConverter from './ConveterComponents/Unit_Conversion_Components/Temprature_Converter';
import SpeedConverter from './ConveterComponents/Unit_Conversion_Components/Speed_Converter';
import ForceConverter from './ConveterComponents/Unit_Conversion_Components/Force_Converter';
import Length_And_Distance_Converter from './ConveterComponents/Unit_Conversion_Components/Length_and_Distance_Converter';
import TimeConverter from './ConveterComponents/Unit_Conversion_Components/Time-Converter';


function App() {


  return (<>


    <Router>
      <AutoScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/About Us' element={<About_Us />} />
        <Route path='/Our Mission' element={<Our_Mission />} />
        <Route path='/All-Calculators' element={<All_Conversions />} />

        //Calculator Home Pages Routes
        <Route path="/All-calculators/Currency-Converter" element={<Currency />} />
        <Route path='/All-calculators/Health-Calculators' element={<Health_Calculators />} />
        <Route path='/All-calculators/Unit-Conversions' element={<UnitConversions />} />
        <Route path='/All-calculators/Financial-Calculators' element={<Financial />} />
        <Route path='/All-calculators/Regular-Calculator' element={<Regular_Calculator />} />

        // Unit Conversion Routes
        <Route path='/All-calculators/Unit-Conversions/Time-Converter' element={<TimeConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Length-Distance-Converter' element={<Length_And_Distance_Converter />} />
        <Route path='/All-calculators/Unit-Conversions/Acceleration-Converter' element={<AccelerationConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Mass-and-Weight-Converter' element={<MassAndWeight />} />
        <Route path='/All-calculators/Unit-Conversions/Fuel-Consumption-Converter' element={<FuelConsumption />} />
        <Route path='/All-calculators/Unit-Conversions/Area-Converter' element={<AreaConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Pressure-Converter' element={<PressureConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Temperature-Converter' element={<TempratureConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Speed-Converter' element={<SpeedConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Data-Storage-Converter' element={<DataStorageConverter />} />
        <Route path='/All-calculators/Unit-Conversions/Force-Converter' element={<ForceConverter />} />
        
        


        // Financial Calculators Routes
        <Route path='/All-calculators/Financial-Calculators/SIP-Calculator' element={<SIPCalculator />} />
        <Route path='/All-calculators/Financial-Calculators/SWP-Calculator' element={<SWPCalulator />} />
        <Route path='/All-calculators/Financial-Calculators/CAGR-Calculator' element={<CAGR_Calculator />} />
        <Route path='/All-calculators/Financial-Calculators/Simple-Interest-Calculator' element={<SimpleInterestCalculator />} />
        <Route path='/All-calculators/Financial-Calculators/EMI-Calculator' element={<EMICalculator />} />
        <Route path='/All-calculators/Financial-Calculators/How-Long-To-Save' element={<HowLongToSave />} />
        <Route path='/All-calculators/Financial-Calculators/Money-Last-Calculator' element={<MoneyLastCalculator />} />
        <Route path='/All-calculators/Financial-Calculators/Loan-Pay-Off-Calculator' element={<LoanPayoffCalculator />} />
        <Route path='/All-calculators/Financial-Calculators/Compound-Interest-Calculator' element={<CompoundInterestCalculator />} />
        <Route path='/All-calculators/Financial-Calculators/XIRR-Calculator' element={<XIRRCalculator />} />


        //Health Calculators Routes

      </Routes>
    </Router>
  </>
  );
}

export default App;