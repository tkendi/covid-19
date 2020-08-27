import React from "react";
import styled from "styled-components";
import { news } from "../../../api/news";
import NewsItem from "./newsItem";
import coronaImage from "../../../images/image.png";
import styles from "../../style/page.module.css";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-top: 2.5rem;
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
  }

  //Sample Data
  sampleArtilces = {
    title: "제목",
    description: "내용",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
  };

  render() {
    let articles = this.state.articles;
    return (
      <div className={styles.form}>
        <img src={coronaImage} alt="corona" className={styles.image} />
        <NewsListBlock>
          {articles.map((article) => (
            <NewsItem key={articles.url} article={article} />
          ))}
        </NewsListBlock>
      </div>
    );
  }
}

export default newsList;
