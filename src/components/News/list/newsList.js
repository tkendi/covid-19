import React from "react";
import styled from "styled-components";
import { news } from "../../../api/news";
import { Typography } from "@material-ui/core";
import NewsItem from "./newsItem";

const NewsListBlock = styled.div`
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
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    const data = await news();
    console.log(data);
    this.setState({
      articles: data.data.articles,
      loading: false,
    });

    console.log(this.state.articles);
  }

  sampleArtilces = {
    title: "제목",
    description: "내용",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
  };

  render() {
    let articles = this.state.articles;
    return (
      <NewsListBlock>
        {articles.map(article => (
          <NewsItem key = {articles.url} article = {article} />
        ))}
      </NewsListBlock>
    );
  }
}

export default newsList;
