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
    console.log(data.rakupon)
    const rakupon = data.rakupon || null;
    var isRakupon = false;

    console.log('rakupon ' + rakupon)
    var minPurchaseRakupon = 0;
    const isQuatreX = data.price >= 90 || false;
    console.log('isQuatreX ' + isQuatreX)

    if (coupon !== null) {
        isCouponMember = coupon.clubMember === 'SUBSCRIBED';
        isCouponAllUsers = coupon.clubMember === 'ALL';
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