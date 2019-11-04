import React, { useEffect, useState } from 'react';
import * as ws from './rest/ws';
import ProductList from './components/Products/index'
import './App.css';

function App(props) {
  const { campaignId, size, user, tracking, slider } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ws.wsSalesCampaign(campaignId, size).then(res => {
      setProducts([...res.items])
    })
  }, [campaignId, size]); //second argument optionnel : ne se ré-abonne que si props.size change, évite de lancer la requête get à l'infini

  return (
    <div className="App OpenSans-loaded">
        <ProductList
          className="container-ProductsList"
          products={products}
          user={user}
          tracking={tracking}
          slider={slider}
        />
    </div>
  );
}

export default App;