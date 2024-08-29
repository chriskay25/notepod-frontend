import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { episodeDuration } from "../utils/utils";
import EpisodeHeader from "./EpisodeHeader";
import AudioPlayer from "./AudioPlayer";
import EpisodeCenter from "./EpisodeCenter";
import { selectEpisode } from "../actions/episodes";
import { createNote } from "../actions/notes";
import close from "../assets/close-icon.png";
const Episode = ({ episode }) => {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const podcast = useSelector((state) => state.podcastReducer.podcast);
  const timeRef = useRef();
  const dispatch = useDispatch();

  const newNote = (content) => {
    timeRef.current = timeRef.current ? timeRef.current.toFixed(0) : 0;
    dispatch(
      createNote({
        content: content,
        user_id: currentUser.id,
        podcast_api_id: podcast.id,
        episode_api_id: episode.id,
        episode_timestamp: timeRef.current,
      })
    );
  };

  return (
    <div className="episode">
      <button
        className="expand-contract-bttn"
        onClick={() => dispatch(selectEpisode(null))}
      >
        <img src={close} alt="close-icon" className="note-icon" />
      </button>
      <EpisodeHeader episode={episode} noteMode />
      <EpisodeCenter description={episode.description} newNote={newNote} />
      <AudioPlayer
        audioUrl={episode.audio}
        audioDuration={episodeDuration(episode.audio_length_sec)}
        audioLengthSec={episode.audio_length_sec}
        timeRef={timeRef}
        noteMode
      />
    </div>
  );
};

export default Episode;
