import React from 'react';
import { formatedPrice } from './../../../../utils/index';
import './BlocClub.css';

function BlocClub(props) {
    const { data, device } = props;
    // const coupon = data.coupon || null;
    // const rakupon = data.rakupon || null;

    // let rakuponAmount = 0;
    // if (rakupon) {
    //     rakuponAmount = rakupon.reduction_amount;
    //     isCouponMarchand = true;
    // }

    // let isCouponMember = false;
    // let isCouponAllUsers = false;
    // let isCouponMarchand = false;
    // if (coupon) {
    //     isCouponMember = coupon.clubMember === 'SUBSCRIBED';
    //     isCouponAllUsers = coupon.clubMember === 'ALL';
    // }

    // const priceClubMember = data.priceClubMember;
    // const RSPMember = data.calculRSP(data.price);
    // const RSPAllUsers = data.calculRSP(data.price);
    // const RSPCoupon = data.calculRSP( data.price );
    const RSP = data.calculRSP(data.price);
    const isNewBook = data.category === 'Livres' && data.advertType === 'Neuf';

  return (
    <React.Fragment>
        { device ==='desktop' && !isNewBook &&
            <div className="flux-promo-item-clubR-large_device flex items-center justify-center flex-wrap pt3 bt b--light-gray">
                <img className="dib" src="https://images.fr.shopping.rakuten.com/visuels/Club-Rakuten/page/LogoCRdesk.svg" alt="Club R" />
                <p className="f12 red-rkt b db dib-l pl1">{formatedPrice(RSP)} € offerts<span className="normal main-black"> sur vos prochains achats</span></p>
            </div>
        }
        { device ==='mob-tab' && !isNewBook &&
            <div className="flux-promo-item-clubR-small_device flex items-center pt2 bt b--light-gray">
                <img src="https://images.fr.shopping.rakuten.com/visuels/Club-Rakuten/page/LogoCRdesk.svg" alt="Club R" />
                <div className="red-rkt tl f10 b pl2">
                    <p className="">{formatedPrice(RSP)} € offerts</p>
                    <p className="normal main-black"> sur vos prochains achats</p>
                </div>
            </div>
        }
    </React.Fragment>
  );
};

export default BlocClub;