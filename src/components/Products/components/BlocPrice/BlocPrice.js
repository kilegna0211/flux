import React from 'react';
import './BlocPrice.css';
import CouponClub from './Components/CouponClub';
import CouponFullSite from './Components/CouponFullSite';
import CouponMarchand from './Components/CouponMarchand';
import QuatreX from './Components/QuatreX';
import PromoPrice from './Components/PromoPrice';

function BlocPrice(props) {
    const { item, device } = props;
    console.log(item)

  return (
    <React.Fragment>
        { item.product.product_id === 2829679059 &&
            <QuatreX item={item} device={device} /> 
        }
        { item.product.product_id === 4076925946 && 
            <CouponFullSite item={item} device={device} />
        }
        { item.product.product_id === 4157746583 && 
            <CouponClub item={item} device={device} />
        }
        { item.product.product_id === 4203109223 && 
            <CouponMarchand item={item} device={device} />
        }
        { item.product.product_id === 4203109248 && 
            <PromoPrice item={item} device={device} />
        }
    </React.Fragment>
  );
};

export default BlocPrice;