import axios from "axios";
// import * as config from '../config'

// const serviceKey = config.newsAPI;

export const news = () => {
    const newsData = axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&q=코로나&apiKey=4343d5ea9d6d45e59b8b5cebd36ea2c0`
    );
    return newsData;
};