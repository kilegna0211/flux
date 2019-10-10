import React from 'react';
import './../BlocPrice.css';

function PromoPrice(props) {
    const { data, device } = props;

  return (
    <React.Fragment>
    { device === 'desktop' &&
    <div className="flux-promo-blocPrice-promo flex flex-column mt1 mb3">
      <div className="flex justify-center pt2">
        <p className="flux-promo-price-off dib line-through f14 pr2">
          { data.refPrice ? <span>{data.refPrice} &#8364;</span>
          : data.originalPrice > data.price ? <span>{data.originalPrice} &#8364;</span>
          : '' }
        </p>
        <span className="dib white b f12 flux-promo-pct-discount">-40%</span>
      </div>
      <div className="helper-blocPrice relative fw9 red-rkt">
          <p className="f54 dib">150<sup className="f22 price-euro-full">€</sup></p>
          <p className="price-decimal-full dib f22">,99</p>
      </div>
      <div className="promo-price-economy dib center f14 black bg-lightgray ph3 pv2 mt2">
        <p className="promo-price-economy-text dib">
        Soit<span className="b"> 10,60 €</span> d'économie
        </p>
      </div>
    </div>
    }
    { device === 'mob-tab' &&
    <div className="flux-promo-blocPrice-promo_small-device flex flex-column mt3">
      <div className="flex justify-center pt3 pb2">
        <p className="flux-promo-price-off dib line-through f14 pr2">
          { data.refPrice ? <span>{data.refPrice} &#8364;</span>
          : data.originalPrice > data.price ? <span>{data.originalPrice} &#8364;</span>
          : '' }
        </p>
        <span className="dib white b f12 flux-promo-pct-discount">-40%</span>
      </div>
      <div className="relative fw9 red-rkt">
          <p className="f34 dib">150<sup className="f16 price-euro-full_small-device">€</sup></p>
          <p className="price-decimal-full_small-device dib f16">,99</p>
      </div>
      <div className="promo-price-economy dib center f12 black bg-lightgray ph3 pv2 mt1">
        <p className="promo-price-economy-text dib">
        Soit<span className="b"> 10,60 €</span> d'économie
        </p>
      </div>
    </div>
    }
    </React.Fragment>
  );
};

export default PromoPrice;