const initialState = {
  game: {},
  screen: {},
  error: null,
};

const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DETAILS":
      return {
        ...state,
        game: payload.game,
        screen: payload.screen
      };
    case "GET_DETAILS_ERROR":
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

export default detailsReducer;
