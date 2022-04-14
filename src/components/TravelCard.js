import React from "react";

export default function TravelCard(props) {
    return (
        <div className="main-card">
            <div className="travelCard">
                <img className="travelCard--image" src={`images/${props.image}`}/>
                <div className="travelCard--content">
                    <div className="travelCard--location-link">
                        <img className="travelCard--location-img" src="images/location.png"/>
                        <p className="travelCard--location">{props.location}</p>
                        <a className="travelCard--link" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="travelCard--place">{props.title}</h2>
                    <p className="travelCard--dates"><b>{props.startDate} - {props.endDate}</b></p>
                    <p className="travelCard--text">{props.description}</p>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}