export const getGenres = () => async (dispatch) => {
  // If genres in local storage, set state from there instead of making API req
  let state = localStorage.getItem("state");
  let parsedState = state ? JSON.parse(state) : "";
  if (parsedState && parsedState.genreReducer.genres.length > 0) {
    dispatch({
      type: "GET_GENRES",
      payload: parsedState.genreReducer.genres,
    });
  } else {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/search?type=genres"
      );
      const data = await response.json();
      dispatch({ type: "GET_GENRES", payload: data.genres });
    } catch (err) {
      console.log(err);
    }
  }
};

export const selectGenre = (genreId) => {
  let state = localStorage.getItem("state");
  let parsedState = state ? JSON.parse(state) : "";
  let genre;
  if (parsedState && parsedState.genreReducer.genres.length > 0) {
    genre = parsedState.genreReducer.genres.find((g) => g.id === genreId);
  }
  return (dispatch) => {
    dispatch({ type: "SELECT_GENRE", payload: genre });
  };
};
