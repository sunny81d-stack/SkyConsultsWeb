import React from 'react';
import './theme.css';
import ContactSidebar from './ContactSidebar';
import AccessCodeModal from './AccessCodeModal';
import InflationCalculator from './InflationCalculator';
import RERADisclaimer from './RERADisclaimer';
import ShowcaseProjects from './ShowcaseProjects';
import RealEstatePage from './RealEstatePage';
import InteriorCalculator from './InteriorCalculator';
import VastuCompliance from './VastuCompliance';
import SpacePlanning from './SpacePlanning';
import CustomDesignSteps from './CustomDesignSteps';
import ProjectShowroom from './ProjectShowroom';
import ProjectStatus from './ProjectStatus';

const App = () => {
  return (
    <div>
      <ContactSidebar />
      <AccessCodeModal />
      <InflationCalculator />
      <RERADisclaimer />
      <ShowcaseProjects />
      <RealEstatePage />
      <InteriorCalculator />
      <VastuCompliance />
      <SpacePlanning />
      <CustomDesignSteps />
      <ProjectShowroom />
      <ProjectStatus />
    </div>
  );
};

export default App;