import { useDispatch, useSelector } from "react-redux";
import { navToggle } from "../actions/ui";

const Hamburger = () => {
  const dispatch = useDispatch();
  const navIsOpen = useSelector((state) => state.uiReducer.navIsOpen);

  const toggleNav = (bool) => {
    dispatch(navToggle(bool));
  };

  return (
    <span className="nav-hamburger" onClick={() => toggleNav(!navIsOpen)}>
      <svg
        width="40px"
        height="40px"
        strokeWidth="2px"
        stroke={navIsOpen ? "#000" : "#fff"}
        strokeLinecap="round"
      >
        <path d={navIsOpen ? "m 0 10, 25 20" : "m 0 10, 25 0"} />
        <path d="m 0 18, 25 0" style={{ opacity: navIsOpen ? 0 : 1 }} />
        <path d={navIsOpen ? "m 0 30, 25 -20" : "m 0 26, 25 0"} />
      </svg>
    </span>
  );
};

export default Hamburger;
