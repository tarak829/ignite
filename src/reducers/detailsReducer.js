const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  error: null,
  isLoading: true,
};

const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DETAILS":
      return {
        ...state,
        game: payload.game,
        screen: payload.screen,
        isLoading: false,
      };
    case "GET_DETAILS_ERROR":
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailsReducer;
