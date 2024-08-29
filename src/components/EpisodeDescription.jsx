import { motion } from "framer-motion";

const EpisodeDescription = ({
  description,
  expanded,
  setExpanded,
  preview,
  noteMode,
}) => {
  const handleClick = () => {
    if (preview) setExpanded(!expanded);
  };

  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <motion.div
        dangerouslySetInnerHTML={{ __html: description }}
        className={`episode-description ${preview ? "preview" : ""} ${
          expanded ? "expanded" : ""
        } ${noteMode ? "note-mode" : ""}`}
        onClick={() => handleClick()}
      ></motion.div>
    </div>
  );
};

export default EpisodeDescription;
