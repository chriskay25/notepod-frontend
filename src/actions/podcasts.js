import { getData, getDataSuccess, getDataFailure } from "./data";

export const getPodcasts = (data) => async (dispatch) => {
  let pageNumber = data && data.pageNumber ? data.pageNumber : 1;
  let genreId = data && data.genreId ? data.genreId : "";

  // If podcasts are in local storage, set state from there instead of making API req
  let state = localStorage.getItem("state");
  let parsedState = state ? JSON.parse(state) : "";
  if (
    parsedState &&
    parsedState.podcastReducer.podcasts.length > 0 &&
    !pageNumber
  ) {
    dispatch({
      type: "GET_PODCASTS",
      payload: parsedState.podcastReducer.podcasts,
    });
  } else {
    try {
      dispatch(getData());
      const response = await fetch(
        `http://localhost:3000/api/v1/search?type=popular&page_number=${pageNumber}&genre_id=${genreId}`
      );
      const data = await response.json();
      console.log("getPodcasts response: ", data);
      await dispatch({
        type: "GET_PODCASTS",
        payload: {
          podcasts: data.podcasts,
          page: pageNumber,
          numberOfPages: data.total / 20,
        },
      });
      await dispatch(getDataSuccess());
    } catch (err) {
      dispatch(getDataFailure());
      console.log(err);
    }
  }
};

export const getPodcast = (podcastId) => async (dispatch) => {
  try {
    dispatch(getData());
    const response = await fetch(
      `http://localhost:3000/api/v1/search?type=podcast&podcast_id=${podcastId}`
    );
    const data = await response.json();
    dispatch({ type: "GET_PODCAST", payload: data });
    dispatch(getDataSuccess());
  } catch (err) {
    dispatch(getDataFailure());
    console.log(err);
  }
};

export const getPodcastsByGenre = (genre) => async (dispatch) => {
  try {
    dispatch(getData());
    const response = await fetch(
      `http://localhost:3000/api/v1/search?type=popular&genre_id=${genre.id}`
    );
    const data = await response.json();
    dispatch({
      type: "GET_PODCASTS_BY_GENRE",
      payload: { podcasts: data.podcasts, genre: genre },
    });
    dispatch(getDataSuccess());
  } catch (err) {
    dispatch(getDataFailure());
    console.log(err);
  }
};