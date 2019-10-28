import React from 'react';
import BlocImg from './BlocImg/index';
import BlocClub from './BlocClub/index';
import BlocPrice from './BlocPrice/index';
import './Item.css';

function DesktopItem(props) {
    const { data } = props;
    const device = 'desktop';

  return (
    <a className="flux-promo-item-link-large_device flex flex-column ph4 pb4 pt3 ma3 bg-white ba b--light-gray no-underline mid-gray relative" href={data.itemUrl}>
        <BlocImg data={data} />
        <div className="flux-promo-item-description">
            <p className="flux-promo-item-title b f16 pv3">{data.titleLimited}</p>
        </div>
        <BlocPrice data={data} device={device} />
        <BlocClub data={data} device={device} />
    </a>
  );
};

export default DesktopItem;