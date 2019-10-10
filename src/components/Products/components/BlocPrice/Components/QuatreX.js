import React from 'react';
import './../BlocPrice.css';

function QuatreX(props) {
    const { data, device } = props;

  return (
      <React.Fragment>
          { device === 'desktop' &&
            <div className="flux-promo-blocPrice-4X flex mv3">
                <div className="flux-promo-blocPrice-Club-leftBloc_large-device relative flex flex-column">
                    <div className="flex justify-center pt2 fixed-height-21">
                        <p className="flux-promo-price-off dib line-through f14 pr2">
                        { data.refPrice ? <span>{data.refPrice} &#8364;</span>
                        : data.originalPrice > data.price ? <span>{data.originalPrice} &#8364;</span>
                        : '' }
                        </p>
                        <span className="dib white b f12 flux-promo-pct-discount">-40%</span>
                    </div>
                    <div className="fw9 red-rkt pt2"><span className="dib f35">150<sup className="f14 price-euro-club">€</sup></span><span className="f14 dib nl3">,99</span></div>
                </div>
                <div className="flux-promo-blocPrice-4X-rightBloc relative f12 bg-blue-4x white flex flex-column justify-center">
                    <div className="flex justify-center items-center">
                        <span className="dib">4 échéances de</span>
                    </div>
                    <div className="fw9"><span className="dib f35">100<sup className="f14 price-euro-club">€</sup></span><span className="f14 dib nl3">,95</span></div>
                    <div className="dib"><span className="dib">avec le paiement</span><img className="relative pl2 icon4xCB" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon4xCB.svg" alt="paiement 4XCB" /></div>
                </div>
            </div>
        }
        { device === 'mob-tab' &&
            <div className="flux-promo-blocPrice-4X_small-device flex flex-column mt1">
                <div className="flux-promo-blocPrice-Club-topBloc_small-device relative flex flex-column">
                    <div className="flex justify-center pt2 f10">
                        <p className="flux-promo-price-off dib line-through pr2">
                        { data.refPrice ? <span>{data.refPrice} &#8364;</span>
                        : data.originalPrice > data.price ? <span>{data.originalPrice} &#8364;</span>
                        : '' }
                        </p>
                        <span className="dib white b flux-promo-pct-discount">-40%</span>
                    </div>
                    <div className="fw8 red-rkt pt1 z-2"><span className="dib f20">150<sup className="f10 price-euro-club">€</sup></span><span className="price-decimal f10 dib">,99</span></div>
                </div>
                <div className="flux-promo-blocPrice-4X-bottomBloc_small-device pt3 pb2 relative f12 bg-blue-4x white flex flex-column justify-center">
                    <div className="flex justify-center items-center">
                        <span className="dib">4 échéances de</span>
                    </div>
                    <div className="fw8 pv1"><span className="dib f20">100<sup className="f10 price-euro-club">€</sup></span><span className="f10 dib price-decimal">,95</span></div>
                    <div className="dib"><span className="dib">avec le paiement</span><img className="relative pl2 icon4xCB" src="https://images.fr.shopping.rakuten.com/visuels/2019-09-20_newfluxmerch/images/icon4xCB.svg" alt="paiement 4XCB" /></div>
                </div>
            </div>
        }
    </React.Fragment>
  );
};

export default QuatreX;