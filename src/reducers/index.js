import detailsReducer from "./detailsReducer";

const { combineReducers } = require("redux");
const { default: gamesReducer } = require("./gamesReducer");

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailsReducer,
});

export default rootReducer;
