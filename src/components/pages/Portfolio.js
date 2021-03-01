import React from 'react';
// Installed the slick-carousel npm package
// I wanted to modify the the slick-carousel css so instead of installing that as a package
// I have imported it into index.html as a cdn, otherwise I am restricted
import Slider from 'react-slick';
import './Portfolio.css';

const Style = {
    width: '742px'
};

// Settings for the carousel
const Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    focusOnSelect: true,
    fade: true
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

                                    <div>
                                        <a href="https://stormy-springs-60842.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="portfolioImg fa fa-plane"></i>
                                        </a>
                                        <h2 className="portfolio-text">Let's Go Travel Planner</h2>
                                        <p className="repo">Click the image to view the live page or click <a classNameName="repoLink" href="https://github.com/Mcilhaggis/lets-go-travel-planner" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    <div>
                                        <a href="https://uoft-group7-project-1.github.io/Group7_Project-1/" target="_blank" rel="noopener noreferrer">
                                            <i className="portfolioImg fa fa-ticket"></i>
                                        </a>
                                        <h2 className="portfolio-text">Project 1</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/UofT-Group7-Project-1/Group7_Project-1" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    <div>
                                    <a href="https://hustinkava.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-code"></i>
                                    </a>
                                    <h2 className="portfolio-text">Code Quiz</h2>
                                    <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Code-Quiz" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://hustinkava.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-key"></i>
                                    </a>
                                    <h2 className="portfolio-text">Password Generator</h2>
                                    <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Password-Generator" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://hustinkava.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-sun-o"></i>
                                    </a>
                                    <h2 className="portfolio-text">Weather Dashboard</h2>
                                    <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Weather-Dashboard" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://hustinkava.github.io/Work-Day-Schedule/" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-check-square-o"></i>
                                    </a>
                                    <h2 className="portfolio-text">Work Day Schedule</h2>
                                    <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Work-Day-Schedule" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://youtu.be/VeKhEJunMI0" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-book"></i>
                                    </a>
                                    <h2 className="portfolio-text">Professional README Generator</h2>
                                    <p className="repo">Click the image to view the video or click <a className="repoLink" href="https://github.com/HustinKava/Professional-Readme-Generator" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://youtu.be/mR7uePdATIk" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-users"></i>
                                    </a>
                                    <h2 className="portfolio-text">Template Engine - Employee Summary</h2>
                                    <p className="repo">Click the image to view the video or click <a className="repoLink" href="https://github.com/HustinKava/Template-Engine-Employee-Summary" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://note-taker-uoft.herokuapp.com/notes" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-sticky-note"></i>
                                    </a>
                                    <h2 className="portfolio-text">Note Taker</h2>
                                    <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Note-Taker" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://www.youtube.com/watch?v=g9tlIpv78nc&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-database"></i>
                                    </a>
                                    <h2 className="portfolio-text">Employee Tracker</h2>
                                    <p className="repo">Click the image to view the video or click <a className="repoLink" href="https://github.com/HustinKava/Employee-Tracker" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>

                                <div>
                                    <a href="https://blooming-citadel-30147.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                        <i className="portfolioImg fa fa-cutlery"></i>
                                    </a>
                                    <h2 className="portfolio-text">Eat Da Burger</h2>
                                    <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Eat-Da-Burger" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                </div>                                                                                                                                                                                                                               

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