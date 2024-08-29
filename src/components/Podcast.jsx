import EpisodePreview from "./EpisodePreview";
import { motion } from "framer-motion";

const Podcast = ({ podcast }) => {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="podcast">
        <div className="podcast-header-container">
          <div className="podcast-header-image">
            <img src={podcast.thumbnail} alt="podcast-thumbnail" />
          </div>
          <div className="podcast-header-text">
            <div className="podcast-header-title">
              <h2>{podcast.title}</h2>
            </div>
            <p
              className="podcast-header-description"
              dangerouslySetInnerHTML={{ __html: podcast.description }}
            ></p>
          </div>
        </div>
        <div>
          <ul>
            {podcast.episodes.map((episode) => (
              <EpisodePreview key={episode.id} episode={episode} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Podcast;
