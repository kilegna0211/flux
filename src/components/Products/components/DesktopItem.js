import React from 'react';
import BlocImg from './BlocImg/index';
import Sticker from './Sticker/index';
import BlocClub from './BlocClub/index';
import BlocPrice from './BlocPrice/index';
import './Item.css';

function DesktopItem(props) {
    const { item, title, productUrl  } = props;
    const device = 'desktop';

  return (
    <a className="flux-promo-item-link-large_device helper_hide-BelowTablet flex flex-column ph4 pb4 pt3 ma3 bg-white ba b--light-gray no-underline mid-gray relative" href={productUrl}>
        <BlocImg item={item} title={title} />
        <div className="flux-promo-item-description">
            <p className="flux-promo-item-title b f16 pv3">{title}</p>
            <Sticker />
        </div>
        <BlocPrice item={item} device={device} />
        <BlocClub item={item} device={device} />
    </a>
  );
};

export default DesktopItem;