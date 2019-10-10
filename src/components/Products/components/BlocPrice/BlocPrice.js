import React from 'react';
import './BlocPrice.css';
import CouponClub from './Components/CouponClub';
import CouponFullSite from './Components/CouponFullSite';
import CouponMarchand from './Components/CouponMarchand';
import QuatreX from './Components/QuatreX';
import PromoPrice from './Components/PromoPrice';

function BlocPrice(props) {
    const { data, device } = props;
    const isCouponMember = data.coupon.clubMember === 'SUBSCRIBED' || false;
  
  return (
    <React.Fragment>
        { data.productId === 4127563261 &&
            <QuatreX data={data} device={device} /> 
        }
        { data.productId === 4127563267 && 
            <CouponFullSite data={data} device={device} />
        }
        { isCouponMember && 
            <CouponClub data={data} device={device} />
        }
        { data.productId === 4127563260 && 
            <CouponMarchand data={data} device={device} />
        }
        { data.productId === 4127563256 && 
            <PromoPrice data={data} device={device} />
        }
    </React.Fragment>
  );
};

export default BlocPrice;