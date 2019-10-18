import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
  const { user, tracking } = props;

  return (
    <div className="product-container">
      <div className="flux-product-container w-100 flex justify-center flex-wrap ph0 ph3-ns">
        {props.products.map((item, index) => (
          <ProductItem item={item} key={index} user={user} tracking={tracking} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;