import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import { loadDetails } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <StyledGames onClick={loadDetailsHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;