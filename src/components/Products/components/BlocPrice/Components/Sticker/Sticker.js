import React from 'react';
import './Sticker.css';

function Sticker(props) {
  const {priceCase} = props;

  return (
    <React.Fragment>
    { priceCase === 'isCoupon' &&  
      <div className="flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center">
        <img className="flux-promo-icon_timer pr2" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_timer.svg" alt="durée limitée"/>
        <p className="flux-promo-item-sticker-text b">Durée limitée</p>
      </div>
    }
    { priceCase === 'is4x' &&  
      <div className="flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center">
        <img className="flux-promo-icon_sticker pr2" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_sticker.svg" alt="éclair à saisir"/>
        <p className="flux-promo-item-sticker-text b">BON PLAN !</p>
      </div>
    }
    { priceCase === 'isPromo' &&  
      <div className="flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center">
        <p className="flux-promo-item-sticker-text b">% SUPER PROMO</p>
      </div>
    }
    { priceCase === 'noPromo' &&  
      <div className="flux-promo-item-sticker bg-red-rkt white center flex justify-center items-center">
        <p className="flux-promo-item-sticker-text b">COUP DE COEUR </p>
        <img className="flux-promo-icon_heart pr2" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_coeur.svg" alt="coup de coeur"/>
      </div>
    }
    </React.Fragment>
  );
};

export default Sticker;