const initialState = {
    users: [],
    allUsers: [],
    user: '',
    compras: []
  };
  
  export function users(state = initialState, action) {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          users: action.payload,
          allUsers: action.payload,
        };

      case "GET_USER":
        return {
          ...state,
          user: action.payload
        };
        
        case "GET_COMPRAS":
        return {
          ...state,
          compras: action.payload
        };
  
      default:
        return state;
    }
  }