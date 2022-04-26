import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import { loadDetails } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const stringPathId = id.toString();

  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <StyledGames variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    display: block;
  }
`;

export default Game;
