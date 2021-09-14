import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Orders History {order.id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            
           
            <li>
              <div className="card card-body">
                <h2>Orders detail list</h2>
                <ul>
                  {order.map((item) => (
                    <li key={item.id}>
                      <div className="row">
                       
                    Order Number: {item.id}
                        <div>
                          Total: {item.amt}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        
        </div>
      </div>
   
  );
}
// <li>
//               <div className="card card-body">
//                 <h2>Shipping</h2>
//                 <p>
//                 {console.log({order})}
//                   <strong>Name:</strong> {order.shippingAddress.fullName} <br />
//                   <strong>Address: </strong> {order.shippingAddress.address},
//                   {order.shippingAddress.city},
//                   {order.shippingAddress.postalCode},
//                   {order.shippingAddress.country}
//                 </p>
                
//                   <MessageBox variant="success">
//                     Delivered at {order.deliveredAt}
//                   </MessageBox>
                
//               </div>
//             </li>


// <li>
//               <div className="row">
//                 <div>Items</div>
//                 <div>${order.amt.toFixed(2)}</div>
//               </div>
//             </li>
//             <li>
//               <div className="row">
//                 <div>Shipping</div>
//                 <div>${order.shippingPrice.toFixed(2)}</div>
//               </div>
//             </li>
//             <li>
//               <div className="row">
//                 <div>Tax</div>
//                 <div>${order.taxPrice.toFixed(2)}</div>
//               </div>
//             </li>
//             <li>
//               <div className="row">
//                 <div>
//                   <strong> Order Total</strong>
//                 </div>


// <div className="min-30">
// <Link to={`/products/${item.product}`}>
//   {item.title}
// </Link>
// </div>
