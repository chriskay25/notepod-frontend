import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (err) {
    console.log("Error saving state to local storage: ", err);
  }
};

const getStateFromLocalStorage = () => {
  try {
    const state = localStorage.getItem("state");
    return state ? JSON.parse(state) : undefined;
  } catch (err) {
    console.log("Error retrieving state from local storage: ", err);
  }
};

let localState = getStateFromLocalStorage();

let store = createStore(
  rootReducer,
  localState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
export default store;
