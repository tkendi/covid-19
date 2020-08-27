import axios from "axios";

export const news = () => {
  const newsData = axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&q=코로나&apiKey=${process.env.REACT_APP_NewsAPI}`
  );
  console.log(newsData)
  return newsData;
};
