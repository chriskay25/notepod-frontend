import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getPodcast } from "../actions/podcasts";

const PodcastPreview = ({ data }) => {
  const [info, showInfo] = useState(false);
  const dispatch = useDispatch();

  return (
    <motion.li
      style={{ position: "relative", overflow: "hidden" }}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.3, type: "spring", damping: 30 },
      }}
    >
      <div className="podcast-preview">
        <div className="front" onClick={() => dispatch(getPodcast(data.id))}>
          <img src={data.image} alt="podcast cover" />
        </div>

        <div className={`info ${info ? "visible" : ""}`}>
          <h2 style={{ textTransform: "uppercase", marginBottom: "10px" }}>
            {data.title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
      <button
        style={{
          border: "4px solid black",
          backgroundColor: "white",
          color: "black",
          borderRadius: "50%",
          width: "2rem",
          height: "2rem",
          position: "absolute",
          bottom: "10px",
          right: "10px",
          fontWeight: "800",
          fontSize: "1.2rem",
        }}
        onClick={() => showInfo(!info)}
      >
        i
      </button>
    </motion.li>
  );
};

export default PodcastPreview;
