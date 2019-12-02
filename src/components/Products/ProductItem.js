import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DesktopItem from './components/DesktopItem';
import MobTabItem from './components/MobTabItem';
import { devENVSetCoupons } from '../../utils/index';
import './Products.css';

const ProductItem = ({ item, index, user, tracking }) => {
  // récupération des infos du user via Jahia:
  const clubMember = user.isMember;
  const clubRank = user.priceClubRank;

  //récupération des données du ws
  const productId = item.product.product_id;
  const advertId = item.selected_advert.advertId || 0;
  const productUrl = item.product.url;
  const category = item.product.category;
  const subCategory = item.product.subcategory;
  const advertType = item.selected_advert.advert_type || '';
  const price = item.selected_advert.price;
  const refPrice = item.selected_advert.reference_price || '';
  const originalPrice = item.product.original_price || '';
  const rankMemberStatus = item.selected_advert.rank_coefficients || undefined;

    // calcul discount
    let amountDiscount;
    const pctDiscount = item.selected_advert.pct_discount || ''; 
    function calculDiscount(price,originalPrice,refPrice) {
      if ( originalPrice && originalPrice > price ) {
        amountDiscount = Math.floor((originalPrice - price) * 100 / originalPrice);
        if (amountDiscount >= 4) return amountDiscount;
      }
      if ( pctDiscount && refPrice && refPrice > price ) {
        amountDiscount = pctDiscount;
        if (amountDiscount >= 4) return amountDiscount;
      }
      return amountDiscount = '';
    }
    calculDiscount(price,originalPrice,refPrice);

  // url 
  let itemUrl = '';
  const xtatc = '&xtatc=PUB-' + tracking + '-[' + productId + ']-[]' || '';
  if (productUrl.includes('offer/')) {
    itemUrl = productUrl + '?bbaid=' + advertId + xtatc;
  }
  else {
    itemUrl = productUrl + '&bbaid=' + advertId + xtatc;
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

  const calculRSP = (number) => {
    if ( rankMemberStatus ) {
      if ( clubRank === 'REGULAR' ) return number * ( rankMemberStatus.REGULAR / 100 )
      if ( clubRank === 'SILVER' ) return number * ( rankMemberStatus.SILVER / 100 )
      if ( clubRank === 'GOLD' ) return number * ( rankMemberStatus.GOLD / 100 )
      if ( clubRank === 'PLATINUM' ) return number * ( rankMemberStatus.PLATINUM / 100 )
    }
    if ( !rankMemberStatus && item.selected_advert.superpoints_bonus ) {
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
      advertType,
      price,
      refPrice,
      originalPrice,
      calculRSP,
      amountDiscount,
      itemUrl,
      imgUrl,
      titleLimited,
      titleLimitedMob,
      noteRounded,
      noteRoundedClass,
      rakupon
    }

  //get coupon in Lucy with KML function
  const KML = window.KML || [];
  let result;
  const [coupon, setCoupon] = useState({});
  async function getCoupon() {
    try{
      if ( KML.length !== 0 ) {
        console.log('KML fonction launch')
        KML.marketing.coupons.get(category, subCategory, productId, advertId, price, clubMember).then(function(res) { 
          console.log('test return res coupon from KML:'+ JSON.stringify(res))
          return result = JSON.stringify(res);
        });
      } 
      if ( KML.length === 0 ) {
        result = devENVSetCoupons() || undefined;
        return result
      }
    }
    catch(error) {
      console.error("ERROR:" + error);
  }
  }
 
  useEffect(() => {
    getCoupon().then(res => {
      console.log('resultat coupon from hook :' + res)
      setCoupon(res)
    })
  }
  , [coupon]);
console.log('test coupon : '+ coupon)
  data.coupon = coupon;

    //calcul du prix pour les membres quand coupon club:
    // var priceClubMember = '';
    // if ( coupon !== undefined && price > coupon.minPurchase ) {
    //   priceClubMember = price - coupon.amount;
    // }
    // if ( coupon !== undefined && price < coupon.minPurchase ) {
    //   priceClubMember = price;
    // }

console.log(data)
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

