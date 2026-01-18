import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketAdvantage from './components/MarketAdvantage';
import CompanyScale from './components/CompanyScale';
import LocationMap from './components/LocationMap';
import ProductPortfolio from './components/ProductPortfolio';
import SocialResponsibility from './components/SocialResponsibility';
import TrustedPartners from './components/TrustedPartners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <MarketAdvantage />
        <CompanyScale />
        <LocationMap />
        <ProductPortfolio />
        <SocialResponsibility />
        <TrustedPartners />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
