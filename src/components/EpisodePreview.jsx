import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import EpisodeHeader from "./EpisodeHeader";
import EpisodeDescription from "./EpisodeDescription";
import noteIcon from "../assets/note-icon-gray.png";
import { episodeDuration } from "../utils/utils";
import { useDispatch } from "react-redux";
import { selectEpisode } from "../actions/episodes";
import { motion } from "framer-motion";
const EpisodePreview = ({ episode }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(null);

  return (
    <motion.li
      layout
      className={`episode-preview ${expanded ? "expanded" : ""}`}
    >
      <button
        className="expand-contract-bttn"
        onClick={() => dispatch(selectEpisode(episode))}
      >
        <img src={noteIcon} alt="note-icon" className="note-icon" />
      </button>
      <EpisodeHeader
        episode={episode}
        expanded={expanded}
        setExpanded={setExpanded}
        preview
      />
      <EpisodeDescription
        description={episode.description}
        expanded={expanded}
        setExpanded={setExpanded}
        preview
      />
      {/* {expanded && ( */}
      <AudioPlayer
        audioUrl={episode.audio}
        audioDuration={episodeDuration(episode.audio_length_sec)}
        audioLengthSec={episode.audio_length_sec}
      />
      {/* )} */}
    </motion.li>
  );
};

export default EpisodePreview;
