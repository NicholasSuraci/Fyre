import React from 'react'
import AttractionsModal from './AttractionsModal'
import image from '../../image/carousel.jpg'
import {Link} from 'react-router-dom'


const Carousel = () => {
    return (
        <div>
            <AttractionsModal 
            image={image} 
            header={'Carousel'}
            lead={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Maecenas sed enim ut sem. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.'}
            height={'Height: 32"'}
          
           
            />
             <div className="concession__button-container">
                    <Link to='/attractions'className="btn btn--green">Go Back</Link>
                    <Link to="/tickets" className="btn btn--white">Get Tickets</Link>
                </div>
            
        </div>
    )
}

export default Carousel