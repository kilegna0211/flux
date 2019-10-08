import React from 'react';
import './BlocClub.css';

function BlocClub(props) {
    const { item, device } = props;
    const RSPBonus = item.selected_advert.superpoints_bonus || '';
    const RSP = 5;

  return (
    <React.Fragment>
        { device ==='desktop' && 
            <div className="flux-promo-item-clubR-large_device flex items-center justify-center flex-wrap pt3 bt b--light-gray">
                <img className="dib" src="https://images.fr.shopping.rakuten.com/visuels/Club-Rakuten/page/LogoCRdesk.svg" alt="Club R" />
                { RSPBonus ?
                    <p className="f12 red-rkt b db dib-l pl1">{RSPBonus}€ offerts<span className="normal main-black"> sur vos prochains achats</span></p>
                :
                    <p className="f12 red-rkt b db dib-l pl1">{RSP}€ offerts<span className="normal main-black"> sur vos prochains achats</span></p>
                }
            </div>
        }
        { device ==='mob-tab' && 
            <div className="flux-promo-item-clubR-small_device flex items-center pt2 bt b--light-gray">
                <img src="https://images.fr.shopping.rakuten.com/visuels/Club-Rakuten/page/LogoCRdesk.svg" alt="Club R" />
                { RSPBonus ?
                    <div className="red-rkt f10 b pl3">
                        <p className="tl">{RSPBonus} € offerts</p>
                        <p className="normal main-black tl"> sur vos prochains achats</p>
                    </div>
                :
                    <div className="red-rkt tl f10 b pl3">
                        <p className="">{RSP} € offerts</p>
                        <p className="normal main-black"> sur vos prochains achats</p>
                    </div>
                }
            </div>
        }
    </React.Fragment>
  );
};

export default BlocClub;