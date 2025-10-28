import { useState } from 'react';
import './BMI.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

 const BMICalculator = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      return;
    }

    let bmi: number;

    if (unit === 'metric') {
      bmi = w / ((h / 100) * (h / 100));
    } else {
      bmi = (w / (h * h)) * 703;
    }

    let category = '';
    let color = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = '#3b82f6';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
      color = '#10b981';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = '#f59e0b';
    } else {
      category = 'Obese';
      color = '#ef4444';
    }

    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, color });
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <div>
    <Navbar />
    <div className="calculator-container">
      <div className="calculator-card">
        <div className="calculator-header">
          <h1 className="calculator-title">BMI Calculator</h1>
          <p className="calculator-subtitle">
            Calculate your Body Mass Index to assess your weight status
          </p>
        </div>

        <div className="unit-toggle">
          <button
            className={`unit-btn ${unit === 'metric' ? 'active' : ''}`}
            onClick={() => setUnit('metric')}
          >
            Metric
          </button>
          <button
            className={`unit-btn ${unit === 'imperial' ? 'active' : ''}`}
            onClick={() => setUnit('imperial')}
          >
            Imperial
          </button>
        </div>

        <div className="input-grid">
          <div className="input-group">
            <label className="input-label">
              Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
            </label>
            <input
              type="number"
              className="input-field"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              Height {unit === 'metric' ? '(cm)' : '(inches)'}
            </label>
            <input
              type="number"
              className="input-field"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g., 170' : 'e.g., 67'}
            />
          </div>
        </div>

        <div className="button-group">
          <button className="calculate-btn" onClick={calculateBMI}>
            Calculate BMI
          </button>
          <button className="reset-btn" onClick={resetCalculator}>
            Reset
          </button>
        </div>

        {result && (
          <div className="result-card" style={{ borderColor: result.color }}>
            <div className="result-bmi" style={{ color: result.color }}>
              {result.bmi}
            </div>
            <div className="result-category" style={{ color: result.color }}>
              {result.category}
            </div>
            <div className="bmi-scale">
              <div className="scale-item">
                <div className="scale-color" style={{ backgroundColor: '#3b82f6' }}></div>
                <span className="scale-label">Underweight (&lt;18.5)</span>
              </div>
              <div className="scale-item">
                <div className="scale-color" style={{ backgroundColor: '#10b981' }}></div>
                <span className="scale-label">Normal (18.5-24.9)</span>
              </div>
              <div className="scale-item">
                <div className="scale-color" style={{ backgroundColor: '#f59e0b' }}></div>
                <span className="scale-label">Overweight (25-29.9)</span>
              </div>
              <div className="scale-item">
                <div className="scale-color" style={{ backgroundColor: '#ef4444' }}></div>
                <span className="scale-label">Obese (≥30)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
};
export default BMICalculator;
