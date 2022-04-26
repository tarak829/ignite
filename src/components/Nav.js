import React, { useState } from "react";
import logo from "../img/logo.svg";
//style
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { searchGames } from "../actions/gameAction";
import { fadeIn } from "../animations";

const Nav = () => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  const createRipple = (e) => {
    e.preventDefault();
    let btn = e.target;
    let boundingBox = btn.getBoundingClientRect();
    let x = e.clientX - boundingBox.left;
    let y = e.clientY - boundingBox.top;

    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    dispatch(searchGames(textInput));
    setTextInput("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
    console.log(textInput);
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt='logo' />
        <h1>Ignite</h1>
      </Logo>
      <form className='search'>
        <input value={textInput} onChange={handleChange} type='text' />
        <button onClick={createRipple}>Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 35%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 5px 0 0 5px;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  button {
    position: relative;

    border: none;
    border-radius: 0 5px 5px 0;
    padding: 0.5rem 1.5rem;
    background-color: #5175ff;

    color: white;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    /* line-height: 2rem; */

    cursor: pointer;
    outline: none;
    overflow: hidden;
    transition: 0.8s;
  }

  button:hover {
    background-color: #829cff;
  }

  .ripple {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;

    border-radius: 50%;
    background-color: white;

    pointer-events: none;
    opacity: 0.5;
    animation: ripple 0.4s linear;
  }

  @keyframes ripple {
    to {
      width: 15rem;
      height: 15rem;
      opacity: 0;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
