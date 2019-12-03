import React from 'react';
import Sticker from './Sticker/index';
import { getFraction, formatedPrice } from './../../../../../utils/index';
import './../BlocPrice.css';

function CouponClub(props) {
    const { data, device } = props;
    const coupon = data.coupon;
    const codeCoupon = coupon.code || 0;
    const priceCase = 'isCoupon';
    const amountCoupon = coupon.amount;
    const newPrice = data.price - amountCoupon;
    const amountDiscount = data.amountDiscount;

  return (
    <React.Fragment>
        <Sticker priceCase={priceCase} />
        { device === 'desktop' && 
        <div className="flux-promo-blocPrice-Club_large-device flex mv3">
            <div className="flux-promo-blocPrice-Club-leftBloc_large-device relative flex flex-column">
                <div className="flex justify-center fixed-height-24 helper-pt-0_8">
                    <p className="flux-promo-price-off dib line-through f14 pr2">
                    { data.originalPrice > data.price ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
                      : data.refPrice > data.price ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
                      : '' 
                    }
                    </p>
                    { amountDiscount ? <span className="dib white b f12 flux-promo-pct-discount">-{amountDiscount}%</span>  
                      :  <span className="red-rkt f12 b dib pt1 nl2">Prix pour tous</span>
                    }
                </div>
                <div className="OpenSans-eb fw8 red-rkt pt2">
                    <span className="dib f35">{Math.trunc(data.price)}<sup className="f14 price-euro-club">€</sup></span>
                    { getFraction(data.price) !== ',00' ? <span className="f14 dib nl3">{getFraction(data.price)}</span> : '' }
                </div>
            </div>
            <div className="flux-promo-blocPrice-Club-rightBloc_large-device relative f12 bg-red-rkt white flex flex-column">
                <div className="b flex justify-center items-center fixed-height-24 helper-pt-0_8">
                    <span className="dib">Prix membre</span>
                    <img className="white-logo-club pt1 pl1" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/ClubR_white.svg" alt="logo club R blanc"/>
                </div>
                <div className="OpenSans-eb fw8 pt2 pb1">
                    <span className="dib f35">{Math.trunc(newPrice)}<sup className="f14 price-euro-club">€</sup></span>
                    { getFraction(newPrice) !== ',00' ? <span className="f14 dib nl3">{getFraction(newPrice)}</span> : '' }
                </div>
                <div className="dib"><span className="dib">avec le code</span><span className="b"> {codeCoupon}</span></div>
            </div>
        </div>
        }
        { device === 'mob-tab' && 
        <div className="flux-promo-blocPrice-Club_small-device flex flex-column mt1">
            <div className="flux-promo-blocPrice-Club-topBloc_small-device relative flex flex-column">
                <div className="flex justify-center pt2 f10">
                    <p className="flux-promo-price-off dib line-through pr2">
                    { data.originalPrice > data.price ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
                      : data.refPrice > data.price ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
                      : '' 
                    }
                    </p>
                    { amountDiscount ? <span className="dib white b f10 flux-promo-pct-discount">-{amountDiscount}%</span>
                        : <span className="red-rkt f12 b dib nl2">Prix pour tous</span>
                    }
                </div>
                <div className="OpenSans-eb fw8 red-rkt pt1 z-2">
                <span className="dib f20">{Math.trunc(data.price)}<sup className="f10 price-euro-club">€</sup></span>
                { getFraction(data.price) !== ',00' ? <span className="price-decimal f10 dib">{getFraction(data.price)}</span> : '' }
                </div>
            </div>
            <div className="flux-promo-blocPrice-Club-bottomBloc_small-device relative f12 pt3 pb2 bg-red-rkt white flex flex-column justify-center">
                <div className="b flex justify-center items-center">
                    <span className="dib">Prix membre</span>
                    <img className="white-logo-club_small-device pt1 pl1" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/ClubR_white.svg" alt="logo club R blanc"/>
                </div>
                <div className="OpenSans-eb fw8 pv1">
                    <span className="dib f20">{Math.trunc(newPrice)}<sup className="f10 price-euro-club">€</sup></span>
                    { getFraction(newPrice) !== ',00' ? <span className="price-decimal f10 dib">{getFraction(newPrice)}</span> : '' }
                </div>
                <div className="dib"><span className="dib">avec le code</span><span className="b"> {codeCoupon}</span></div>
            </div>
        </div>
        }
   </React.Fragment>
  );
};

export default CouponClub;