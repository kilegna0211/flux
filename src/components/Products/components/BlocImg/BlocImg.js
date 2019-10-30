import React from 'react';
import './BlocImg.css';
import Lazyload from 'react-lazyload';
import { TransitionGroup } from 'react-transition-group';

function BlocImg(props) {
    const { data } = props;

  return (
    <div className="flux-promo-item-picture relative">
        <div className="flex flex-column items-center">
            <Lazyload throttle={250} height={200} once>
                <TransitionGroup key="1"
                 transitionName="fade"
                 transitionAppear
                 transitionAppearTimeout={500}
                 transitionEnter={false}
                 transitionLeave={false}>
                    <img className="flux-promo-item-img center" src={data.imgUrl} alt={data.titleLimited} />
                </TransitionGroup>
            </Lazyload>
            <div className="helper_hide-BelowTablet fixed-height-20">
                { data.noteRounded > 0 ?
                    <p className={`flex items-center rating_${data.noteRoundedClass}`}>
                        <span className="flux-promo-item-rating-stars"></span>
                    </p>
                : '' }
            </div>
        </div>
  </div>
  );
};

export default BlocImg;