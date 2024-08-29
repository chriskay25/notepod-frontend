import { useState } from "react";
import { motion } from "framer-motion";

const NoteForm = ({ newNote, setShowForm }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newNote(content);
    setContent("");
    setShowForm(false);
  };

  return (
    <motion.form
      className="note-form"
      initial={{
        opacity: 0,
        scale: 0.2,
        y: "-75px",
        background: "var(--gray-background)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0, y: "75px" }}
      onSubmit={handleSubmit}
    >
      <textarea
        placeholder="New note..."
        value={content}
        onChange={handleChange}
      />
      <input className="notepad-buttons" type="submit" value="Add Note" />
    </motion.form>
  );
};

export default NoteForm;
