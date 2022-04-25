const { default: axios } = require("axios");
const { gameDetailsURL, gameScreenShotURL } = require("../api");

export const loadDetails = (game_id) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAILS",
    });

    const gameDetailsData = await axios.get(gameDetailsURL(game_id));
    const screenShotData = await axios.get(gameScreenShotURL(game_id));

    dispatch({
      type: "GET_DETAILS",
      payload: {
        game: gameDetailsData.data,
        screen: screenShotData.data,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_DETAILS_ERROR",
      payload: {
        error: error.message,
      },
    });
  }
};
