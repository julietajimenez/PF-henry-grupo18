const initialState = {
  allProducts: [],
  products: [],
};

export function products(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    default:
      return state;
  }
}
