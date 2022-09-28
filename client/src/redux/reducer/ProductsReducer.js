const initialState = {
  allProducts: [],
  products: [],
  detail: {}

};

export function products(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCTS_BY_ID":
      return {
        ...state,
        detail: action.payload
      }
      case 'REMOVE_DETAIL': 
      return {
          ...state,
          detail: {}
      }
/*        case 'FILTER_BY_CATEGORY':
        const allProd = state.allProducts
        const filtered = allProd.filter(e=> [e.category].includes(action.payload))
        const filteredDB= allProd.filter(e => {
          for(var i =0; i < e.categories?.length; i++){
            if(e.categories[i].name.includes(action.payload)){
              return true
            }
          }
          return false 
        })

        const concateFilter = filtered.concat(filteredDB)  
        return {
          ...state,
          allProducts: action.payload === 'all' ? state.categorys : concateFilter
        }   */
    default:
      return state;
  }
}


