import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

//components
import { Container } from "components/Container";

//store
import MainStore from "stpres/main";

const Header = observer(() => {
  return (
    <Nav>
      <CustomContainer>
        <Wrap>
          <Title>COVID</Title>
          <MenuWrap>  
            <Menu onClick={() => (MainStore.isShow = false)}>
              <LinkTitle>Korea</LinkTitle>
            </Menu>
            <Menu onClick={() => (MainStore.isShow = true)}>
              <LinkTitle>World</LinkTitle>  
            </Menu>
          </MenuWrap>
        </Wrap>
      </CustomContainer>
    </Nav>
  );
});

export default Header;

const Nav = styled.nav`
  height: 80px;
  background-color: #fdfdfd;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const CustomContainer = styled(Container)`
  padding: 0px 15px;
`;

const Title = styled.h1`
  width: 120px;
  font-family: "Fredoka One", cursive;
  font-weight: "400";
  font-size: 30px;
  display: flex;
  white-space: pre;
`;

const MenuWrap = styled.div`
  width: calc(100% - 120px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 50px;
`;

const Menu = styled.div`
  border: none;
  outline: none;
  margin: 0px 15px;
  position: relative;
`;

const LinkTitle = styled.p`
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  text-align: center;
  font-family: "Hind", sans-serif;
  font-size: 17px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;
