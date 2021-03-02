import React from 'react';
// Installed the slick-carousel npm package
// I wanted to modify the the slick-carousel css so instead of installing that as a package
// I have imported it into index.html as a cdn, otherwise I am restricted
import Slider from 'react-slick';
import './Portfolio.css';
// Importing images
import TravelPlanner from './Images/TravelPlanner.PNG';
import Movie from './Images/Movie.PNG';
import CodeQuiz from './Images/CodeQuiz.PNG';
import Password from './Images/Password.PNG';
import Weather from './Images/Weather.PNG';
import WorkDay from './Images/WorkDay.PNG';
import ReadMe from './Images/ReadMe.PNG';
import EmpSummary from './Images/EmpSummary.PNG';
import NoteTaker from './Images/NoteTaker.PNG';
import EmpTracker from './Images/EmpTracker.PNG';
import Burger from './Images/Burger.PNG';

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
                                    
                                    {/* Travel Planner */}
                                    <div>
                                        <a href="https://stormy-springs-60842.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={TravelPlanner} alt="Travel Planner"/>
                                        </a>
                                        <h2 className="portfolio-text">Let's Go Travel Planner</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/Mcilhaggis/lets-go-travel-planner" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Movie Searcher */}
                                    <div>
                                        <a href="https://uoft-group7-project-1.github.io/Group7_Project-1/" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={Movie} alt="Movie Searcher"/>
                                        </a>
                                        <h2 className="portfolio-text">Movie Searcher</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/UofT-Group7-Project-1/Group7_Project-1" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Code Quiz */}
                                    <div>
                                        <a href="https://hustinkava.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={CodeQuiz} alt="Code Quiz"/>    
                                        </a>
                                        <h2 className="portfolio-text">Code Quiz</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Code-Quiz" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Password Generator */}
                                    <div>
                                        <a href="https://hustinkava.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={Password} alt="Password Generator"/>
                                        </a>
                                        <h2 className="portfolio-text">Password Generator</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Password-Generator" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Weather Dashboard */}
                                    <div>
                                        <a href="https://hustinkava.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={Weather} alt="Weather Dashboard"/>    
                                        </a>
                                        <h2 className="portfolio-text">Weather Dashboard</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Weather-Dashboard" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Work Day Scheduler */}
                                    <div>
                                        <a href="https://hustinkava.github.io/Work-Day-Schedule/" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={WorkDay} alt="Work Day Scheduler"/>
                                        </a>
                                        <h2 className="portfolio-text">Work Day Scheduler</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Work-Day-Schedule" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Readme Generator */}
                                    <div>
                                        <a href="https://youtu.be/VeKhEJunMI0" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={ReadMe} alt="Readme Generator"/>
                                        </a>
                                        <h2 className="portfolio-text">Professional README Generator</h2>
                                        <p className="repo">Click the image to view the video or click <a className="repoLink" href="https://github.com/HustinKava/Professional-Readme-Generator" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Employee Summary */}
                                    <div>
                                        <a href="https://youtu.be/mR7uePdATIk" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={EmpSummary} alt="Employee Summary"/>
                                        </a>
                                        <h2 className="portfolio-text">Template Engine - Employee Summary</h2>
                                        <p className="repo">Click the image to view the video or click <a className="repoLink" href="https://github.com/HustinKava/Template-Engine-Employee-Summary" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Note Taker */}
                                    <div>
                                        <a href="https://note-taker-uoft.herokuapp.com/notes" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={NoteTaker} alt="Note Taker"/>
                                        </a>
                                        <h2 className="portfolio-text">Note Taker</h2>
                                        <p className="repo">Click the image to view the live page or click <a className="repoLink" href="https://github.com/HustinKava/Note-Taker" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Employee Tracker */}
                                    <div>
                                        <a href="https://www.youtube.com/watch?v=g9tlIpv78nc&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={EmpTracker} alt="Employee Tracker"/>    
                                        </a>
                                        <h2 className="portfolio-text">Employee Tracker</h2>
                                        <p className="repo">Click the image to view the video or click <a className="repoLink" href="https://github.com/HustinKava/Employee-Tracker" target="_blank" rel="noopener noreferrer"><b>Here</b></a> to visit the repository</p>
                                    </div>

                                    {/* Eat Da Burger */}
                                    <div>
                                        <a href="https://blooming-citadel-30147.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <img className="portfolioImg" src={Burger} alt="Eat Da Burger"/>
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