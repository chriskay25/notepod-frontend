export const navToggle = (bool) => {
  return (dispatch) => {
    dispatch({ type: "NAV_TOGGLE", payload: bool });
  };
};

export const loadingStatus = (status) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_STATUS", payload: status });
  };
};
