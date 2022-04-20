import React, { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gameAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>Welcome to Ignite</h1>
    </div>
  );
};

export default Home;

