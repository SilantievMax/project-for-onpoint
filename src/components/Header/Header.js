import React from "react";
import './Header.css'
import home from '../../img/home.png'

export default function Slider() { 
    return (
        <div className="home">
            <img className="home-inl" src={home} alt="home" />
            <h1 className="home-inl">|</h1>
            <h2 className="home-inl">PROJECT</h2>
        </div>
    );
  }
  