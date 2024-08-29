export const getData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_DATA" });
  };
};

export const getDataSuccess = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_DATA_SUCCESS" });
  };
};

export const getDataFailure = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_DATA_FAILURE" });
  };
};
