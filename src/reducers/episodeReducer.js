export const episodeReducer = (state = { episode: null }, action) => {
  switch (action.type) {
    case "SELECT_EPISODE":
      return {
        ...state,
        episode: action.payload,
      };
    case "HOME_CLICK":
      return {
        ...state,
        episode: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        episode: null,
      };
    default:
      return state;
  }
};
