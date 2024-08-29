import { useSelector } from "react-redux";
import NoteForm from "./NoteForm";
import Note from "./Note";
import { motion, AnimatePresence } from "framer-motion";

const Notepad = ({ newNote, showForm, setShowForm }) => {
  const episode = useSelector((state) => state.episodeReducer.episode);
  const notes = useSelector((state) => state.noteReducer.notes);

  const isEmpty = () => {
    if (episode) {
      let filtered = notes.filter(
        (note) => note.attributes.episodeApiId === episode.id
      );
      return !filtered.length;
    } else {
      return !notes.length;
    }
  };

  return (
    <div className="notepad">
      <AnimatePresence exitBeforeEnter>
        {showForm ? (
          <NoteForm
            key={1}
            newNote={newNote}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        ) : (
          <motion.ul
            key={2}
            initial={{
              opacity: 0,
              height: "100%",
              scale: 0.2,
              y: "-75px",
              borderRadius: "5px",
              padding: "10px",
              background: "var(--gray-background)",
              color: "white",
              overflowY: "auto",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              height: "100%",
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0, y: "75px" }}
          >
            {notes && isEmpty() && (
              <div style={{ color: "black", fontSize: "35px" }}>
                Notepad is empty.
              </div>
            )}
            {notes && episode &&
              notes
                .filter((note) => note.attributes.episodeApiId === episode.id)
                .map((note) => <Note key={note.id} note={note} />
            )}
            {notes && !episode && 
              notes.map((note) => <Note key={note.id} note={note} />
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notepad;
