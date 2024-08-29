export const uiReducer = (state = { navIsOpen: false }, action) => {
  switch (action.type) {
    case "NAV_TOGGLE":
      return {
        ...state,
        navIsOpen: action.payload,
      };
    case "HOME_CLICK":
      return {
        ...state,
        navIsOpen: false,
      };
    case "LOGOUT":
      return {
        ...state,
        navIsOpen: false,
      };
    default:
      return state;
  }
};
