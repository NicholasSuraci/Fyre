import React from 'react'
import {Link} from 'react-router-dom'

const Lineup = () => {
    return (
        <div className="lineup">
            <div className="lineup__container">
                <div className="lineup__row">
                    <div className="lineup__col">
                        <h1>Fyre Lineup TBD</h1>
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

export default Lineup