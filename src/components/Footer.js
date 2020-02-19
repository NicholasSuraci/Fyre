import React from 'react';
import logo from '../image/logo.png'


const Footer = () => {
    return (
        <div>
              <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="Full logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link"><i className="fab fa-twitter-square fa-2x"></i></a></li>
                            <li className="footer__item"><a href="#" className="footer__link"><i className="fab fa-facebook-square fa-2x"></i></a></li>
                            <li className="footer__item"><a href="#" className="footer__link"><i className="fab fa-instagram fa-2x"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        </div>
    )
}

export default Footer