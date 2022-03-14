import React from "react";
import './SliderOne.css'
import Layer1 from '../../img/Layer1.png'
import Layer2 from '../../img/Layer2.png'
import Layer3 from '../../img/Layer3.png'
import Layer4 from '../../img/Layer4.png'
import Layer5 from '../../img/Layer5.png'
import Layer6 from '../../img/Layer6.png'
import Layer7 from '../../img/Layer7.png'
import Layer8 from '../../img/Layer8.png'
import Layer9 from '../../img/Layer9.png'


export default function SliderOne() { 
    return (
        <div className="slider-one">
            <div className="slider-text">
                <p>привет,</p>
                <p>это <strong>не</strong> <br />коммерческое <br />задание</p>
                <button className="slider-one-bt ">
                    <div className="slider-one-il">&#10132;</div>
                    <h6 className="slider-one-il">Что дальше?</h6>
                </button>
            </div>
            <div className="slider-one-img">
                <img src={Layer1} className="slider-one-img-layer1 slider-one-abs" alt="slider-one-img-layer1"/>
                <img src={Layer2} className="slider-one-img-layer2 slider-one-abs" alt="slider-one-img-layer2"/>
                <img src={Layer3} className="slider-one-img-layer3 slider-one-abs" alt="slider-one-img-layer3"/>
                <img src={Layer4} className="slider-one-img-layer4 slider-one-abs" alt="slider-one-img-Layer4"/>
                <img src={Layer5} className="slider-one-img-layer5 slider-one-abs" alt="slider-one-img-layer5"/>
                <img src={Layer6} className="slider-one-img-layer6 slider-one-abs" alt="slider-one-img-layer6"/>
                <img src={Layer7} className="slider-one-img-layer7 slider-one-abs" alt="slider-one-img-layer7"/>
                <img src={Layer8} className="slider-one-img-layer8 slider-one-abs" alt="slider-one-img-layer8"/>
                <img src={Layer9} className="slider-one-img-layer9 slider-one-abs" alt="slider-one-img-layer9"/>
            </div>
        </div>
    );
  }
  