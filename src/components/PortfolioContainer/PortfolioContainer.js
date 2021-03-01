import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// Importing css used globally
import './PortfolioContainer.css';
// Importing components
import NavTabs from "../NavTab/NavTab";
import Footer from "../Footer/Footer";
// Importing pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

function PortfolioContainer() {
    return (
        <Router>
                <NavTabs/>
                <section className="container" id="sectionBody">
                <div className="row">
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/portfolio' component={Portfolio}/> 
                </div>
                </section>
                <Footer/>               
        </Router>  
    );
  
};

export default PortfolioContainer;