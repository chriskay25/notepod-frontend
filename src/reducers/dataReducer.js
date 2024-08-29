const initialState = {
  isFetching: false,
  dataFetched: false,
  error: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCHING_DATA_SUCCESS":
      return {
        ...state,
        isFetching: false,
      };
    case "FETCHING_DATA_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
