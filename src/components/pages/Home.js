import React from 'react';
import Image from './Images/ProfilePic.jpg';
import Resume from './Resume/Resume.pdf';
import './Home.css';

const Style = {
    width: '700px'
};

function Home() {
    return(

        <div className="card" style={Style}>
        <div className="card-body">
          <h1>About Me</h1>  
          <div className="row">
          <article className="col-md-12" id="indexBodyContent">
          
            <img className="float-left" id="profilePicture" src={Image} alt="Hustin Kava" height="200" width="200"/>
          
            <p>
                Originally born and raised in London, England, Hustin Kava moved to Alberta, Canada at the age of thirteen. Having dual citizenship has granted him the flexibility of travelling back and forth and living the best of both worlds.
            </p>
          
            <p>
                He is currently pursuing a career as a Full Stack Developer and has found the program that he is enrolled in to be quite stimulating thus far. He enjoys challenges and being pushed beyond his limits. He believes that this program
                has given him a new purpose and is driving him to better himself. He is really enjoying his classes along with the assignments. He is grateful that his instructors and classmates provide great support and want to see him
                succeed.
            </p>
            
            <p>
                Hustin is excited to see where this new adventure takes hims and is looking forward to sharpening his skills set. The creative aspect of designing websites fascinates him and he is eager to learn how to implement JavaScript.
            </p>

            <div className="informationBox">
                <p>Click <a className="repoLink" href={Resume} target="_blank" rel="noopener noreferrer"><b>Here</b></a> to view Hustin's resume</p>

                <p>Please feel free to reach out to Hustin via <b>email</b> or <b>phone</b>:</p>


                <p><i className='fa fa-envelope-o' aria-hidden='true'></i><b>HKavaFSD@gmail.com<br></br><i className='fa fa-mobile' aria-hidden='true'></i> 403-012-3456</b></p>
            </div>

          </article>
          </div>
        </div>
        </div>
    )
};

export default Home;