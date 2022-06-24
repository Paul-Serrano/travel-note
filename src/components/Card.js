import cardPin from "../../public/img/card-pin.png"

function Card(props) {
    return(
        <div className="card-container">
            <div className="card-img-container">
                <img className="card-img" src={props.item.img} alt=""/>
            </div>
            <div className="card-content">
                <div className="card-info">
                    <div className="card-info-detail">
                        <img className="card-icon" src={cardPin} alt=""/>
                        <p className="card-location">{props.item.location}</p>
                        <a className="card-link" href={props.item.link} target="_blank"><p>View on google maps</p></a>
                    </div>
                    <div className="card-name"><h1>{props.item.name}</h1></div>
                </div>
                <div className="card-description-content">
                    <div className="card-date"><strong>{props.item.date}</strong></div>
                    <div className="card-description"><p>{props.item.description}</p></div>
                </div>
            </div>
        </div>
    )
}

export default Card;
