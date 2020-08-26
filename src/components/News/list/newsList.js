import React from "react";
import styled from "styled-components";
import newsItem from "./newsItem";
import { news } from "../../../api/news";
import {Typography} from '@material-ui/core'

const NewsItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

class newsList extends React.Component {
  async componentDidMount() {
    const data = await news;
    console.log(data);
  }
  render() {
    return (
      <React.Fragment>
        <Typography>Testing</Typography>
      </React.Fragment>
    );
  }
}

export default newsList;
