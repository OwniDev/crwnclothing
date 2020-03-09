import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN :
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM :
      return{
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
        // We spread the items of the current cartItem array, then add the product we have in our action payload
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
            // Filter gets rid of any object that evaluates to true.
            // If the ID of the item from the state doesn't match the ID of the payload, it evals to TRUE and is filtered out.
            )

        }
      default :
        return state;
  }
}


export default cartReducer;