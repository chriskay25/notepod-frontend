import { useSelector } from "react-redux";
import PodcastPreview from "./PodcastPreview";
import Spinner from "./Spinner";
import PageNav from "./PageNav";

const PodcastsTileView = () => {
  const isFetching = useSelector((state) => state.dataReducer.isFetching);
  const podcasts = useSelector((state) => state.podcastReducer.podcasts);
  const genre = useSelector((state) => state.genreReducer.genre);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1230px",
        height: "100%",
        margin: "0 auto",
      }}
    >
      {isFetching ? (
        <Spinner />
      ) : (
        <div style={{ padding: "1.5rem 0" }}>
          <h3
            style={{
              color: "var(--gray-text)",
              fontWeight: 500,
              margin: "8px 0 0 8px",
              fontSize: "2rem",
            }}
          >
            {genre ? genre.name : "Popular"}
          </h3>
          <ul className="podcast-preview-tiles">
            {podcasts && podcasts.map((pod) => (
              <PodcastPreview key={pod.id} data={pod} />
            ))}
          </ul>
          <PageNav />
        </div>
      )}
    </div>
  );
};

export default PodcastsTileView;
