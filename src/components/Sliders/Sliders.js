import React from "react";
import SliderOne from '../SliderOne/SliderOne'
import SliderTwo from '../SliderTwo/SliderTwo'
import SliderThree from '../SliderThree/SliderThree'
import './Sliders.css'


export default function Slider() { 
    return (
        <div className="slider">
            <div className="slider-item">
                <SliderOne />
            </div>
            <div className="slider-item">
                <SliderTwo />
            </div>
            <div className="slider-item">
                <SliderThree/>
            </div>
        </div>
    );
  }
  