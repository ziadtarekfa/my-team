import './styles/Header.css';
import '../vars.css';
import { useNavigate, Link } from 'react-router-dom'

function Header() {

    let navigate = useNavigate();

    function setContactButton() {
        navigate("/contact");
    }
    return (
        <div className='header'>

            <h1 className="heading">myteam</h1>
            <nav>

                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <div className='contact-container'>
                    <button onClick={setContactButton} >contact us</button>
                </div>

            </nav>

        </div>
    );
}

export default Header;