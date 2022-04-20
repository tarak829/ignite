const { default: axios } = require("axios");
const { popularGamesURL, upcomingGamesURL, newGamesURL } = require("../api");

export const loadGames = () => async (dispatch) => {
  try {
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popular: popularData.data.results,
        newGames: newGamesData.data.results,
        upcoming: upcomingData.data.results,
      },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_GAMES_ERROR",
      payload: {
        error: error.message,
      },
    });
  }
};
