const initialState = {
  allProducts: [],
  products: [],
  detail: {},
  filtered: [],
  pages: 1,
  reviews: [],
  favorite: [],
};

export function products(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        filtered: action.payload,
      };

    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        pages: 1,
      };
    case "GET_PRODUCTS_BY_ID":
      return {
        ...state,
        detail: action.payload
      }
      case "GET_REVIEWS_BY_PRODUCT":
        return {
          ...state,
          reviews: action.payload
        }
      case 'REMOVE_DETAIL': 
      return {
        ...state,
        detail: {},
      };
    case "GET_PRODUCTS_BY_BRAND":
      return {
        ...state,
        allProducts: action.payload,
        pages: 1,
      };
    case "FILTER_BY_CATEGORY":
      const allProd = state.allProducts;
      const filtered = allProd.filter((e) =>
        [e.category].includes(action.payload)
      );
      return {
        ...state,
        allProducts: action.payload === "all" ? state.products : filtered,
      };

    case "FILTER_BY_BRAND":
      const productsAll = state.allProducts;
      const filteredBrand = productsAll.filter((e) =>
        [e.brand].includes(action.payload)
      );
      return {
        ...state,
        allProducts: action.payload === "all" ? state.products : filteredBrand,
      };
    case "CURRENT_PAGES":
      return {
        ...state,
        pages: action.payload,
      };
    case "REMOVE_FILTERS":
      return {
        ...state,
        allProducts: state.products,
      };
    case "IMAGE_POST":
      return {
        ...state,
      };
      case 'ADD_FAV':
        return {
          ...state,
          favorite: action.payload,
        };
      case 'DELETE_FAV':
        return {
          ...state,
          favorite: action.payload,
        };
        case 'GET_FAV':
        return {
          ...state,
          favorite: action.payload,
        };
    default:
      return state;
  }
}
