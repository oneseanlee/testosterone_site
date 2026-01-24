
import Navbar from './components/Navbar';
import BreadcrumbSection from './components/BreadcrumbSection';
import Hero from './components/Hero';
import MarketingBanner from './components/MarketingBanner';
import GraphSection from './components/GraphSection';
import StatsSection from './components/StatsSection';
import UsageSection from './components/UsageSection';
import ComparisonTable from './components/ComparisonTable';
import BenefitsSection from './components/BenefitsSection';
import BuildingBlocksSection from './components/BuildingBlocksSection';
import HowItWorksSection from './components/HowItWorksSection';
import TelehealthSection from './components/TelehealthSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <BreadcrumbSection />
      <Hero />
      <MarketingBanner />
      <GraphSection />
      <StatsSection />
      <UsageSection />
      <ComparisonTable />
      <BenefitsSection />
      <BuildingBlocksSection />
      <HowItWorksSection />
      <FAQSection />
      <TelehealthSection />
      <Footer />
    </div>
  );
}

export default App;
