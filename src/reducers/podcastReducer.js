export const podcastReducer = (
  state = {
    podcasts: [],
    podcast: null,
    page: 1,
    numberOfPages: 1,
  },
  action
) => {
  switch (action.type) {
    case "GET_PODCASTS":
      return {
        ...state,
        podcasts: action.payload.podcasts,
        page: action.payload.page,
        numberOfPages: action.payload.numberOfPages,
      };
    case "GET_PODCASTS_BY_GENRE":
      return {
        ...state,
        podcasts: action.payload.podcasts,
        // genre: action.payload.genre,
      };
    case "GET_PODCAST":
      return {
        ...state,
        podcast: action.payload,
      };
    case "HOME_CLICK":
      return {
        ...state,
        podcast: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        podcasts: [],
        podcast: null,
      };
    default:
      return state;
  }
};
