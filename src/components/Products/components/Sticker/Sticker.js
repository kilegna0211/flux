import React from 'react';
import './Sticker.css';

function Sticker(props) {
  return (
    <div className="flux-promo-item-sticker white center flex justify-center items-center">
        <img className="flux-promo-icon_sticker pr2" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon_sticker.svg" alt="éclair à saisir"/>
        <p className="flux-promo-item-sticker-text b">BON PLAN !</p>
    </div>
  );
};

export default Sticker;