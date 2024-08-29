import React, { useEffect } from "react";
import NavContainer from "./NavContainer";
import PodcastsTileView from "./PodcastsTileView";
import Podcast from "./Podcast";
import Episode from "./Episode";
import Notepad from "./Notepad";
import { useDispatch, useSelector } from "react-redux";
import { getPodcasts } from "../actions/podcasts";
import { getGenres } from "../actions/genres";
import { getNotes } from "../actions/notes";

const Home = () => {
  const dispatch = useDispatch();
  const podcast = useSelector((state) => state.podcastReducer.podcast);
  const episode = useSelector((state) => state.episodeReducer.episode);
  const genres = useSelector((state) => state.genreReducer.genres);
  const showAllNotes = useSelector((state) => state.noteReducer.showAllNotes);

  useEffect(() => {
    const populateHome = () => {
      dispatch(getPodcasts());
      dispatch(getGenres());
      dispatch(getNotes());
    };

    populateHome();
  }, [dispatch]);

  return (
    <div className="home">
      <NavContainer genres={genres} />
      {podcast && !episode && <Podcast podcast={podcast} />}
      {podcast && episode && <Episode episode={episode} />}
      {!podcast && !showAllNotes && <PodcastsTileView />}
      {showAllNotes && <Notepad />}
    </div>
  );
};

export default Home;
