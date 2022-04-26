const { default: axios } = require("axios");
const { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } = require("../api");

export const loadGames = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_GAMES",
    });

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

export const searchGames = (searchTerm) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_GAMES",
    });

    const searchData = await axios.get(searchGameURL(searchTerm));
    dispatch({
      type: "SEARCH_GAMES",
      payload: {
        searched: searchData.data.results,
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
}