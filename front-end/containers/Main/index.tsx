import React from "react";
import styled from "styled-components";

//components
import { Container } from "components/Container";

//container
import KoreaMonth from "containers/Korea/Month";

const Main = () => {
  return (
    <Container>
      <Wrap>
        <h3>Korea Per Month Data</h3>
        <KoreaMonth />
      </Wrap>
    </Container>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100%;
  /* margin-top: 50px; */
  text-align: center;
`;
