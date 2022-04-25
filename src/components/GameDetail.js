import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
import PlayStation from "../img/playstation.svg";
import Xbox from "../img/xbox.svg";
import MacOS from "../img/apple.svg";
import iOS from "../img/ios.svg";
import Android from "../img/android.svg";
import Windows from "../img/windows.svg";
import Linux from "../img/linux.svg";
import Gamepad from "../img/gamepad.svg";
import Nintendo from "../img/nintendo.svg";
import halfStar from "../img/star-half.svg";
import fullStar from "../img/star.svg";
import emptyStar from "../img/star-empty.svg";

const GameDetail = ({ pathId }) => {
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  const navigate = useNavigate();

  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  const gamePlatforms = (platforms) => {
    let platformList = [];
    platforms.map((platform) => {
      return platformList.push(platform.platform.name);
    });
    // check if playstation 4 and playstation 5 are in the list
    if (platformList.includes("PlayStation 4") && platformList.includes("PlayStation 5")) {
      platformList.splice(platformList.indexOf("PlayStation 4"), 1);
    }
    // check if Xbox Series S/X and Xbox One are in the list
    if (platformList.includes("Xbox Series S/X") && platformList.includes("Xbox One")) {
      platformList.splice(platformList.indexOf("Xbox Series S/X"), 1);
    }
    // check if Nintendo Switch and Nintendo 3DS are in the list
    if (platformList.includes("Nintendo Switch") && platformList.includes("Nintendo 3DS")) {
      platformList.splice(platformList.indexOf("Nintendo 3DS"), 1);
    }

    return platformList;
  };

  const getStar = (rating) => {
    let star = [];
    for (let i = 1; i <= rating; i++) {
      star.push(<img src={fullStar} alt="full star" />);
    }
    if (rating % 1 !== 0) {
      star.push(<img src={halfStar} alt="half star" />);
    }
    for (let i = 1; i <= 5 - rating; i++) {
      star.push(<img src={emptyStar} alt="empty star" />);
    }
    return star;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return PlayStation;
      case "PlayStation 5":
        return PlayStation;
      case "Xbox One":
        return Xbox;
      case "Xbox Series S/X":
        return Xbox;
      case "Nintendo Switch":
        return Nintendo;
      case "Nintendo 3DS":
        return Nintendo;
      case "iOS":
        return iOS;
      case "macOS":
        return MacOS;
      case "Linux":
        return Linux;
      case "Android":
        return Android;
      case "PC":
        return Windows;
      default:
        return Gamepad;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                <div className='star'>{getStar(game.rating)}</div>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gamePlatforms(game.platforms).map((platform) => (
                    <img src={getPlatform(platform)} alt={getPlatform(platform)} />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt='game_background'
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className='gallery'>
              {screen.results.map((screen) => {
                return <img src={smallImage(screen.image, 1280)} key={screen.id} alt='game_screenshot' />;
              })}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  z-index: 5;
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
  z-index: 10;
  width: 80%;
  border-radius: 10px;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .star {
    width: 1.5rem;
    display: flex;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  align-items: center;
  img:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* height: 75vh;
    object-fit: cover;
    object-position: top; */
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
