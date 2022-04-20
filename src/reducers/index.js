const { combineReducers } = require("redux");
const { default: gamesReducer } = require("./gamesReducer");

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
