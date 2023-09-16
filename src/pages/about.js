
import './about.css';
import '../vars.css';
import bg1About from '../assets/backgrounds/bg-pattern-about-1-mobile-nav-1.svg';
import bg2About from '../assets/backgrounds/bg-pattern-about-2-contact-1.svg';
import bg3About from '../assets/backgrounds/bg-pattern-home-4-about-3.svg';
import bg4About from '../assets/backgrounds/bg-pattern-about-4.svg';

import theVerge from '../assets/logos/logo-the-verge.png';
import theJakartaPost from '../assets/logos/logo-jakarta-post.png';
import theGuardian from '../assets/logos/logo-the-guardian.png';
import techRadar from '../assets/logos/logo-tech-radar.png';
import gadgetsNow from '../assets/logos/logo-gadgets-now.png';
import ReadyToStart from "../components/ReadyToStart";


import nikita_av from '../assets/avatars/avatar-nikita.jpg';
import cristian_av from '../assets/avatars/avatar-christian.jpg';
import cruz_av from '../assets/avatars/avatar-cruz.jpg';
import drake_av from '../assets/avatars/avatar-drake.jpg';
import griffin_av from '../assets/avatars/avatar-griffin.jpg';
import aden_av from '../assets/avatars/avatar-aden.jpg';
import Line from '../components/Line';
import Card from '../components/Card';

function AboutPage() {

    return (
        <div className='AboutPage'>
            <div className="first-section">
                <h1>About</h1>
                <div>
                    <Line color="#F67E7E" />
                    <p>
                        We help companies build dynamic teams made up of top global talent. Using our network of
                        passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams
                        shape the best products and experiences. We’ll bring those teams to you.
                    </p>
                </div>
                <img src={bg1About} alt="bg1About" />

            </div>

            <div className='directors-section'>
                <img src={bg2About} alt="bg2About" />
                <h1>Meet the directors</h1>
                <div className='grid'>

                    <Card image={nikita_av} altText="nikita_av" name="Nikita Marks" title="Founder & CEO" />
                    <Card image={cristian_av} altText="cristian_av" name="Cristian Duncan" title="Co-founder & COO" />
                    <Card image={cruz_av} altText="cruz_av" name="Cruz Hamer" title="Co-founder & CTO" />
                    <Card image={drake_av} altText="drake_av" name="Drake Heaton" title="Business Development Lead" />
                    <Card image={griffin_av} altText="griffin_av" name="Griffin Wise" title="Lead Marketing" />
                    <Card image={aden_av} altText="aden_av" name="Aden Allan" title="Head of Talent" />
                </div>
                <div>
                    <img src={bg3About} alt='bg3About' />
                </div>
            </div>

            <div className="clients-section">
                <img src={bg4About} alt="bg2About" />
                <h2>Some of our clients</h2>
                <div className="brands">
                    <img src={theVerge} alt="The Verge" />
                    <img src={theJakartaPost} alt="The Jakarta Post" />
                    <img src={theGuardian} alt="The Guardian" />
                    <img src={techRadar} alt="Tech Radar" />
                    <img src={gadgetsNow} alt="Gadgets Now" />
                </div>

            </div>


            <ReadyToStart />
        </div>
    );
}

export default AboutPage;