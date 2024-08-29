import { useState } from "react";
import { useDispatch } from "react-redux";
import { episodeDuration } from "../utils/utils";
import { editNote, deleteNote } from "../actions/notes";
import deleteIcon from "../assets/icons8-delete-48.png";
import editIcon from "../assets/note-icon-gray.png"


const Note = ({ note }) => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const handleContentChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleNoteEdit = (e) => {
    const payload = {
      note: note,
      content: userInput,
    }
    dispatch(editNote(payload))
  }

  return (
    <li
      className="note"
      style={{
        background: "white",
        color: "black",
        // padding: "8px",
        marginBottom: "5px",
        borderRadius: "2px",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.8)",
        display: "flex",
        overflow: 'visible',
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "6px",
          width: "20%",
          maxWidth: "80px",
          background: "lightsteelblue",
          color: "white",
          fontWeight: "800",
          fontSize: "1.1rem",
        }}
      >
        {episodeDuration(note.attributes.episodeTimestamp)}
        <span 
          style={{
            display: "inline-block", 
            padding: "0 3px",
          }}
        >
          <img onClick={() => dispatch(deleteNote(note.id))} className="episode-icon" src={deleteIcon} alt="delete-icon" />
          <img className="episode-icon" src={editIcon} alt="edit-icon" />
        </span>
      </div>
      <div
        style={{
          padding: "6px",
          width: "80%",
          // maxHeight: "2.5rem",
          // overflow: "hidden",
          // textOverflow: "ellipsis",
          // whiteSpace: "nowrap",
        }}
      >
        {note.attributes.content}
      </div>
    </li>
  );
};

export default Note;
