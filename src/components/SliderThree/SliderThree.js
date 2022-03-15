import React from "react";
import './SliderThree.css'
import icon2 from '../../img/icon2.png'
import icon1 from '../../img/icon1.png'
import bottle from '../../img/bottle.png'

export default function SliderThree() { 
    return (
        <div className="slider-three">
            <div className="slider-three-text">
                <h2>Ключевые сообщение</h2>
                <h2>Brend<strong>xy</strong></h2>
            </div>
            <div className="slider-three-container">
                <div className="slider-three-container-text disinbl">
                    <p>Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Incidunt, voluptate vel 
                        tempore aut provident neque.</p>
                    <img src={icon2} className="slider-three-img-icon2 slider-three-abs" alt="slider-one-img-icon2"/>
                </div>
                <div className="slider-three-two-container disinbl">
                    <div>
                        <p>A arcu <br />cursus vitae</p>
                        <img src={icon1} className="slider-three-img-icon1 slider-three-abs" alt="slider-one-img-icon1"/>
                    </div>
                    <div>
                    </div>
                </div>
                <img src={bottle} className="slider-three-img-bottle slider-three-abs" alt="slider-one-img-bottle"/>
            </div>
        </div>
    );
  }
  