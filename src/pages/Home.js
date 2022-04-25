import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
import Game from "../components/Game";
// styling
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popular, upcoming, newGames, loading } = useSelector((state) => state.games); // get the games from the store

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <PuffLoader color='orangered' loading={loading} css={override} size={150} />
      ) : (
        <GameList>
          <AnimateSharedLayout>
            <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
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
          </AnimateSharedLayout>
        </GameList>
      )}
    </>
  );
};

const override = css`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  ${"" /* border-color: #36D7B7; */}
`;
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
