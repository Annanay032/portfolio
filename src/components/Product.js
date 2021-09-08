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
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

