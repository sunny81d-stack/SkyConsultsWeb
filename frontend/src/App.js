import React, { useState } from 'react';
// Added the Router import from react-router-dom
import { BrowserRouter as Router } from 'react-router-dom'; 

import './styles/theme.css';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InflationCalculator from './components/InflationCalculator';
import Features from './components/Features';
import ShowcaseProjects from './components/ShowcaseProjects';
import InteriorCalculator from './components/InteriorCalculator';
import VastuCompliance from './components/VastuCompliance';
import SpacePlanning from './components/SpacePlanning';
import CustomDesignSteps from './components/CustomDesignSteps';
import ProjectShowroom from './components/ProjectShowroom';
import ProjectStatus from './components/ProjectStatus';
import RealEstatePage from './components/RealEstatePage';
import ContactForm from './components/ContactForm';
import RERADisclaimer from './components/RERADisclaimer';
import Footer from './components/Footer';
import ContactSidebar from './components/ContactSidebar';
import AccessCodeModal from './components/AccessCodeModal';

function App() {
  const [showAccessModal, setShowAccessModal] = useState(false);

  return (
    <Router>
      <div className="App">
        <ContactSidebar />
        <Header onAccessClick={() => setShowAccessModal(true)} />
        <HeroSection />
        <InflationCalculator />
        <Features />
        <ShowcaseProjects />
        <InteriorCalculator />
        <VastuCompliance />
        <SpacePlanning />
        <CustomDesignSteps />
        <ProjectShowroom />
        <ProjectStatus />
        <RealEstatePage />
        <ContactForm />
        <RERADisclaimer />
        <Footer />
        <AccessCodeModal isOpen={showAccessModal} onClose={() => setShowAccessModal(false)} />
      </div>
    </Router>
  );
}

export default App;