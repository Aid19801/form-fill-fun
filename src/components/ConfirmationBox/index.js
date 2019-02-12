import React from 'react';

const ConfirmationBox = (props) => {
    return (
        <div className="events-conf-box">
            <h3>{props.title}</h3>
            {
                props.placeName ? 
                <div>
                    <h4>{props.placeName}</h4>
                    <p>{props.buildingUnit} {props.buildingName}</p>
                    <p>{props.streetNumber} {props.streetName}</p>
                    <p>{props.town} {props.postcode}</p>
                </div>
                : 
                <div>
                    <h4>{props.activityName}</h4>
                    <p>from ages {props.selectedAgeFrom} to {props.selectedAgeTo}</p>
                    <p>For more information: {props.activityWebpage} / {props.activityPhoneNumber}</p>
                </div>
            }
        </div>
    )
}

export default ConfirmationBox;
