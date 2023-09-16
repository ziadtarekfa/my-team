import './contact.css';
import img1 from '../assets/backgrounds/bg-pattern-about-2-contact-1.svg';
import img2 from '../assets/backgrounds/bg-pattern-contact-2.svg';

import person from '../assets/icons/icon-person.svg';
import settings from '../assets/icons/icon-cog.svg';
import chart from '../assets/icons/icon-chart.svg';

import '../vars.css';


function ContactPage() {
    return (
        <div className="ContactPage">
            <div className='image1-container'>
                <img src={img1} />
            </div>
            <div>
                <h1>Contact</h1>
                <h2>Ask us about</h2>
                <div className='left-side'>

                    <div>
                        <img src={person} />
                        <p>The quality of our talent network</p>
                    </div>
                    <div>
                        <img src={settings} />
                        <p>Usage & implementation of our software</p>
                    </div>
                    <div>
                        <img src={chart} />
                        <p>How we help drive innovation</p>
                    </div>
                </div>
            </div>
            <form className='inputs'>

                <input required placeholder='Name' />
                <input required placeholder='Email' />
                <input required placeholder='Company Name' />
                <input required placeholder='Title' />
                <textarea placeholder='Message'></textarea>
                <button id='submit'>submit</button>


            </form>
            <div className='last-image'>
                <img src={img2} />
            </div>

        </div>
    );
}

export default ContactPage;