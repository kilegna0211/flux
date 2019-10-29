import React from 'react';
import Sticker from './Sticker/index';
import { getFraction, discountOriginalPrice, formatedPrice } from './../../../../../utils/index';
import './../BlocPrice.css';

function QuatreX(props) {
    console.log('test ipad')
    const { data, device } = props;
    const paiement4X = (number) => {
        let commission = number * 0.022;
        let echeance = (number / 4) + (commission / 4);
        return echeance
    } 
    const priceCase = 'is4x';

  return (
      <React.Fragment>
            <Sticker priceCase={priceCase} />
          { device === 'desktop' &&
            <div className="flux-promo-blocPrice-4X flex mv3">
                <div className="flux-promo-blocPrice-Club-leftBloc_large-device relative flex flex-column">
                    <div className="flex justify-center fixed-height-24 helper-pt-0_8">
                        <p className="flux-promo-price-off dib line-through f14 pr2">
                        { data.originalPrice > data.price ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
                            : data.refPrice > data.price ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
                            : '' 
                        }
                        </p>
                        { data.originalPrice > data.price ? <span className="dib white b f12 flux-promo-pct-discount">-{discountOriginalPrice(data.price,data.originalPrice)}%</span> 
                          : !data.originalPrice && data.refPrice && data.pctDiscount > 1 ? <span className="dib white b f12 flux-promo-pct-discount">-{data.pctDiscount}%</span> 
                          : <span className="red-rkt f12 dib pt1">Paiement standard</span>
                        }
                    </div>
                    <div className="OpenSans-eb fw8 red-rkt pt2">
                        <span className="dib f35">{Math.trunc(data.price)}<sup className="f14 price-euro-club">€</sup></span>
                        { getFraction(data.price) !== ',00' ? <span className="f14 dib nl3">{getFraction(data.price)}</span> : '' }
                    </div>
                </div>
                <div className="flux-promo-blocPrice-4X-rightBloc relative f12 bg-blue-4x white flex flex-column">
                    <div className="flex justify-center items-center fixed-height-24 helper-pt-0_8">
                        <span className="dib">4 échéances de</span>
                    </div>
                    <div className="OpenSans-eb fw8 pt2">
                        <span className="dib f35">{Math.trunc(paiement4X(data.price))}<sup className="f14 price-euro-club">€</sup></span>
                        { getFraction(paiement4X(data.price)) !== ',00' ? <span className="f14 dib nl3">{getFraction(paiement4X(data.price))}</span> : '' }
                    </div>
                    <div className="dib"><span className="dib">avec le paiement</span><img className="relative pl2 icon4xCB" src="https://images.fr.shopping.rakuten.com/visuels/0_merch/OP/Logos/4xcb.svg" alt="paiement 4XCB" /></div>
                </div>
            </div>
        }
        { device === 'mob-tab' &&
            <div className="flux-promo-blocPrice-4X_small-device relative flex flex-column mt1">
                <div className="flux-promo-blocPrice-Club-topBloc_small-device relative top-0 flex flex-column">
                    <div className="flex justify-center pt2 f10">
                        <p className="flux-promo-price-off dib line-through pr2">
                            { data.originalPrice > data.price ? <span>{formatedPrice(data.originalPrice)} &#8364;</span>
                                : data.refPrice > data.price ? <span>{formatedPrice(data.refPrice)} &#8364;</span>
                                : '' 
                            }
                        </p>
                        { data.originalPrice > data.price ? <span className="dib white b f10 flux-promo-pct-discount">-{discountOriginalPrice(data.price,data.originalPrice)}%</span> 
                          : !data.originalPrice && data.refPrice && data.pctDiscount > 1 ? <span className="dib white b f10 flux-promo-pct-discount">-{data.pctDiscount}%</span> 
                          : <span className="red-rkt f10 dib pt1">Paiement standard</span>
                        }
                    </div>
                    <div className="OpenSans-eb fw8 red-rkt pt1 z-2">
                        <span className="dib f20">{Math.trunc(data.price)}<sup className="f10 price-euro-club">€</sup></span>
                        { getFraction(data.price) !== ',00' ? <span className="price-decimal f10 dib">{getFraction(data.price)}</span> : '' }
                    </div>
                </div>
                <div className="flux-promo-blocPrice-4X-bottomBloc_small-device pt3 pb2 relative bottom-0 f12 bg-blue-4x white flex flex-column justify-center">
                    <div className="flex justify-center items-center">
                        <span className="dib">4 échéances de</span>
                    </div>
                    <div className="OpenSans-eb fw8 pv1">
                        <span className="dib f20">{Math.trunc(paiement4X(data.price))}<sup className="f10 price-euro-club">€</sup></span>
                        { getFraction(paiement4X(data.price)) !== ',00' ? <span className="f10 dib price-decimal">{getFraction(paiement4X(data.price))}</span> : '' }
                    </div>
                    <div className="dib"><span className="dib">avec le paiement</span><img className="relative pl2 icon4xCB" src="https://images.fr.shopping.rakuten.com/visuels/0_merch/OP/Logos/4xcb.svg" alt="paiement 4XCB" /></div>
                </div>
            </div>
        }
    </React.Fragment>
  );
};

export default QuatreX;