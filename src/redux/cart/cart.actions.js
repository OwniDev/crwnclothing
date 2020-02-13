import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
  //The payload value can be anything we want it to be
})