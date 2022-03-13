import React from "react";
import './SliderOne.css'

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
        </div>
    );
  }
  