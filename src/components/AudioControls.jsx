import PlayPauseButton from "./PlayPauseButton";
import JumpButton from "./JumpButton";

const AudioControls = ({ isPlaying, setIsPlaying, skip }) => {
  return (
    <div className="audio-controls">
      <JumpButton direction="back" skip={skip} />
      <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <JumpButton direction="forward" skip={skip} />
    </div>
  );
};

export default AudioControls;
