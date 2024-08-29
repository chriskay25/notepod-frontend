import { motion } from "framer-motion";
import swapIcon from "../assets/swap-icon.png";

const EpisodeCenterHeader = ({
  element,
  cycleElement,
  showForm,
  setShowForm,
}) => {
  const toggleContent = () => {
    if (element === "DESCRIPTION") {
      cycleElement();
    }
    setShowForm(!showForm);
  };

  return (
    <motion.header
      layout
      style={{
        position: "relative",
        marginTop: "10px",
        padding: "0 10px",
        height: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid var(--gray-text)",
      }}
    >
      <motion.h2
        layout
        style={{
          color: "var(--gray-text)",
          fontWeight: 500,
          fontSize: "2.2rem",
          lineHeight: "2.2rem",
        }}
      >
        {element}
      </motion.h2>
      <motion.div style={{ display: "flex", height: "2.2rem" }}>
        <button className="notepad-buttons" onClick={() => toggleContent()}>
          {showForm ? "View Notes" : "New Note"}
        </button>
        <motion.button
          layout
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "2.2rem",
            width: "2.2rem",
            marginLeft: "8px",
            cursor: "pointer",
            borderRadius: "50%",
            padding: ".4rem",
            background: "#000",
          }}
          whileHover={{
            background: "var(--gray-text)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.img
            style={{ width: "100%" }}
            layout
            src={swapIcon}
            alt="info-icon"
            onClick={() => cycleElement()}
          />
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default EpisodeCenterHeader;
