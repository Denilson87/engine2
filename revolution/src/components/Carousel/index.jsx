import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../assets/images/mozambique.jpg';
import img2 from '../../assets/images/mozambique.jpg';
import img3 from '../../assets/images/mozambique_01.jpg';

import './style.css';

function Carousell() {
    return (
        <Carousel controls={false} className="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="first-caption captions">
                        <h2 className="animated animate__backInDown">ISOFS CONFERENCE</h2>
                        <p className="animated fadeInLeft">The conference will take place in Maputo from &nbsp;
                        <span>November, 2021</span></p>
                        <p className="animated fadeInLeft">Focus Fistula</p>
                        <Link to="/register">
                            <button className="animated animate__bounce">Register</button>
                        </Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="second-caption captions animated animate__backInUp">
                        <h2 className="animated flipInX">Themes and sub-themes for abstracts</h2>
                        <ul>
                            <li className="animated animate__backInUp">Prevention of obstetric fistula</li>
                            <li className="animated animate__backInUp">Training and fistula</li>
                            <li className="animated animate__backInUp">
                                Fistula surgery or Obstetric trauma surgery
                            </li>
                            <li className="animated animate__backInUp">Physical and nutritional rehabilitation</li>
                            <li className="animated animate__backInUp">Social reintegration</li>
                        </ul>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="third-caption captions">
                        <h2 className="animated animate__lightSpeedInRight">
                            Obstetric Fistula, Unacceptable Challenge – End it Now
                        </h2>
                        <p className="animated animate__slideInDown"> 
                            <span>John</span> is presenting now, click &nbsp;
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">here</a> 
                            &nbsp; to follow his speech
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousell;