import React from 'react';
import './BlocPrice.css';
import CouponClub from './Components/CouponClub';
import CouponFullSite from './Components/CouponFullSite';
import CouponMarchand from './Components/CouponMarchand';
import QuatreX from './Components/QuatreX';
import PromoPrice from './Components/PromoPrice';

function BlocPrice(props) {
    const { data, device } = props;
    console.log('blocPrice :'+ props)
    const coupon = data.coupon || null;
  console.log('coupon :'+coupon);
    var isCouponMember = false;
    console.log('isCouponMember' + isCouponMember);
    var isCouponAllUsers = false;
    console.log('isCouponAllUsers ' + isCouponAllUsers)
    const rakupon = data.rakupon || null; 
    console.log('rakupon ' + rakupon)
    var minPurchaseRakupon = 0;
    const isQuatreX = data.price >= 90 || false;
    console.log('isQuatreX ' + isQuatreX)

    if (coupon) {
        isCouponMember = coupon.clubMember === 'SUBSCRIBED';
        isCouponAllUsers = coupon.clubMember === 'ALL';
    }

    if (rakupon) minPurchaseRakupon = rakupon.minimum_purchase_amount;

  return (
    <React.Fragment>
<QuatreX data={data} device={device} /> 
    </React.Fragment>
  );
};

export default BlocPrice;

// { isCouponMember && data.priceClubMember !== data.price &&
//   <CouponClub data={data} device={device} />
// }
// { isCouponAllUsers &&
//   <CouponFullSite data={data} device={device} />
// }
// { !coupon && rakupon && minPurchaseRakupon <= data.price &&
// <CouponMarchand data={data} device={device} />
// }
// { !coupon && !rakupon && isQuatreX &&
// <QuatreX data={data} device={device} /> 
// }
// { !coupon && !rakupon && !isQuatreX &&
// <PromoPrice data={data} device={device} />
// }