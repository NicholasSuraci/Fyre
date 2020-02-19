import React from 'react'
import {Link} from 'react-router-dom';

export const AttractionsModal = (props) => {
    return (
        <div className="modal">
            <div className="modal__container">
                <img className="modal__image" src={props.image} />
                <div className="modal__text">
    <h1 className="modal__header">{props.header}</h1>
<p className="modal__lead">{props.lead}</p>
<ul className="modal__requirements">
    <li className="modal__requirements--height">{props.height}</li>
    <li className="modal__requirements--health">{props.pregnancy}</li>
    <li className="modal__requirements--health">{props.back}</li>
    <li className="modal__requirements--health">{props.strobe}</li>
    <li className="modal__requirements--health">{props.heart}</li>
</ul>

                </div>
            </div>
         
        </div>
    )
}

export default AttractionsModal