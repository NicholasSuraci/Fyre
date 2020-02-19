import React from 'react';
import logo from '../../image/logo.png'
import image from '../../image/landing.jpg'
import imageTwo from '../../image/rollercoaster.jpg'
import imageThree from '../../image/eldiablo.jpg'
import tower from '../../image/towerdropone.jpg'
import carousel from '../../image/carousel.jpg'
import funhouse from '../../image/funhouse.jpg'
import magic from '../../image/magic.jpg';
import topsy from '../../image/topsy.jpg';
import AttractionsModal from './AttractionsModal';
import {Link} from 'react-router-dom';
import Grid from '../Grid'

 const Attractions = () => {
    return (
        <div>
              <header className="header">

        <div className="header__container">
            <div className="header__bg-image-2"></div>
            <div className="header__text--background"> </div>
            <div className="header__text">
 
                <img className="header__text--logo" src={logo} alt="Fyre" />
            </div>
        </div>
        <section id="about" className="about">
            <div className="about__text">
            <h1 className="about__text--header">Fyre</h1>
            <p className="about__text--lead">This time its really happening</p>
        </div>
            
        <div className="about__container">
            <div className="about__grid">
              <div className="about__row">
                <Grid image={image} text={"Ferris Wheel"} to={'/ferriswheel'}/>
                <Grid image={imageTwo} text={"RollaCosta"} to={'/rollacosta'}/>
                <Grid image={imageThree} text={"El Diablo"} to={'/eldiablo'}/>
                <Grid image={tower} text={"Top Drop"} to={'/topdrop'}/>
                <Grid image={carousel} text={"Carousel"} to={'/carousel'}/>
                <Grid image={funhouse} text={"The Purge Maze"} to={'/purgemaze'}/>
                <Grid image={magic} text={"Leo The Magician"} to={'/leomagician'}/>
                <Grid image={topsy} text={"Round A Bout"} to={'/roundabout'}/>
              </div>
            </div>
          </div>   
                 
        </section>
       
    </header>
    <div className="concession__button-container">
                    <Link to='/'className="btn btn--green">Go Back</Link>
                    <Link to="/tickets" className="btn btn--white">Get Tickets</Link>
                </div>
    
        </div>
    )
}

export default Attractions