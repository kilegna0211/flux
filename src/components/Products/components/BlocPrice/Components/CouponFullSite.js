import React from 'react';
import { getFraction, discountOriginalPrice, formatedPrice } from './../../../../../utils/index';
import './../BlocPrice.css';

function CouponFullSite(props) {
    const { data, device } = props;
    const coupon = data.coupon;
    const codeCoupon = coupon.code || '';

  return (
    <React.Fragment>
    { device === 'desktop' &&
      <div className="flux-promo-blocPrice-full_large-device flex flex-column mv3">
        <div className="flex justify-center pt2">
          <p className="flux-promo-price-off dib line-through fixed-height-15 f14 pr2">
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
        <div className="OpenSans-eb fw8 red-rkt">
          <span className="dib f54">{Math.trunc(data.price)}<sup className="f22 price-euro-full">€</sup></span>
          { getFraction(data.price) !== ',00' ? <span className="price-decimal-full_large-device f22 dib">{getFraction(data.price)}</span> : '' }
        </div>
        <div className="dib f12 red-rkt"><span className="dib">avec le code</span><span className="b"> {codeCoupon}</span></div>
      </div>
    }
    { device === 'mob-tab' &&
      <div className="flux-promo-blocPrice-full_small-device flex flex-column mt3">
        <div className="flex justify-center pt3 pb2">
          <p className="flux-promo-price-off dib line-through fixed-height-15 f14 pr2">
          { data.originalPrice > data.price ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
            : data.refPrice > data.price ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
            : '' 
          }
          </p>
          { data.originalPrice ? <span className="dib white b f10 flux-promo-pct-discount">-{discountOriginalPrice(data.price,data.originalPrice)}%</span> 
            : !data.originalPrice && data.refPrice && data.pctDiscount > 1 ? <span className="dib white b f10 flux-promo-pct-discount">-{data.pctDiscount}%</span> 
            : ''
          }
        </div>
        <div className="OpenSans-eb fw8 red-rkt">
          <span className="dib f34">{Math.trunc(data.price)}<sup className="f16 price-euro-full_small-device">€</sup></span>
          { getFraction(data.priceClubMember) !== ',00' ? <span className="price-decimal-full_small-device f16 dib">{getFraction(data.priceClubMember)}</span> : '' }
        </div>
        <div className="dib f12 red-rkt"><span className="dib">avec le code</span><span className="b"> {codeCoupon}</span></div>
      </div>
    }
    </React.Fragment>
  );
};

export default CouponFullSite;
