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

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: []
//     };
//   }

//   componentDidMount() {
//     wsSalesCampaign(this.props.campaignId,this.props.size).then(res => {
//       console.log(res.items)
//       const { products } = this.state;
//       products.push(...res.items);
//       this.setState({products});
//     })
//   };

//   render() {
//     return (
//      <div className="App">
//          <ProductList
//            className="container-ProductsList"
//            products={this.state.products}
//            size={this.props.size} 
//          />
//      </div>
//     );
//   }
// }

