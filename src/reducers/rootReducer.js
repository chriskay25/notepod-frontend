import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { podcastReducer } from "./podcastReducer";
import { genreReducer } from "./genreReducer";
import { episodeReducer } from "./episodeReducer";
import { noteReducer } from "./noteReducer";
import { uiReducer } from "./uiReducer";
import { dataReducer } from "./dataReducer";

export default combineReducers({
  userReducer,
  podcastReducer,
  genreReducer,
  episodeReducer,
  noteReducer,
  uiReducer,
  dataReducer,
});
