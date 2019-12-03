import React from 'react';
import Sticker from './Sticker/index';
import { getFraction, formatedPrice } from './../../../../../utils/index';
import './../BlocPrice.css';

function CouponMarchand(props) {
    const { data, device } = props;
    const rakupon = data.rakupon;
    const rakuponName = rakupon.name;
    const priceCase = 'isCoupon';
    const amountCoupon = rakupon.reduction_amount;
    const newPrice = data.price - amountCoupon;
    const amountDiscount = data.amountDiscount;

  return (
    <React.Fragment>
        <Sticker priceCase={priceCase} />
    { device === 'desktop' &&
      <div className="flux-promo-blocPrice-full_large-device flex flex-column mv3">
        <div className="flex justify-center pt2">
          <p className="flux-promo-price-off dib line-through fixed-height-15 f14 pr2">
          { data.originalPrice > data.price && amountDiscount ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
            : data.refPrice > data.price && amountDiscount ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
            : '' 
          }
          </p>
          { amountDiscount ? <span className="dib white b f12 flux-promo-pct-discount">-{amountDiscount}%</span> 
          : ''
          }
        </div>
        <div className="OpenSans-eb fw8 red-rkt">
          <span className="dib f54">{Math.trunc(newPrice)}<sup className="f22 price-euro-full">€</sup></span>
          { getFraction(newPrice) !== ',00' ? <span className="price-decimal-full_large-device f22 dib">{getFraction(newPrice)}</span> : '' }
        </div>
        { amountDiscount ? 
            <div className="dib f12 main-black"><span className="dib">avec le code</span><span className="b"> {rakuponName}</span></div>
            :
            <div className="dib f12 main-black mb3"><span className="dib">avec le code</span><span className="b"> {rakuponName}</span></div>
        }
      </div>
    }
    { device === 'mob-tab' &&
      <div className="flux-promo-blocPrice-full_small-device flex flex-column mt3">
        <div className="flex justify-center pt3 pb2">
          <p className="flux-promo-price-off dib line-through fixed-height-15 f14 pr2">
          { data.originalPrice > data.price && amountDiscount ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
            : data.refPrice > data.price && amountDiscount ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
            : '' 
          }
          </p>
          { amountDiscount ? <span className="dib white b f10 flux-promo-pct-discount">-{amountDiscount}%</span> 
            : ''
          }
        </div>
        <div className="OpenSans-eb fw8 red-rkt">
          <span className="dib f34">{Math.trunc(newPrice)}<sup className="f16 price-euro-full_small-device">€</sup></span>
          { getFraction(newPrice) !== ',00' ? <span className="price-decimal-full_small-device f16 dib">{getFraction(newPrice)}</span> : '' }
        </div>
        <div className="dib f12 main-black"><span className="dib">avec le code</span><span className="b"> {rakuponName}</span></div>
      </div>
    }
    </React.Fragment>
  );
};

export default CouponMarchand;