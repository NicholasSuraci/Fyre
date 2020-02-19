import React from 'react'
import tickets from "../../image/tickets.jpg"
import {Link} from 'react-router-dom'

const Tickets = () => {
    return (
        <div className="tickets">
            <div className="tickets__container">
                <img className="tickets__image" src={tickets} />
                <div className="tickets__text">
                    <h3 className="tickets__text--header">Tickets on sale 08/21/2020</h3>
                    <div className="tickets__options">
                    <h3 className="tickets__options--header">Basic</h3>
                    <ul className="tickets__options--list">
                        <li className="tickets__options--item">$499.99</li>
                        <li className="tickets__options--item">2 person tent</li>
                        <li className="tickets__options--item">2 tickets for 4 day festival</li>
                        <li className="tickets__options--item">$20 meal passes per day</li>
                        <li className="tickets__options--item">discounted flight</li>
                        
                    </ul>
                    </div>
                    <div className="tickets__options">
                    <h3 className="tickets__options--header">Prefered</h3>
                    <ul className="tickets__options--list">
                        <li className="tickets__options--item">$899.99</li>
                        <li className="tickets__options--item">4 person suite tent</li>
                        <li className="tickets__options--item">4 tickets for 4 day festival</li>
                        <li className="tickets__options--item">$40 meal passes per day</li>
                        <li className="tickets__options--item">half off flight</li>
                        
                    </ul>
                    </div>
                    <div className="tickets__options">
                    <h3 className="tickets__options--header">Prefered Plus</h3>
                    <ul className="tickets__options--list">
                        <li className="tickets__options--item">$1500.00</li>
                        <li className="tickets__options--item">8 person tent</li>
                        <li className="tickets__options--item">4 tickets for 4 day festival</li>
                        <li className="tickets__options--item">$60 meal passes per day</li>
                        <li className="tickets__options--item">flight included</li>
                        
                    </ul>
                    </div>
                </div>
                
            </div>
            <div className="concession__button-container">
                    <Link to='/'className="btn btn--green">Go Back</Link>
                    <Link to="/tickets" className="btn btn--white">Get Tickets</Link>
                </div>
        </div>
    )
}

export default Tickets
