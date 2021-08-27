import React, { useEffect } from "react";
import styled from "styled-components";

//api
import { getKorea } from "api/Korea/Get";
import { getWorld } from "api/World/Get";

//components
import { Container } from "components/Container";

const Main = () => {
  useEffect(() => {
    console.log(getKorea());
    console.log(getWorld());
  }, []);
  return (
    <Container>
      <Wrap></Wrap>
    </Container>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100%;
`;
