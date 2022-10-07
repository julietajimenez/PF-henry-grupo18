const initialState = {
    users: [],
    allUsers: []
  };
  
  export function users(state = initialState, action) {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          users: action.payload,
          allUsers: action.payload,
        };
      case "CONFIRMATION_MAIL":
      return {
        ...state,
      };
      default:
        return state;
    }
  }