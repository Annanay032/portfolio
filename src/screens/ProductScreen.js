
import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, products } = productDetails;
  console.log(props.match.params)
  useEffect(() => {
    console.log(productId)
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);



  const addToCartHandler = async() => {

    const response = await axios({
      method: "POST",
      url: "/api/cart",
      data: {
        qty: qty,
       productId: productId,
        
      },
    }).then(
      (response) => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
        console.log(response);
      },
    )
    store.addNotification({
      title: 'Cart',
      message: 'Added to cart',
      type: 'default',                         // 'default', 'success', 'info', 'warning'
      container: 'top-center',                // where to position the notifications
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    })
  };


  return (
 <div>
 {loading ? (
  <LoadingBox></LoadingBox>
) : error ? (
  <MessageBox variant="danger">{error}</MessageBox>
) : (
  <div>
    <Link to="/">Back to result</Link>
    <div className="row top">
      <div className="col-2">
        
      </div>
      <div className="col-1">
        <ul>
          <li>
            <h1>{products.title}</h1>
          </li>
          <li>
            <Rating
              ratings={products.ratings}
             // numReviews={product.numReviews}
            ></Rating>
          </li>
          <li>Category: {products.category.title}</li>
          <li>Brand: {products.brand.name}</li>
          <li>Pirce : ${products.price}</li>
         
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="price">${products.price}</div>
              </div>
            </li>
           
         
            
              <div>
                <li>
                  <div className="row">
                    <div>Qty</div>
                    <div>
                      <select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)} >
                     
                        {[...Array(30).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={addToCartHandler}
                    className="primary block">
                  
                    Add to Cart
                  </button>
                </li>
            
                </div>
            
          </ul>
          
        </div>
      </div>
          </div>
        </div>
     )}
    </div>
  );
}

//<img
//className="large"
//src={product.image}
//alt={product.name}
//></img>

// <li>
//Description:
//<p>{product.description}</p>
//</li>


//<li>
//<div className="row">
  //<div>Status</div>
  //<div>
   // {product.countInStock > 0 ? (
    //  <span className="success">In Stock</span>
    //) : (
    //  <span className="danger">Unavailable</span>
    //)}
  //</div>
//</div>
//</li>
//{product.countInStock > 0 && (