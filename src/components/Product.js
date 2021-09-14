import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product.id} className="card">
    
      <div className="card-body">
      <Link to={`/products/${product.id}`}>
          <h2>{product.title}</h2>
        </Link>
        <Ratings
          ratings={product.ratings}
        
        ></Ratings>
        <div>Category: {product.category.title}</div>

        <div>Brand: {product.brand.name}</div>

    
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

// <div>SPECS: {[product.specs.name]}</div>
// <div>SPECS: {[product.specs.value]}</div>