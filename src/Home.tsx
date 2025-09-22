import react from 'react';
import { Link } from 'lucide-react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonial from './Components/Testimonal';
import Footer from './Components/Footer';


const Home: React.FC = () => {
    return (
          <div className="min-h-screen min-w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
      {/* Testimonials */}
      <Testimonial/>

      

      {/* Footer */}
    <Footer/>
    </div>
    )
}
export default Home;