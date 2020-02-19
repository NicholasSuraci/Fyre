import React from "react";
import logo from "../../image/logo.png";
import Grid from "../Grid";
import image from "../../image/popcorn.jpg";
import fish from "../../image/fish.jpg";
import bbq from "../../image/bbq.jpg";
import burger from "../../image/burger.jpg";
import {Link} from 'react-router-dom';

const Concessions = () => {
  return (
    <div>
      <div className="concession__container--1">
          <img src={image} className="concession__image" />
          <div className="concession__text">
          <h1 className="concession__header">Popcornopolis</h1>
          <p className="concession__lead">Kettle Corn ... <span>16.99</span></p>
          <p className="concession__lead">Cheese ... <span>16.99</span></p>
          <p className="concession__lead">Zebra Corn ... <span>17.99</span></p>
          <p className="concession__lead">Caramel Corn ... <span>16.99</span></p>
          <p className="concession__lead">Soft Drinks ... <span>5.99</span></p>
          </div>
      </div>
      <div className="concession__container--2">
          <div className="concession__text">
          <h1 className="concession__header">Fish and Chips</h1>
          <p className="concession__lead">Fish and Chips ... <span>16.99</span></p>
          <p className="concession__lead">Salmon and Fries ... <span>16.99</span></p>
          <p className="concession__lead">Fish Sandwich and Chips ... <span>17.99</span></p>
          <p className="concession__lead">Mahi Mahi and Colslaw ... <span>16.99</span></p>
          <p className="concession__lead">Soft Drinks ... <span>5.99</span></p>
          </div>
          <img src={fish} className="concession__image" />
      </div>
      <div className="concession__container--1">
          <img src={bbq} className="concession__image" />
          <div className="concession__text">
          <h1 className="concession__header">That BBQ Joint</h1>
          <p className="concession__lead">Smoked Brisket ... <span>16.99</span></p>
          <p className="concession__lead">Smoked Ribs ... <span>16.99</span></p>
          <p className="concession__lead">Smoked Tri Tip ... <span>17.99</span></p>
          <p className="concession__lead">Tri Tip Burger ... <span>16.99</span></p>
          <p className="concession__lead">Soft Drinks ... <span>5.99</span></p>
          </div>
      </div>
      <div className="concession__container--2">
          
          <div className="concession__text">
          <h1 className="concession__header">Bison Burger</h1>
          <p className="concession__lead">Bison Burger ... <span>16.99</span></p>
          <p className="concession__lead">Texas Burger ... <span>16.99</span></p>
          <p className="concession__lead">Cali Burger ... <span>17.99</span></p>
          <p className="concession__lead">Simple Burger ... <span>16.99</span></p>
          <p className="concession__lead">Soft Drinks ... <span>5.99</span></p>
          </div>
          <img src={burger} className="concession__image" />
      </div>
      <div className="concession__button-container">
                    <Link to="/" className="btn btn--green">Go Back</Link>
                    <Link to="/tickets" className="btn btn--white">Get Tickets</Link>
                </div>
    </div>
  );
};
export default Concessions;