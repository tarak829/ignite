import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
import Game from "../components/Game";
// styling
import styled from "styled-components";
import { motion } from "framer-motion";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const dispatch = useDispatch();
  const { popular, upcoming, newGames } = useSelector((state) => state.games); // get the games from the store

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <GameList>
      <GameDetail />
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    text-align: center;
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
`;

export default Home;
