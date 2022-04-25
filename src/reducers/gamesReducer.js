const inititalState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  loading: true,
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
        loading: false,
      };
    case "LOADING_GAMES":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_GAMES_ERROR":
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gamesReducer;
