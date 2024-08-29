export const genreReducer = (state = { genres: [], genre: null }, action) => {
  switch (action.type) {
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "GET_PODCASTS_BY_GENRE":
      return {
        ...state,
        genre: action.payload.genre,
      };
    case "SELECT_GENRE":
      return {
        ...state,
        genre: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        genres: [],
        genre: null,
      };
    default:
      return state;
  }
};
