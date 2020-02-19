import React from 'react'
import AttractionsModal from './AttractionsModal'
import image from '../../image/funhouse.jpg'
import {Link} from 'react-router-dom'
const Purge = () => {
    return (
        <div>
            <AttractionsModal 
            image={image} 
            header={'The Purge Maze'}
            lead={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Maecenas sed enim ut sem. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.'}
            strobe={'Due to the nature of the show we kindly ask guests not to attend if they are sensitive to strobe lights'}
            heart={'Due to the nature of the show we kindly ask guests not to attend if they have heart issues'}

            />
              <div className="concession__button-container">
                    <Link to='/attractions'className="btn btn--green">Go Back</Link>
                    <Link to="/tickets" className="btn btn--white">Get Tickets</Link>
                </div>
            
        </div>
    )
}

export default Purge