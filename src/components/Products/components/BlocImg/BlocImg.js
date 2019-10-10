import React from 'react';
import './BlocImg.css';

function BlocImg(props) {
    const { data } = props;
  
  return (
    <div className="flux-promo-item-picture relative">
        <div className="flex flex-column items-center">
            <img className="flux-promo-item-img center" src={data.imgUrl} alt={data.titleLimited} />
            <div className="helper_hide-BelowTablet fixed-height-20">
                { data.noteRounded > 0 ?
                    <p className={`flex items-center rating_${data.noteRoundedClass}`}>
                        <span className="flux-promo-item-rating-stars"></span>
                    </p>
                : '' }
            </div>
        </div>
  </div>
  );
};

export default BlocImg;