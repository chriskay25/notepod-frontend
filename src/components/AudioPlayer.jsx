import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import { episodeDuration } from "../utils/utils";
import { motion } from "framer-motion";
const AudioPlayer = ({
  audioUrl,
  audioDuration,
  audioLengthSec,
  timeRef,
  noteMode,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(audioUrl));
  const intervalRef = useRef();

  const setTrackProgress = (t) => {
    timeRef.current = t;
    setProgress(t.toFixed(0));
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setProgress(0);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (val) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = val;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const skip = (val) => {
    let currentAudioRef = audioRef.current;
    const t = currentAudioRef.currentTime;
    clearInterval(intervalRef.current);
    currentAudioRef.currentTime = t + val;
    setTrackProgress(currentAudioRef.currentTime);
    if (isPlaying) {
      startTimer();
    }
  };

  useEffect(() => {
    audioRef.current.preload = "metadata";
    let currentAudioRef = audioRef.current;
    if (isPlaying) {
      currentAudioRef.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      currentAudioRef.pause();
    }

    return () => {
      currentAudioRef.pause();
      clearTimeout(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <motion.div
      layout
      className={`audio-player ${noteMode ? "note-mode" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AudioControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skip={skip}
      />
      <div className="audio-player-times">
        <span>{episodeDuration(progress)}</span>
        <span>{audioDuration}</span>
      </div>
      <input
        type="range"
        step="1"
        min="0"
        value={progress}
        max={
          audioRef.current.duration ? audioRef.current.duration : audioDuration
        }
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        style={{
          backgroundSize: (progress * 100) / audioLengthSec + "% 100%",
        }}
      />
    </motion.div>
  );
};

export default AudioPlayer;
