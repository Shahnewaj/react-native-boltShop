import {Product, Category} from '../../src/data/data';

const initState = {
  AllProduct: Product,
  AllCategory: Category,
};

const ProductReducer = (state = initState, action) => {
  return state;
};

export default ProductReducer;
