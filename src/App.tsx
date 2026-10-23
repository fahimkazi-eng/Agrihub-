import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { OurSystemPage } from './pages/OurSystemPage';
import { OperationsIndexPage } from './pages/OperationsIndexPage';
import { BroilerProductionPage } from './pages/BroilerProductionPage';
import { AquaculturePage } from './pages/AquaculturePage';
import { ResourceRecoveryPage } from './pages/ResourceRecoveryPage';
import { InsectBioconversionPage } from './pages/InsectBioconversionPage';
import { NurseryCropsPage } from './pages/NurseryCropsPage';
import { MushroomsPage } from './pages/MushroomsPage';
import { FutureEnergyPage } from './pages/FutureEnergyPage';
import { CircularAgriculturePage } from './pages/CircularAgriculturePage';
import { FarmOSPage } from './pages/FarmOSPage';
import { ProductsPage } from './pages/ProductsPage';
import { MediaPage } from './pages/MediaPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { PeoplePage } from './pages/PeoplePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F5F1E7] text-[#141917] font-sans selection:bg-[#B5F45B] selection:text-[#102820]">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-system" element={<OurSystemPage />} />
            
            {/* Operations */}
            <Route path="/operations" element={<OperationsIndexPage />} />
            <Route path="/operations/broiler-production" element={<BroilerProductionPage />} />
            <Route path="/operations/aquaculture" element={<AquaculturePage />} />
            <Route path="/operations/resource-recovery" element={<ResourceRecoveryPage />} />
            <Route path="/operations/insect-bioconversion" element={<InsectBioconversionPage />} />
            <Route path="/operations/nursery-crops" element={<NurseryCropsPage />} />
            <Route path="/operations/mushrooms" element={<MushroomsPage />} />
            <Route path="/operations/future-energy" element={<FutureEnergyPage />} />

            {/* Circular & Technology */}
            <Route path="/circular-agriculture" element={<CircularAgriculturePage />} />
            <Route path="/technology/farmos" element={<FarmOSPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/media" element={<MediaPage />} />

            {/* Knowledge & Articles */}
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/knowledge/:slug" element={<ArticleDetailPage />} />

            {/* Hub Details */}
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
