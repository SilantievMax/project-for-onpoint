import React from "react";
import './SliderTwo.css'
import Layer10 from '../../img/Layer10.png'
export default function SliderTwo() { 
    return (
        <div className="slider-two">
            <div className="slider-two-text">
                <h2>Текct<br />сообщения</h2>
            </div>
            <div className="slider-two-scroll">
                <p><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipisicing elit. 
                Quae dolore nihil vitae neque, autem quam ad veniam aspernatur modi cum quibusdam 
                architecto, amet cumque consectetur facilis in expedita mollitia. Nihil consectetur 
                aliquam suscipit, officia voluptates aliquid debitis consequuntur rerum quisquam odio 
                delectus voluptatem minima perspiciatis numquam ipsum quas ut nulla amet culpa quis 
                molestias! Ratione, voluptatum est. Doloremque, dolores, velit ipsam voluptas 
                molestiae eum blanditiis officiis deleniti natus quia aperiam modi quasi nesciunt 
                optio dolorum repudiandae rem dolorem dolor ipsa atque nobis, quidem beatae! Qui,
                officia voluptates aliquid debitis consequuntur rerum quisquam odio 
                delectus voluptatem minima perspiciatis numquam ipsum quas ut nulla amet culpa quis 
                molestias! Ratione, voluptatum est. Doloremque, dolores, velit ipsam voluptas 
                molestiae eum blanditiis officiis deleniti natus quia aperiam modi quasi nesciunt 
                optio dolorum repudiandae rem dolorem dolor ipsa atque nobis, quidem beatae! Qui,
                officia voluptates aliquid debitis consequuntur rerum quisquam odio 
                delectus voluptatem minima perspiciatis numquam ipsum quas ut nulla amet culpa quis 
                molestias! Ratione, voluptatum est. Doloremque, dolores, velit ipsam voluptas 
                molestiae eum blanditiis officiis deleniti natus quia aperiam modi quasi nesciunt 
                optio dolorum repudiandae rem dolorem dolor ipsa atque nobis, quidem beatae! Qui, 
                distinctio! Quod, non rerum. Quaerat tempora voluptate animi, delectus veniam 
                cupiditate maiores nulla voluptas ducimus!</p>
            </div>
            <div className="slider-two-img">
                <img src={Layer10} className="slider-two-img-layer10 slider-two-abs" alt="slider-two-img-layer10"/>
                <img src={Layer10} className="slider-two-img-layer10 slider-two-abs" alt="slider-two-img-layer10"/>
                <img src={Layer10} className="slider-two-img-layer10 slider-two-abs" alt="slider-two-img-layer10"/>
                <img src={Layer10} className="slider-two-img-layer10 slider-two-abs" alt="slider-two-img-layer10"/>
                <img src={Layer10} className="slider-two-img-layer10 slider-two-abs" alt="slider-two-img-layer10"/>
            </div>
        </div>
    );
  }
  