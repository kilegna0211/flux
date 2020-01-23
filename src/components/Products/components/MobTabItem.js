import React from 'react';
import BlocImg from './BlocImg/index';
import BlocClub from './BlocClub/index';
import BlocPrice from './BlocPrice/index';
import './Item.css';

function MobTabItem(props) {
    const { data } = props;
    const sellerName = data.sellerName;
    const sellerCrew = 'cat-pm2';
    const device = 'mob-tab';
    let isAppMob;

    if (navigator.userAgent.search('BuyerApp') > -1) {
        isAppMob = true
      } 
    if (navigator.userAgent.search('mob') > -1) {
        isAppMob = true
      } 
    else {
        isAppMob = false
      }

  return (
    <React.Fragment>
            <a className="flux-promo-item-link-small_device ba b--light-gray flex flex-column ph3 pb3 bg-white no-underline mid-gray relative" href={data.itemUrl}>
                <p className="flux-promo-item-title-small_device b f12 pv3">{data.titleLimitedMob}</p>
                <BlocImg data={data} />
                <BlocPrice data={data} device={device} />
                <BlocClub data={data} device={device} />
            </a>
    </React.Fragment>
  );
};

export default MobTabItem;