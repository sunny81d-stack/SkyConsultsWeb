import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import InteriorsPage from './InteriorsPage';
import RealEstatePageContent from './RealEstatePageContent';

const AppTabStructure = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Router>
            <div className="tab-navigation">
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => handleTabChange('Home')}>Home</Link>
                        </li>
                        <li>
                            <Link to="/interiors" onClick={() => handleTabChange('Interiors')}>Interiors</Link>
                        </li>
                        <li>
                            <Link to="/real-estate" onClick={() => handleTabChange('RealEstate')}>Real Estate</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/interiors" component={InteriorsPage} />
                    <Route path="/real-estate" component={RealEstatePageContent} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppTabStructure;