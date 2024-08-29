const editUpdate = (notes, noteId, editedNote) => {
  const updatedNotes = notes.map((note) => {
    if (note.id !== noteId) return note;
    return editedNote
  })
  return updatedNotes;
};

const deleteUpdate = (notes, noteId) => {
  const updatedNotes = notes.filter((note) => {
    if (note.id !== noteId) return note;
  });
  return updatedNotes;
};

export const noteReducer = (state = { notes: [], showAllNotes: false }, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    case "CREATE_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "EDIT_NOTE":
      let note = action.payload;
      const editedNotes = editUpdate(state.notes, note.id, note);
      return {
        ...state,
        notes: editedNotes,
      };
    case "DELETE_NOTE":
      let noteId = action.payload;
      const updatedNotes = deleteUpdate(state.notes, noteId)
      return {
        ...state,
        notes: updatedNotes,
      };
    case "SHOW_ALL_NOTES":
      return {
        ...state,
        showAllNotes: action.payload,
      };
    default:
      return state;
  }
};
