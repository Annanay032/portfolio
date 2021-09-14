import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstants';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from '../constants/orderConstants';

export const createOrder = (order, props) => async (dispatch) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
  try {
  
    const { data } = await Axios.post('/api/checkout');
      if(props){
    props.history.push(`/checkout`);
    console.log(order.id)
      }
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const detailsOrder = (orderId,props) => async (dispatch) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
  
    try {
      const { data } = await Axios.get(`/api/orders/`, 
      );
      //  if(props){
      //    props.history.push(`/orders/${data.id}`);
        console.log(data)
          // }
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }
  };