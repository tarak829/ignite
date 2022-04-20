const inititalState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  loading: false,
  error: null,
};

const gamesReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: payload.popular,
        newGames: payload.newGames,
        upcoming: payload.upcoming,
      };
    case "FETCH_GAMES_ERROR":
      return {
        ...state,
        error: payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gamesReducer;
