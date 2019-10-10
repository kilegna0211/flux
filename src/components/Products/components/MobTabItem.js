import React from 'react';
import BlocImg from './BlocImg/index';
import Sticker from './Sticker/index';
import BlocClub from './BlocClub/index';
import BlocPrice from './BlocPrice/index';
import './Item.css';

function MobTabItem(props) {
    const { data } = props;
    const device = 'mob-tab';

  return (
        <a className="flux-promo-item-link-small_device helper_hide-AboveTablet flex flex-column ph3 pb3 bg-white no-underline mid-gray relative" href={data.productUrl}>
            <p className="flux-promo-item-title-small_device b f12 pv3">{data.titleLimited}</p>
            <BlocImg data={data} />
            <Sticker />
            <BlocPrice data={data} device={device} />
            <BlocClub data={data} device={device}/>
        </a>
  );
};

export default MobTabItem;