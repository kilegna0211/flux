import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
  return (
    <div className="product-container flex justify-center items-center">
      <div className="flux-product-container w-100 grid_row ph0 ph3-ns">
        {props.products.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;