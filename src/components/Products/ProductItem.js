import React from 'react';
import PropTypes from 'prop-types';
import DesktopItem from './components/DesktopItem';
import MobTabItem from './components/MobTabItem';
import { devENVGetCoupons } from '../../utils/index';
import './Products.css';

const ProductItem = ({ item, index, user, tracking }) => {
  // récupération des infos du user:
  const clubMember = user.isMember;
  const clubStatus = user.memberStatus;

  //récupération des données du ws
  const productId = item.product.product_id;
  const advertId = item.selected_advert.advertId || 0;
  const category = item.product.category;
  const subCategory = item.product.subcategory;
  const price = item.selected_advert.price;
  const refPrice = item.selected_advert.reference_price || '';
  const originalPrice = item.product.original_price || '';
  const pctDiscount = item.selected_advert.pct_discount || ''; 
  const rankMemberStatus = item.selected_advert.rank_coefficients || undefined;

  // url 
  let itemUrl = '';
  let xtatc = '#xtatc=PUB-' + tracking + '-[' + productId + ']-[]';
  const productUrl = item.product.url;
  if (productUrl.includes('mfp')) {
    itemUrl = productUrl + '&bbaid=' + advertId + xtatc
  }
  if (productUrl.includes('offer/')) {
    itemUrl = productUrl + '?bbaid=' + advertId + xtatc
  }
  if (!productUrl.includes('mfp') && !productUrl.includes('offer/')) {
    itemUrl = item.selected_advert.url + xtatc
  }

  const rakupon = item.selected_advert.rakupon || '';

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
  var coupon = {};

  if ( KML.length !== 0 ) {
    KML.marketing.coupons.get(category, subCategory, productId, advertId, price, clubMember).then(function(res) { 
      coupon = res
    });
  } 
  if ( KML.length === 0 ) {
    coupon = devENVGetCoupons() || undefined;
  }

  //calcul du prix pour les membres quand coupon club:
  var priceClubMember = '';
  if ( coupon !== undefined && price > coupon.minPurchase ) {
    priceClubMember = price - coupon.amount;
  }
  if ( coupon !== undefined && price < coupon.minPurchase ) {
    priceClubMember = price;
  }

  const calculRSP = (number) => {
    if ( rankMemberStatus ) {
      if ( clubStatus === 'REGULAR' ) return number * ( rankMemberStatus.REGULAR / 100 )
      if ( clubStatus === 'SILVER' ) return number * ( rankMemberStatus.SILVER / 100 )
      if ( clubStatus === 'GOLD' ) return number * ( rankMemberStatus.GOLD / 100 )
      if ( clubStatus === 'PLATINIUM' ) return number * ( rankMemberStatus.PLATINIUM / 100 )
    }
    if ( !rankMemberStatus && item.selected_advert.superpoint_bonus ) {
      return number * (item.selected_advert.superpoints_bonus / 100)
    }
    return number * 0.05
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
      priceClubMember,
      calculRSP,
      pctDiscount,
      itemUrl,
      imgUrl,
      titleLimited,
      titleLimitedMob,
      noteRounded,
      noteRoundedClass,
      coupon,
      rakupon,
      clubStatus
    }

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

