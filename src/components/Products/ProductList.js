import React from 'react';
import ProductItem from './ProductItem';
import Button from './Slider';

function ProductList(props) {
  const { user, tracking, slider } = props;
  const customStyleFlux = slider ? 'slider-flux flex' : 'justify-center flex-wrap';
  let clientWidth = window.innerWidth > 992 ? 'desktop' : '';

  return (
    <div className="product-container">
      { slider && clientWidth === 'desktop' &&
        <Button slider={slider} position="left"/>
      }
      <div className={`flux-product-container w-100 flex ph0 ph3-ns ${customStyleFlux}`}>
        {props.products.map((item, index) => (
          <ProductItem item={item} key={index} user={user} tracking={tracking} />
        ))}
      </div>
      { slider && clientWidth === 'desktop' &&
          <Button slider={slider} position="right"/>
      }
    </div>
  );
};

export default ProductList;