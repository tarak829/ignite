import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail);

  return (
    <CardShadow>
      <Detail>
        <div className='stats'>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platforms'>
              {game.platforms.map((data) => {
                return <h3 key={data.platform.id}>{data.platform.name}</h3>;
              })}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src={game.background_image} alt="game_background" />
        </div>
        <div className='description'>
          <p>{game.description_raw}</p>
        </div>
        <div className='gallery'>
          {screen.results.map((screen) => {
            return <img src={screen.image} key={screen.id} alt="game_screenshot" />;
          })}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 10px;
  padding: 2rem 20rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  img{
    width: 100%;
  }
`;

export default GameDetail;
