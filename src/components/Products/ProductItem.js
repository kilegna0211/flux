import React from 'react';
import PropTypes from 'prop-types';
import DesktopItem from './components/DesktopItem';
import MobTabItem from './components/MobTabItem';
import './Products.css';

const ProductItem = ({ item, index }) => {
  
  const rakupon = item.selected_advert.rakupon || '';
  const rakuponReduc = rakupon.reduction_amount || 0;
  const rakuponMinPurchase = rakupon.minimum_purchase_amount || 0;
  const productUrl = item.selected_advert.url || '';
  // const bestOffer = item.bestOffer ? item.bestOffer : '';
  // const formatedBestOffer = bestOffer.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // const freeShipping = item.selected_advert.free_shipping || '';

  //Titre Item - gestion de la longueur desktop
  let titleLimited;
  (item.product.title.length > 29) ? titleLimited = item.product.title.substring(0, 26).concat('...') : titleLimited = item.product.title;
  titleLimited = titleLimited.replace(/&#39;/g, '\'').replace(/&#43;/g, '+').replace(/&amp;/g, '&');
  //Titre Item - gestion de la longueur small device
  let titleLimitedMob;
  (item.product.title.length > 35) ? titleLimitedMob = item.product.title.substring(0, 32).concat('...') : titleLimitedMob = item.product.title;
  titleLimitedMob = titleLimitedMob.replace(/&#39;/g, '\'').replace(/&#43;/g, '+').replace(/&amp;/g, '&');

  // const pctDiscount = item.selected_advert.pct_discount || '';

  const Item = () => (
    <React.Fragment>
      <DesktopItem item={item} title={titleLimited} productUrl={productUrl} />
      <MobTabItem item={item} title={titleLimitedMob} productUrl={productUrl} />
    </React.Fragment>
  );

  return <Item />
};

ProductItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default ProductItem;


// import React from 'react';
// import PropTypes from 'prop-types';
// import './style-fluxBloc.css';
// import BlocClubR from './blocClubR';

// const BlocSeller = ({ item, index }) => {
//     const imgUrl = `${item.product.image_1}.jpg`;
//     const hrefLink = item.selected_advert.url;
//     const price = item.selected_advert.price;
//     const state = item.selected_advert.advert_type;
//     const freeShipping = item.selected_advert.free_shipping;
//     const refPrice = item.selected_advert.reference_price;
//     const originalPrice = item.product.original_price;
//     const pctDiscount = item.selected_advert.pct_discount;
//     const noteRounded = Math.round(item.product.review_average_note * 10) / 10;
//     const noteRoundedClass = (Math.round(item.product.review_average_note * 2) / 2) * 10;
//     const rakupon = item.selected_advert.rakupon;
//     const rakuponReduc = rakupon ? rakupon.reduction_amount : 0;
//     const rakuponMinPurchase = rakupon ? rakupon.minimum_purchase_amount : 0;
//     const RSPBonus = item.selected_advert.superpoints_bonus;

//     //bloc Club Rakuten
//     const blocClubR = item.selected_advert.overloaded_description;
//     //price
//     const formatedPrice = price.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });



//     //style selon etat neuf ou occasion
//     let stylePrice;
//     (state === "Neuf") ? stylePrice = "red b" : stylePrice = "dark";

//     //calcul superpoints
//     if (navigator.userAgent.search('BuyerApp') > -1) {
//       var RSP = 7;
//     } else {
//       RSP = 5;
//     }

//     const ProductItem = () => (
//       <div className="grid_col grid_col-2 grid_col-3-BelowMax grid_col-4-BelowDesktop grid_col-12-BelowLandscape col_nogutter">
//         <a className="flux-promo-item-link flex flex-column pa4 ma3 bg-white no-underline mid-gray relative" href={hrefLink}>
//           { rakupon ?
//           <p className="absolute top-0 left-0 f14 pv2 b--dashed bw1 br-0 bl-0 b--green w-100 flex items-center justify-center">
//             <img className="w2 pr1" src="https://pmcdn.staticpmrk.com/visuels/2017/hpassets/picto_pourcentage.png" alt="coupon discount" />
//             <span className="b pr2">-{rakuponReduc}&#8364;</span>
//             dès {rakuponMinPurchase}&#8364; d&apos;achat
//           </p>
//           : '' }
//           <div className="flux-promo-item-picture relative">
//             { refPrice ?
//             <div className="flux-promo-item-reduction black f12">
//               <p>-{pctDiscount}%</p>
//             </div>
//              : '' }
//             <div className="pv3 flex items-center">
//               <img className="flux-promo-item-img center" src={imgUrl} alt={titleLimited}/>
//             </div>
//           </div>
//           <div className="flux-promo-item-description">
//             <p className="flux-promo-item-title f6 pt2">{titleLimited}</p>
//             <p className={`f5 pt2 ${stylePrice}`}>
//               <span>{formatedPrice} &#8364;</span>
//               <span className="f14 normal"> {state}</span>
//             </p>
//             <div className="fixed-height-32 f6 silver">
//               <p className="f6 line-through">
//               { refPrice ? <span>{refPrice.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} &#8364;</span>
//               : originalPrice > price ? <span>{originalPrice.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} &#8364;</span>
//               : '' }</p>
//               <p className="pt1">{ (freeShipping === 1) ? <span>Livraison gratuite</span> : '' }</p>
//             </div>
//             <div className="flux-promo-item-clubR flex items-center justify-start flex-wrap mt3 pv2 ph1 ba b--light-gray br1">
//               <img className="dib ml1" src="https://sslpmcdn.priceminister.com/corporate/v1/club-r.svg" alt="Club R" />
//               { RSPBonus ?
//               <p className="f6 red b db dib-l pt1 pl2 nr2-l">{RSPBonus}% remboursés</p>
//               :
//               <p className="f6 red b db dib-l pt1 pl2 nr2-l">{RSP}% remboursés</p>
//               }
//             </div>
//             <div className="fixed-height-16">
//             { noteRounded > 0 ?
//               <p className={`flex items-center rating_${noteRoundedClass}`}>
//               <span className="flux-promo-item-rating-stars"></span>
//               <span className="f6 silver pl2 pb1">{noteRounded}</span>
//               </p>
//             : '' }
//             </div>
//           </div>
//         </a>
//       </div>
//     );

//     return blocClubR ? <BlocClubR RSP={RSP}/> : <ProductItem />;

// };

// BlocSeller.propTypes = {
//   item: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.object
//     ])
// }


