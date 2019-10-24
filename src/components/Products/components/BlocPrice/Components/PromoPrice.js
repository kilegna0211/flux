import React from 'react';
import { getFraction, discountOriginalPrice, formatedPrice } from './../../../../../utils/index';
import './../BlocPrice.css';

function PromoPrice(props) {
    const { data, device } = props;
    const economyCalcul = (initialPrice, discountPrice) => {
      let economy = initialPrice - discountPrice;
      return economy.toLocaleString('fr-FR', { maximumFractionDigits: 2 })
    }

  return (
    <React.Fragment>
    { device === 'desktop' &&
    <div className="flux-promo-blocPrice-promo flex flex-column mt1 mb3">
      <div className="flex justify-center pt2 fixed-height-21">
        <p className="flux-promo-price-off dib line-through f14 pr2">
        { data.originalPrice > data.price ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
            : data.refPrice > data.price ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
            : '' 
        }
        </p>
        { data.originalPrice > data.price ? <span className="dib white b f12 flux-promo-pct-discount">-{discountOriginalPrice(data.price,data.originalPrice)}%</span> 
          : !data.originalPrice && data.refPrice && data.pctDiscount > 1 ? <span className="dib white b f12 flux-promo-pct-discount">-{data.pctDiscount}%</span> 
          : ''
          }
      </div>
      <div className="helper-blocPrice relative OpenSans-eb fw8 red-rkt">
          <p className="f54 dib">{Math.trunc(data.price)}<sup className="f22 price-euro-full">€</sup></p>
          { getFraction(data.price) !== ',00' ? <p className="price-decimal-full_large-device dib f22">{getFraction(data.price)}</p> : '' }
      </div>
        { data.originalPrice && data.originalPrice > data.price ? 
      <div className="promo-price-economy dib center f14 black bg-lightgray ph3 pv2 mt2">
        <div className="promo-price-economy-text dib">
          <p>Soit<span className="b"> {economyCalcul(data.originalPrice,data.price)} &#8364;</span> d'économie</p>
        </div>
      </div>
        : data.refPrice ?   
        <div className="promo-price-economy dib center f14 black bg-lightgray ph3 pv2 mt2">
          <div className="promo-price-economy-text dib">
            <p>Soit<span className="b"> {economyCalcul(data.refPrice,data.price)} &#8364;</span> d'économie</p>
          </div>
        </div>
        :
        <div className="fixed-height-31"></div>
      }
    </div>
    }
    { device === 'mob-tab' &&
    <div className="flux-promo-blocPrice-promo_small-device flex flex-column mt3">
      <div className="flex justify-center pt3 pb2">
        <p className="flux-promo-price-off dib line-through f14 pr2">
          { data.originalPrice > data.price ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
            : data.refPrice > data.price ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
            : <span className="fixed-height-15"></span> 
          }
        </p>
        { data.originalPrice ? <span className="dib white b f10 flux-promo-pct-discount">-{discountOriginalPrice(data.price,data.originalPrice)}%</span> 
            : !data.originalPrice && data.refPrice && data.pctDiscount > 1 ? <span className="dib white b f10 flux-promo-pct-discount">-{data.pctDiscount}%</span> 
            : <span className="fixed-height-15"></span> 
          }
      </div>
      <div className="relative OpenSans-eb fw8 red-rkt">
          <p className="f34 dib">{Math.trunc(data.price)}<sup className="f16 price-euro-full_small-device">€</sup></p>
          { getFraction(data.price) !== ',00' ? <p className="price-decimal-full_small-device dib f16">{getFraction(data.price)}</p> : '' }
      </div>
      { data.originalPrice && data.originalPrice > data.price ? 
        <div className="promo-price-economy dib center f12 black bg-lightgray ph3 pv2 mt1">
          <div className="promo-price-economy-text dib">
            <p>Soit<span className="b"> {economyCalcul(data.originalPrice,data.price)} &#8364;</span> d'économie</p>
          </div>
        </div>
        : data.refPrice ?   
        <div className="promo-price-economy dib center f12 black bg-lightgray ph3 pv2 mt1">
          <div className="promo-price-economy-text dib">
            <p>Soit<span className="b"> {economyCalcul(data.refPrice,data.price)} &#8364;</span> d'économie</p>
          </div>
        </div>
        : <div className="fixed-height-26"></div>
      }
    </div>
    }
    </React.Fragment>
  );
};

export default PromoPrice;