import React from 'react';
// Installed the slick-carousel npm package
// I wanted to modify the the slick-carousel css so instead of installing that as a package
// I have imported it into index.html as a cdn, otherwise I am restricted
import Slider from 'react-slick';
import './Portfolio.css';
// Importing my json file
import PortfolioData from '../pages/PortfolioData/PortfolioData.json';

const Style = {
    width: '1500px'
};

// Settings for the carousel
const Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    focusOnSelect: true,
}

function Portfolio() {
    return(
        // Section tag that houses the portfolio content
        <section className="container" id="sectionBody">
        <div className="row">
        <div className="card" style={Style}>
        <div className="card-body">

        <h1>Portfolio</h1>

        <div className="row">
        <div className="col-md-12" id="indexBodyContent">
            
        {/* Here I am implementing the carousel and the the settings object variable */}
        <Slider {...Settings}>
        {/* Mapping through the .json file to dynamically render the results */}
        {PortfolioData.map(data => (
        <div>
        <a href={data.webHref} target='_blank' rel='noopener noreferrer'>
            <img className='portfolioImg' src={data.src} alt={data.text}/>
        </a>
        <h2 className='portfolio-text'>{data.text}</h2>
        <p className='repo'>{data.repoText} <a className='repoLink' href={data.repoLink}target='_blank' rel='noopener noreferrer'><b>Here</b></a> to visit the repository</p>
        </div>
        ))}

        </Slider>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    
    )
};

export default Portfolio;