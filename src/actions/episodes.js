export const selectEpisode = (episode) => {
  return (dispatch) => {
    dispatch({ type: "SELECT_EPISODE", payload: episode });
  };
};
