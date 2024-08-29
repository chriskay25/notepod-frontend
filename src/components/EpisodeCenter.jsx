import { useState } from "react";
import EpisodeDescription from "./EpisodeDescription";
import Notepad from "./Notepad";
import EpisodeCenterHeader from "./EpisodeCenterHeader";
import { motion, AnimatePresence, useCycle } from "framer-motion";

const EpisodeCenter = ({ newNote, description }) => {
  const [element, cycleElement] = useCycle("DESCRIPTION", "NOTEPAD");
  const [showForm, setShowForm] = useState(true);

  return (
    <motion.div className="episode-center">
      <EpisodeCenterHeader
        element={element}
        cycleElement={cycleElement}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          layout
          key={element}
          initial={{ y: "-75px", scale: 0 }}
          animate={{ y: 0, scale: 1, transition: { duration: 0.2 } }}
          exit={{ y: "100px", scale: 0, transition: { duration: 0.2 } }}
          style={{
            height: "calc(100% - 50px)",
            width: "100%",
            padding: "10px",
            color: "var(--gray-text)",
            overflow: "hidden",
          }}
        >
          {element === "DESCRIPTION" ? (
            <EpisodeDescription description={description} noteMode />
          ) : (
            <Notepad
              newNote={newNote}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default EpisodeCenter;
