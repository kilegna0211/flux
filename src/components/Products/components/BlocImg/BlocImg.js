import React from 'react';
import FadeIn from 'react-lazyload-fadein';
import './BlocImg.css';

function BlocImg(props) {
    const { data } = props;

  return (
    <div className="flux-promo-item-picture relative">
        <FadeIn height={200} duration={300} easing={'ease-in'} >
            {onload => ( 
                <div className="flex flex-column items-center" onLoad={onload} >
                    <img className="flux-promo-item-img center" src={data.imgUrl} alt={data.titleLimited} />
                    <div className="helper_hide-BelowTablet fixed-height-20">
                            { data.noteRounded > 0 ?
                                <p className={`flex items-center rating_${data.noteRoundedClass}`}>
                                    <span className="flux-promo-item-rating-stars"></span>
                                </p>
                            : '' }
                    </div>
                </div>
            )}
        </FadeIn>
  </div>
  );
};

export default BlocImg;