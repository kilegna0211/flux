import React from 'react';
import './BlocPrice.css';
import CouponClub from './Components/CouponClub';
import CouponFullSite from './Components/CouponFullSite';
import CouponMarchand from './Components/CouponMarchand';
import QuatreX from './Components/QuatreX';
import PromoPrice from './Components/PromoPrice';

function BlocPrice(props) {
    const { data, device } = props;
    // console.log('props data coupon:' + data.coupon)

    // const KML = window.KML || [];
    // let coupon;
  
  //   if ( KML.length !== 0 ) {
  //     KML.marketing.coupons.get(category, subCategory, productId, advertId, price, clubMember).then(function(res) { 
  //       // console.log('test return json coupon 3:'+ JSON.stringify(res))
  //       coupon = JSON.stringify(res);
  //       data.coupon = coupon;
  //     });
  //   } 
  //   if ( KML.length === 0 ) {
  //     coupon = devENVSetCoupons() || undefined;
  //   }
  // //calcul du prix pour les membres quand coupon club:
  // var priceClubMember = '';
  // if ( coupon !== undefined && price > coupon.minPurchase ) {
  //   priceClubMember = price - coupon.amount;
  // }
  // if ( coupon !== undefined && price < coupon.minPurchase ) {
  //   priceClubMember = price;
  // }


    const coupon = data.coupon || null;
    var isCouponMember = false;
    var isCouponAllUsers = false;
    const rakupon = data.rakupon || null;
    var isRakupon = false;
    const isQuatreX = data.price >= 200 || false;

    if (coupon !== null && coupon.clubMember === 'SUBSCRIBED') {
        isCouponMember = true;
    }
    if (coupon !== null && !coupon.clubMember) {
      // console.log('test objest coupon' + data.coupon)
      // console.log('test code coupon' + coupon.code)
      // console.log('test amount coupon' + coupon.amount)
      isCouponAllUsers = true;
    }

    if (rakupon !== null && rakupon.minimum_purchase_amount <= data.price) {
      isRakupon = true
    }

  return (
    <React.Fragment>
    { isCouponMember && data.priceClubMember !== data.price &&
      <CouponClub data={data} device={device} />
    }
    { isCouponAllUsers && !isCouponMember &&
     <CouponFullSite data={data} device={device} />
    }
    { !isCouponMember && !isCouponAllUsers && isRakupon &&
       <CouponMarchand data={data} device={device} />
    }
    { !isCouponMember && !isCouponAllUsers && !isRakupon && isQuatreX &&
       <QuatreX data={data} device={device} /> 
    }
    { !isCouponMember && !isCouponAllUsers && !isRakupon && !isQuatreX &&
       <PromoPrice data={data} device={device} />
    }
    </React.Fragment>
  );
};

export default BlocPrice;
