import React from "react";
import logo from "../image/logo.png";
import Grid from "./Grid";
import image from "../image/landing.jpg";
import location from "../image/location.gif";
import concessions from "../image/concessions.jpg";
import tickets from "../image/tickets.jpg";
import lineup from "../image/lineup.jpg";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="header__container">
          <div className="header__bg-image"></div>
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
                <Grid image={image} text={"Attractions"} to={'/attractions'} />
                <Grid image={lineup} text={"Lineup"} to={'/lineup'}/>
                <Grid image={concessions} text={"Concessions"} to={'/concessions'}/>
                <Grid image={tickets} text={"Tickets"} to={'/tickets'}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
