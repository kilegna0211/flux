import React from 'react';
import BlocImg from './BlocImg/index';
import Sticker from './Sticker/index';
import BlocClub from './BlocClub/index';
import BlocPrice from './BlocPrice/index';
import './Item.css';

function MobTabItem(props) {
    const { item, title, productUrl } = props;
    const device = 'mob-tab';

  return (
        <a className="flux-promo-item-link-small_device helper_hide-AboveTablet flex flex-column ph3 pb3 bg-white no-underline mid-gray relative" href={productUrl}>
            <p className="flux-promo-item-title-small_device b f12 pv3">{title}</p>
            <BlocImg item={item} title={title} />
            <Sticker />
            <BlocPrice item={item} device={device} />
            <BlocClub item={item} device={device}/>
        </a>
  );
};

export default MobTabItem;