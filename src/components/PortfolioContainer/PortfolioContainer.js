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

// I had to create an inline style as my changes to PortfolioContainer.css for .card were not working
const cardHomeContact = {
    width: '700px'
};

const cardPortfolio = {
    width: '742px'
};

function PortfolioContainer() {
    return (
        <Router>
                <NavTabs/>
                <section className="container" id="sectionBody">
                <div className="row">
                {<Route exact path='/' component={Home}/> ? 
                    <div className="card" style={cardHomeContact}>
                        <div className="card-body">
                            <Route exact path='/' component={Home}/>
                        </div>
                    </div>
                    :
                    <div className="card" style={cardPortfolio}>
                    <div className="card-body">
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/portfolio' component={Portfolio}/>
                    </div>
                </div>}   
                </div>
                </section>
                <Footer/>               
        </Router>  
    );
  
};

export default PortfolioContainer;