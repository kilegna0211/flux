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
    var minPurchaseRakupon = 0;
    const isQuatreX = data.price >= 90 || false;

    if (coupon) {
        isCouponMember = coupon.clubMember === 'SUBSCRIBED';
        isCouponAllUsers = coupon.clubMember === 'ALL';
    }

    if (rakupon) minPurchaseRakupon = rakupon.minimum_purchase_amount;

  return (
    <React.Fragment>
       { isCouponMember && data.priceClubMember !== data.price &&
          <CouponClub data={data} device={device} />
        }
      { isCouponAllUsers &&
        <CouponFullSite data={data} device={device} />
      }
      { !coupon && rakupon && minPurchaseRakupon <= data.price &&
        <CouponMarchand data={data} device={device} />
      }
      { !coupon && !rakupon && isQuatreX &&
        <QuatreX data={data} device={device} /> 
      }
      { !coupon && !rakupon && !isQuatreX &&
        <PromoPrice data={data} device={device} />
      }
    </React.Fragment>
  );
};

export default BlocPrice;