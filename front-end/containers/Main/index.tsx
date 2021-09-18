import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

//components
import { Container } from "components/Container";

//containers
import Korea from "containers/Korea";
import World from "containers/World";

//store
import MainStore from "stpres/main";

const Main = observer(() => {
  useEffect(() => {
    MainStore.reset();
  }, []);

  return (
    <Container>
      <Wrap>
        {!MainStore.isShow && <Korea />}
        {MainStore.isShow && <World />}
      </Wrap>
    </Container>
  );
});

export default Main;

const Wrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;
