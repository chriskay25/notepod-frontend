export const userReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
