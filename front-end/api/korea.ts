import axios from "axios";
import { Env } from "constants/Env";

// const serviceKey = config.ServiceKey
const date = new Date();
date.setHours(date.getHours() - 1);
//const hours = date.getHours();
let startDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(
  -2
)}${("0" + date.getDate()).slice(-2)}`;

let endDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
  "0" + date.getDate()
).slice(-2)}`;

if (date.getHours() < 12) {
  startDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
    "0" +
    (date.getDate() - 1)
  ).slice(-2)}`;

  endDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
    "0" +
    (date.getDate() - 1)
  ).slice(-2)}`;
}

const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${Env.CovidOpenDataKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

export const cityPicker = async () => {
  try {
    const data = await axios.get(url);
    return data
    // const items = data.data.response.body.items.item;
    // const city = [];

    // for (const keys in items) {
    //   city[keys] = items[keys].gubun;
    // }

    // console.log(city);
    // return Array.from(city);
  } catch (e) {}
};

export const numbers = async (city) => {
  try {
    const data = await axios.get(url);
    const items = data.data.response.body.items.item;
    const info = {
      numbers: {
        DPN: 0,
        Death: 0,
        Recover: 0,
      },
      date: "",
    };

    info.numbers.DPN = items[city].incDec;
    info.numbers.Death = items[city].deathCnt;
    info.numbers.Recover = items[city].isolClearCnt;
    info.date = items[city].createDt.slice(0, 11);

    return info;
  } catch (e) {}
};
