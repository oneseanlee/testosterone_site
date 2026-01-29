import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CriticalInfoSection from './components/CriticalInfoSection';
import AlternativeSection from './components/AlternativeSection';
import ClinicalResultsSection from './components/ClinicalResultsSection';
import ComparisonTable from './components/ComparisonTable';
import HowItWorksSection from './components/HowItWorksSection';
import ProductBreakdownSection from './components/ProductBreakdownSection';
import OrderSection from './components/OrderSection';
import DoctorTestimonialsSection from './components/DoctorTestimonialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <CriticalInfoSection />
      <AlternativeSection />
      <ClinicalResultsSection />
      <ComparisonTable />
      <HowItWorksSection />
      <ProductBreakdownSection />
      <OrderSection />
      <DoctorTestimonialsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
