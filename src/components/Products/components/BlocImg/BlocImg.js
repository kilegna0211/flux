import React from 'react';
import './BlocImg.css';

function BlocImg(props) {
    const { item, title } = props;
    const imgUrl = 'https://images.fr.shopping.rakuten.com/photo/' + item.product.image_1 + '_ML.jpg' || '';

    const noteRounded = Math.round(item.product.review_average_note * 10) / 10 || '';
    const noteRoundedClass = (Math.round(item.product.review_average_note * 2) / 2) * 10 || '';

  return (
    <div className="flux-promo-item-picture relative">
        <div className="flex flex-column items-center">
            <img className="flux-promo-item-img center" src={imgUrl} alt={title}/>
            <div className="helper_hide-BelowTablet fixed-height-16">
                { noteRounded > 0 ?
                    <p className={`flex items-center rating_${noteRoundedClass}`}>
                        <span className="flux-promo-item-rating-stars"></span>
                    </p>
                : '' }
            </div>
        </div>
  </div>
  );
};

export default BlocImg;