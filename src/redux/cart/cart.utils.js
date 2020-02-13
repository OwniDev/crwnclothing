export const addItemToCart = (cartItem, cartItemToAdd) => {
  const existingCartItem = cartItem.find(cartItem => cartItem.id === cartItemToAdd.id); //Will return the first item found in the array, based on the function.
  if (existingCartItem) {
    return cartItem.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity : cartItem.quantity + 1} : cartItem    
    )
  }
  return [...cartItem, { ...cartItemToAdd, quantity: 1}];
}
