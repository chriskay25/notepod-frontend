import { episodeDuration, episodeDate } from "../utils/utils";
import calendar from "../assets/blue-calendar.png";
import clock from "../assets/blue-clock.png";
import FavoriteIcon from "./FavoriteIcon";

const EpisodeHeader = ({
  episode,
  expanded,
  setExpanded,
  preview,
  noteMode,
}) => {
  const handleClick = () => {
    if (preview) setExpanded(!expanded);
  };
  return (
    <header
      className={`episode-header ${preview ? "preview" : ""} ${
        expanded ? "expanded" : ""
      } ${noteMode ? "note-mode" : ""}`}
      onClick={() => handleClick()}
    >
      <h4 className="episode-title">{episode.title}</h4>
      <div className="episode-icons-container">
        <div
          style={{
            marginRight: "20px",
            display: "flex",
          }}
        >
          <img className="episode-icon" src={calendar} alt="calendar" />
          <span>{episodeDate(episode.pub_date_ms)}</span>
        </div>
        <div style={{ display: "flex", marginRight: "20px" }}>
          <img className="episode-icon" src={clock} alt="clock" />
          <span>{episodeDuration(episode.audio_length_sec)}</span>
        </div>
        <FavoriteIcon />
      </div>
    </header>
  );
};

export default EpisodeHeader;
