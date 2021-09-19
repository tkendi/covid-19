import React from "react";
import styled, { ThemeConsumer } from "styled-components";

//api
import { getKoreaMonth } from "api/Korea/Get";

const KoreaMonth = () => {
  console.log(getKoreaMonth());
  return (
    <ThemeConsumer>{(theme) => <Wrap>{/* <Bar /> */}</Wrap>}</ThemeConsumer>
  );
};

export default KoreaMonth;

const Wrap = styled.div``;
