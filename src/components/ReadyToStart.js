import './styles/ReadyToStart.css';
import img1 from '../assets/backgrounds/bg-pattern-home-6-about-5.svg'
import '../vars.css';
import { useNavigate } from 'react-router-dom'


function ReadyToStart() {

    let navigate = useNavigate();

    function setContactButton() {
        navigate("/contact");
    }
    return (

        <div className='ReadyToStart'>
            <img src={img1} alt="background pattern" />
            <h1>  Ready to get started? </h1>
            <button onClick={setContactButton}>
                contact us
            </button>
        </div>
    );
}

export default ReadyToStart;