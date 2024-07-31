
import './card.css'
function Card(prop) {
    return (  
        <div className="card">
            <img src={prop?.data?.img} alt="rasm" />
            <h3>{prop?.data?.name}</h3>
            <h4>Coins: {prop?.data?.coins}</h4>

            <p>{prop?.data?.miqdor } Dona Mavjug</p>
        </div>
    );
}

export default Card;