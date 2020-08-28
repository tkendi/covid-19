import axios from "axios";
import * as config from '../config'

const serviceKey = config.newsAPI

export const news = () => {
  const newsData = axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&q=코로나&apiKey=${serviceKey}`
  );
  console.log(newsData)
  return newsData;
};
