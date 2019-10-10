import React from 'react';
import PropTypes from 'prop-types';
import DesktopItem from './components/DesktopItem';
import MobTabItem from './components/MobTabItem';
import { devENVGetCoupons } from '../../utils/index';
import './Products.css';

const ProductItem = ({ item, index }) => {
  //récupération des données du ws
  const productId = item.product.product_id;
  const advertId = item.selected_advert.advertId || null;
  const category = item.product.category;
  const subCategory = item.product.subcategory;
  const price = item.selected_advert.price;
  const RSP = item.selected_advert.superpoints_bonus || 5;

  console.log(price)
  // const price = item.selected_advert.price.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const refPrice = item.selected_advert.reference_price || '';
  const originalPrice = item.product.original_price || '';
  const pctDiscount = item.selected_advert.pct_discount || 1; 
  const productUrl = item.selected_advert.url || '';
  const rakupon = item.selected_advert.rakupon || '';
  const rakuponReduc = rakupon.reduction_amount || 0;
  const rakuponMinPurchase = rakupon.minimum_purchase_amount || 0;
  const imgUrl = item.product.image_1 + '_ML.jpg' || '';
  //Titre Item - gestion de la longueur large device
  let titleLimited;
  (item.product.title.length > 29) ? titleLimited = item.product.title.substring(0, 26).concat('...') : titleLimited = item.product.title;
  titleLimited = titleLimited.replace(/&#39;/g, '\'').replace(/&#43;/g, '+').replace(/&amp;/g, '&');
  //Titre Item - gestion de la longueur small device
  let titleLimitedMob;
  (item.product.title.length > 35) ? titleLimitedMob = item.product.title.substring(0, 32).concat('...') : titleLimitedMob = item.product.title;
  titleLimitedMob = titleLimitedMob.replace(/&#39;/g, '\'').replace(/&#43;/g, '+').replace(/&amp;/g, '&');

  const noteRounded = Math.round(item.product.review_average_note * 10) / 10 || '';
  const noteRoundedClass = (Math.round(item.product.review_average_note * 2) / 2) * 10 || '';

  const KML = window.KML || [];
  const isMember = '{{user.isSubscribedToPriceClub}}' || false;
  var coupon = {};

  if ( KML.length !== 0 ) {
    KML.marketing.coupons.get(category, subCategory, productId, advertId, price, isMember).then(function(res) { 
      coupon = res
    });
  } 
  if ( KML.length === 0 ) {
    coupon = devENVGetCoupons() || undefined;
  }

    //initialisation des données pour chaque item
    const data = {
      productId,
      advertId,
      category,
      subCategory,
      price,
      refPrice,
      originalPrice,
      RSP,
      pctDiscount,
      productUrl,
      imgUrl,
      titleLimited,
      titleLimitedMob,
      noteRounded,
      noteRoundedClass,
      coupon
    }

  // KML.marketing.coupons.get("Tel-PDA", "Telephones-mobiles", 4203109223, 5090639475, 737.99, false).then(function(odr) { 
  //   console.log(test)
  //   console.log(odr) 
  // });
 

  // const bestOffer = item.bestOffer ? item.bestOffer : '';
  // const formatedBestOffer = bestOffer.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // const freeShipping = item.selected_advert.free_shipping || '';



  // const pctDiscount = item.selected_advert.pct_discount || '';

  const Item = () => (
    <React.Fragment>
      <DesktopItem key={index} data={data} />
      <MobTabItem key={index} data={data} />
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

