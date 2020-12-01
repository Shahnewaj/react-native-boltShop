import {
  REDUCE_PRODUCT,
  ADD_TO_CART,
  REMOVE_PRODUCT,
  INCREASE_PRODUCT,
} from '../action/cart';
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
        let total = parseInt(state.totalAmount) + parseInt(productPrice);
        return {
          ...state,
          cart: {...state.cart, [addedProduct.id]: updateCart},
          totalAmount: total,
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

    case REMOVE_PRODUCT:
      const targetItem = state.cart[action.pid];
      const currentCartItems = {...state.cart};
      delete currentCartItems[action.pid];
      return {
        ...state,
        cart: currentCartItems,
        totalAmount: state.totalAmount - targetItem.sum,
      };
    case REDUCE_PRODUCT:
      const selectedItem = state.cart[action.pid];
      const currentQnty = selectedItem.quantity;
      let updatedCartItem;
      if (currentQnty > 1) {
        const updatedCart = new cart(
          selectedItem.quantity - 1,
          selectedItem.productPrice,
          selectedItem.productTitle,
          selectedItem.productImage,
          selectedItem.sum - selectedItem.productPrice,
        );
        updatedCartItem = {...state.cart, [action.pid]: updatedCart};
      }
      return {
        ...state,
        cart: updatedCartItem,
        totalAmount: state.totalAmount - selectedItem.productPrice,
      };
    case INCREASE_PRODUCT:
      const focusedItem = state.cart[action.pid];
      const qnty = focusedItem.quantity;

      if (qnty >= 0) {
        const updatedCart = new cart(
          focusedItem.quantity + 1,
          focusedItem.productPrice,
          focusedItem.productTitle,
          focusedItem.productImage,
          focusedItem.sum + focusedItem.productPrice,
        );
        updatedCartItem = {...state.cart, [action.pid]: updatedCart};
      }
      return {
        ...state,
        cart: updatedCartItem,
        totalAmount: state.totalAmount + focusedItem.productPrice,
      };
  }
  return state;
};

export default cartReducer;
