import React from 'react';
import './BlocPrice.css';
import CouponClub from './Components/CouponClub';
import CouponFullSite from './Components/CouponFullSite';
import CouponMarchand from './Components/CouponMarchand';
import QuatreX from './Components/QuatreX';
import PromoPrice from './Components/PromoPrice';

function BlocPrice(props) {
    const { data, device } = props;
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
      console.log('test code coupon' + coupon.code)
      console.log('test code coupon' + coupon.amount)
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