import React, { useEffect, useState } from 'react';
import { wsSalesCampaign } from './rest/ws';
import ProductList from './components/Products/index'
import './App.css';

function App(props) {
  const {campaignId, size} = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    wsSalesCampaign(campaignId,size).then(res => {
      console.log(res)
      setProducts([...res.items]);
    })
  })

  return (
    <div className="App">
        <ProductList
          className="container-ProductsList"
          products={products}
        />
    </div>
  );
}

export default App;



