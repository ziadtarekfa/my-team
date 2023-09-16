
import './styles/Card.css';

function Card({ image, altText, name, title }) {
    return (
        <div className="Card">

            <img src={image} alt={altText} />
            <h3>{name}</h3>
            <em>{title}</em>
            <button>+</button>

        </div>
    );
}

export default Card;