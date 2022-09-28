const initialState = {
    categorys: [],
}


export function categorys(state = initialState, action) {
    switch (action.type) {
      case "GET_CATEGORYS":
        return {
          ...state,
          categorys: action.payload,
        };
  
      default: 
        return {...state}
    }
  }