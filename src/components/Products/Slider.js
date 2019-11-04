import React from 'react';
import './Slider.css'

function scrollFlux(direction, e) {
    const innerCaroussel = e.target.parentNode.getElementsByClassName('slider-flux')[0];
    if (direction === 'arrow-left') innerCaroussel.scrollLeft -= (innerCaroussel.clientWidth) * 0.8;
    if (direction === 'arrow-right') innerCaroussel.scrollLeft += (innerCaroussel.clientWidth) * 0.8;
}

function Button(props) {
  const styleArrow = props.position === 'left' ? 'arrow-left' : 'arrow-right';

  return (
        <div 
        className={`absolute arrow ${styleArrow}`} 
        onClick={(e) => scrollFlux(`${styleArrow}`, e)}
        > 
        </div>
  );
};

export default Button;


