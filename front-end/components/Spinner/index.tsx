import React from "react";
import styled, { ThemeConsumer } from "styled-components";

//stlye
import { spinner } from "styles/animation";

const Spinner = () => {
  return <ThemeConsumer>{() => <Spin />}</ThemeConsumer>;
};

export default Spinner;

const Spin = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border: 10px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: #eeeeee;
  /* background-color: #3c81ef; */
  transition: opacity 250ms;
  animation: ${spinner} 1s linear;
  animation-iteration-count: infinite;
`;
