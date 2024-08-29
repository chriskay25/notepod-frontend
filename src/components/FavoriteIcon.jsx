import { motion } from "framer-motion";

const FavoriteIcon = () => {
  return (
    <div>
      <motion.svg
        className="episode-icon"
        style={{ overflow: "visible", cursor: 'pointer' }}
        viewBox="0 0 500 500"
        fill="#ffffff00"
        stroke="lightblue"
        strokeWidth="60px"
      >
        <motion.path
          d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303
        0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z"
        />
      </motion.svg>
    </div>
  );
};

export default FavoriteIcon;
