import React from 'react';
import PropTypes from 'prop-types';
import DesktopItem from './components/DesktopItem';
import MobTabItem from './components/MobTabItem';
import { devENVSetCoupons } from '../../utils/index';
import './Products.css';
import Lazyload from 'react-lazyload';
import { TransitionGroup } from 'react-transition-group';

const ProductItem = ({ item, index, user, tracking }) => {
  // récupération des infos du user via Jahia:
  const clubMember = user.isMember;
  const clubRank = user.priceClubRank;
  // const clubStatus = user.memberStatus;

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
  const pctDiscount = item.selected_advert.pct_discount || ''; 
  const rankMemberStatus = item.selected_advert.rank_coefficients || undefined;

  // url 
  let itemUrl = '';
  // let specialCharacter = '';
  const xtatc = '&xtatc=PUB-' + tracking + '-[' + productId + ']-[]' || '';
  if (productUrl.includes('mfp')) {
    // specialCharacter = '&'
    itemUrl = item.selected_advert.url + xtatc;
    // itemUrl = productUrl + '&bbaid=' + advertId + xtatc;
  }
  if (productUrl.includes('offer/')) {
    // specialCharacter = '?'
    itemUrl = productUrl + '?bbaid=' + advertId + xtatc;
  }
  // itemUrl = productUrl + specialCharacter + 'bbaid=' + advertId + xtatc;

  // if (!productUrl.includes('mfp') && !productUrl.includes('offer/')) {
  //   itemUrl = item.selected_advert.url+ xtatc
  // }

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
  let coupon;

  // if ( KML.length !== 0 ) {
  //   KML.marketing.coupons.get(category, subCategory, productId, advertId, price, clubStatus).then(function(res) { 
  //     // console.log('test return json coupon 3:'+ JSON.stringify(res))
  //     coupon = JSON.stringify(res);
  //     data.coupon = coupon;
  //   });
  // } 
  // if ( KML.length === 0 ) {
  //   coupon = devENVSetCoupons() || undefined;
  // }

  // //calcul du prix pour les membres quand coupon club:
  // var priceClubMember = '';
  // if ( coupon !== undefined && price > coupon.minPurchase ) {
  //   priceClubMember = price - coupon.amount;
  // }
  // if ( coupon !== undefined && price < coupon.minPurchase ) {
  //   priceClubMember = price;
  // }

  const calculRSP = (number) => {
    if ( rankMemberStatus ) {
      if ( clubRank === 'REGULAR' ) return number * ( rankMemberStatus.REGULAR / 100 )
      if ( clubRank === 'SILVER' ) return number * ( rankMemberStatus.SILVER / 100 )
      if ( clubRank === 'GOLD' ) return number * ( rankMemberStatus.GOLD / 100 )
      if ( clubRank === 'PLATINIUM' ) return number * ( rankMemberStatus.PLATINIUM / 100 )
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
      pctDiscount,
      itemUrl,
      imgUrl,
      titleLimited,
      titleLimitedMob,
      noteRounded,
      noteRoundedClass,
      rakupon
    }

  const Item = () => (
    <React.Fragment>
                <Lazyload throttle={250} height={200} once>
          <TransitionGroup key="1"
                 transitionName="fade"
                 transitionAppear
                 transitionAppearTimeout={500}
                 transitionEnter={false}
                 transitionLeave={false}>
      <DesktopItem key={index} data={data} />
      <MobTabItem key={index} data={data} />
      </TransitionGroup>
      </Lazyload>
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

