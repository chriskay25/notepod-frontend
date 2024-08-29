import { useDispatch, useSelector } from "react-redux";
import { getPodcasts } from "../actions/podcasts";

const PageNav = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.podcastReducer.page);
  const genre = useSelector((state) => state.genreReducer.genre);

  const numberOfPages = useSelector((state) =>
    Math.ceil(state.podcastReducer.numberOfPages)
  );

  const numArray = Array.from(
    { length: numberOfPages },
    (value, index) => index + 1
  );

  const updatePodcasts = (newPage) => {
    let data = { pageNumber: newPage, genreId: genre ? genre.id : "" };
    dispatch(getPodcasts(data));
  };

  return (
    <div>
      <div style={{ width: "100%", padding: "1rem" }}>
        <div style={{ marginBottom: "8px" }}>
          {page > 1 && (
            <button
              style={{
                border: "2px solid black",
                padding: "3px 5px",
                marginRight: "8px",
                fontWeight: "800",
              }}
              onClick={() => updatePodcasts(page - 1)}
            >
              Prev
            </button>
          )}
          {page < numberOfPages && (
            <button
              style={{
                border: "2px solid black",
                padding: "3px 5px",
                fontWeight: "800",
              }}
              onClick={() => updatePodcasts(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <ul style={{ display: "flex", overflow: "auto" }}>
          {numArray.map((num) => (
            <li
              key={num}
              style={{
                marginRight: "3px",
                fontSize: num === page ? "1.2rem" : "1rem",
                color: num === page ? "blue" : "black",
                cursor: "pointer",
              }}
              onClick={() => updatePodcasts(num)}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageNav;
