import React from 'react';
import './../BlocPrice.css';

function CouponFullSite(props) {
    const { data, device } = props;

  return (
    <React.Fragment>
    { device === 'desktop' &&
      <div className="flux-promo-blocPrice-full_large-device flex flex-column mv3">
        <div className="flex justify-center pt2">
          <p className="flux-promo-price-off dib line-through f14 pr2">
            { data.refPrice ? <span>{data.refPrice} &#8364;</span>
            : data.originalPrice > data.price ? <span>{data.originalPrice} &#8364;</span>
            : '' }
          </p>
          <span className="dib white b f12 flux-promo-pct-discount">-40%</span>
        </div>
        <div className="fw9 red-rkt"><span className="dib f54">150<sup className="f22 price-euro-full">€</sup></span><span className="price-decimal-full f22 dib">,99</span></div>
        <div className="dib f12 red-rkt"><span className="dib">avec le code</span><span className="b"> Rakuten50</span></div>
      </div>
    }
    { device === 'mob-tab' &&
      <div className="flux-promo-blocPrice-full_small-device flex flex-column mt3">
        <div className="flex justify-center pt3 pb2">
          <p className="flux-promo-price-off dib line-through f14 pr2">
          { data.refPrice ? <span>{data.refPrice} &#8364;</span>
          : data.originalPrice > data.price ? <span>{data.originalPrice} &#8364;</span>
          : '' 
          }
          </p>
          <span className="dib white b f12 flux-promo-pct-discount">-40%</span>
        </div>
        <div className="fw9 red-rkt"><span className="dib f34">150<sup className="f16 price-euro-full_small-device">€</sup></span><span className="price-decimal-full_small-device f16 dib">,99</span></div>
        <div className="dib f12 red-rkt"><span className="dib">avec le code</span><span className="b"> Marchand28</span></div>
      </div>
    }
    </React.Fragment>
  );
};

export default CouponFullSite;