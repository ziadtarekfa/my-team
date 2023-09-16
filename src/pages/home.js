import React from "react";

import '../vars.css';

import bg1Home from '../assets/backgrounds/bg-pattern-home-1.svg'
import bg2Home from '../assets/backgrounds/bg-pattern-home-2.svg';
import bg3Home from '../assets/backgrounds/bg-pattern-home-3.svg';
import bg4Home from '../assets/backgrounds/bg-pattern-home-4-about-3.svg';
import bg5Home from '../assets/backgrounds/bg-pattern-home-5.svg';


import person_ic from '../assets/icons/icon-person.svg';
import settings_ic from '../assets/icons/icon-cog.svg';
import chart_ic from '../assets/icons/icon-chart.svg';


import kady_av from '../assets/avatars/avatar-kady.jpg';
import ayisha_av from '../assets/avatars/avatar-aiysha.jpg';
import arthur_av from '../assets/avatars/avatar-arthur.jpg';



import './home.css';

import ReadyToStart from '../components/ReadyToStart';
import Line from "../components/Line";
function HomePage() {
    return (
        <React.Fragment>

            <div className='Home1'>
                <div>
                    <img className='bg1Home' src={bg1Home} alt="bg1Home" />
                    <h1>Find the best <span>talent</span></h1>
                </div>
                <div>
                    <Line color={"#79C8C7"} />
                    <p>
                        Finding the right people and building high performing teams can be hard.
                        Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                    </p>

                </div>


            </div>
            <img className="bg2Home" src={bg2Home} alt="bg2Home" />


            {/*                 Home2                    */}
            <div className='Home2'>

                <div>
                    <Line color={"#F67E7E"} />
                    <h1>
                        Build & manage distributed teams like no one else.
                    </h1>

                </div>
                <div className='icons-container'>

                    <img src={person_ic} alt="person_ic" />
                    <img src={settings_ic} alt="settings_ic" />
                    <img src={chart_ic} alt="chart_ic" />
                </div>
                <div>
                    <div>
                        <h3>Experienced Individuals</h3>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                    <div>
                        <h3>Easy to Implement</h3>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </div>
                    <div>
                        <h3>Enhanced Productivity</h3>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </div>
                </div>
                <div className='bg3Home'>
                    <img src={bg3Home} alt="bg3Home" />
                </div>
            </div>

            {/*             HomeStories              */}
            <div className='HomeStories'>
                <div>
                    <img src={bg4Home} alt="bg4Home" />
                </div>
                <h1>
                    Delivering real results for top<br />
                    companies. Some of our <span>success <br /> stories.</span>
                </h1>
                <div className="container">

                    <div>
                        <p>"The team perfectly fit the specialized skill set required. They focused on the most essential features
                            helping us launch the platform eight months faster than planned."</p>
                        <h3>Kady Baker</h3>
                        <em>Product Manager at Bookmark</em>
                        <div>
                            <img src={kady_av} alt="kady_av" />
                        </div>

                    </div>
                    <div>
                        <p>"We needed to automate our entire onboarding process. The team came in and built out
                            the whole journey. Since going live, user retention has gone through the roof!"</p>
                        <h3>Aiysha Reese</h3>
                        <em>Founder of Manage</em>
                        <div>
                            <img src={ayisha_av} alt="ayisha_av" />
                        </div>

                    </div>
                    <div>
                        <p>"Amazing. Our team helped us build an app that delivered
                            a new experience for hiring a physio. The launch was an instant success with 100k
                            downloads
                            in the first month."</p>
                        <h3>Arthur Clarke</h3>
                        <em>Co-founder of MyPhysio</em>
                        <div>
                            <img src={arthur_av} alt="arthur_av" />
                        </div>

                    </div>
                </div>
                <div >
                    <img src={bg5Home} alt="bg5Home" />
                </div>
            </div>
            {/* Ready To Start */}
            <ReadyToStart />
        </React.Fragment>
    );
}

export default HomePage;