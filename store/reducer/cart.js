import {ADD_TO_CART} from '../action/cart';
import cart from '../model/cart';

const initState = {
  cart: {},
  totalAmount: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      const productImage = addedProduct.image;

      if (state.cart[addedProduct.id]) {
        const updateCart = new cart(
          state.cart[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          productImage,
          state.cart[addedProduct.id].sum + productPrice,
        );
        return {
          ...state,
          cart: {...state.cart, [addedProduct.id]: updateCart},
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        const newCartItem = new cart(
          1,
          productPrice,
          productTitle,
          productImage,
          productPrice,
        );
        return {
          ...state,
          cart: {...state.cart, [addedProduct.id]: newCartItem},
          totalAmount: state.totalAmount + productPrice,
        };
      }
  }
  return state;
};

export default cartReducer;
