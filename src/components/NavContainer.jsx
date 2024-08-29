import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre } from "../actions/genres";
import { getPodcasts } from "../actions/podcasts.js";
import { logout } from "../actions/users";
import { navToggle } from "../actions/ui";
import { showAllNotes } from "../actions/notes";

const NavContainer = ({ genres }) => {
  const dispatch = useDispatch();
  const navIsOpen = useSelector((state) => state.uiReducer.navIsOpen);

  useEffect(() => {
    // Close nav on logout
    return () => {
      dispatch(navToggle(false));
    };
  }, [dispatch]);

  const handleHomeClick = () => {
    dispatch({ type: "HOME_CLICK", payload: null });
    dispatch(showAllNotes(false));
  }

  const handleGenreClick = (genreId) => {
    dispatch(selectGenre(genreId));
    dispatch(getPodcasts({ genreId: genreId }));
  };

  const handleNotesClick = () => {
    dispatch(navToggle(false));
    dispatch(showAllNotes(true));
  }

  return (
    <nav className={`nav-container ${navIsOpen ? "open" : "closed"}`}>
      <div className="nav-section">
        <h2>PROFILE</h2>
        <ul className="nav-list">
          <li onClick={() => handleHomeClick()}>Home</li>
          <li onClick={() => handleNotesClick()}>Notes</li>
          <li onClick={() => dispatch(logout())}>Logout</li>
        </ul>
      </div>
      <div className="nav-section" style={{ marginTop: "20px" }}>
        <h2>GENRES</h2>
        <ul className="nav-list">
          {genres &&
            genres.map((genre) => (
              <li key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                {genre.name}
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavContainer;
