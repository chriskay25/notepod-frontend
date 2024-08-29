export const createNote = (noteData) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let note = noteData;
  if (token) {
    try {
      const response = await fetch("http://localhost:3000/api/v1/notes", {
        headers: { "Content-Type": "application/json", Authorization: token },
        method: "post",
        body: JSON.stringify({ note }),
      });
      const data = await response.json();
      if (data.data) {
        dispatch({ type: "CREATE_NOTE", payload: data.data });
      } else {
        console.log("data.errors: ", data.errors);
        alert(data.errors);
      }
    } catch (err) {
      alert("Your note did not save.");
      console.log("An error ocurred while trying to create note: ", err);
    }
  }
};

export const editNote = (noteData) => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/notes/${noteData.id}`,
        {
          headers: {"Content-Type": "application/json", Authorization: token },
          method: "put",
          body: JSON.stringify({ note: noteData})
        }
      )
      const data = await response.json();
      if (!data.error) {
        dispatch({ type: "UPDATE_NOTE", payload: data});
      } else {
        console.log("Something went wrong while editing note: ", data)
      }
    } catch (err) {
      alert("Note couldn't be edited, sorry. ", err);
    }
  }
}

export const deleteNote = (noteId) => async (dispatch) => {
  let token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
        headers: { "Content-Type": "application/json", Authorization: token },
        method: "DELETE",
      });
      const data = await response.json();
      if (data.status === "ok") {
        console.log("Deleted note return data: ", data);
        dispatch({ type: "DELETE_NOTE", payload: noteId });
      } else {
        console.log("Note wasn't able to be deleted");
      }
    } catch (err) {
      alert("An error occurred while trying to delete your note");
      console.log("Error while deleting note: ", err)
    }
  }
}

export const getNotes = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch("http://localhost:3000/api/v1/notes", {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const data = await response.json();
      if (data.data) {
        dispatch({ type: "GET_NOTES", payload: data.data });
      } else {
        alert("Couldn't get notes");
      }
    } catch (err) {
      console.log("An error occurred while trying to fetch notes: ", err);
    }
  }
};

export const showAllNotes = (bool) => {
  return (dispatch) => {
    dispatch({ type: "SHOW_ALL_NOTES", payload: bool });
  };
};
