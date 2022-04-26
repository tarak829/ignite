const base_url = "https://api.rawg.io/api/";

//RAWG_API_KEY
const api_Key = `?key=${process.env.REACT_APP_RAWG_API_KEY}`;

//Current Day/Month?year
const getCurrentMonth = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

const getCurrentDay = () => {
  const date = new Date();
  const day = date.getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games${api_Key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const new_games = `games${api_Key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;
const upcoming_games = `games${api_Key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}${api_Key}`;
export const gameScreenShotURL = (game_id) => `${base_url}games/${game_id}/screenshots${api_Key}`;
export const searchGameURL = (search_term) => `${base_url}games${api_Key}&search=${search_term}`;