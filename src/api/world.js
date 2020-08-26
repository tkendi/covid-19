// import axios from 'axios'

// const url = 'https://covid19.mathdro.id/api'

// export const fetchData = async(country) => {
//     let changeableUrl = url;

//     if(country) {
//         changeableUrl = `${url}/countries/${country}`
//     }

//     try{
//         const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

//         return { confirmed, recovered, deaths, lastUpdate };
//     } catch(error){
//         console.log(error)
//     }
// }

// export const fetchDailyData = async() => {
//     try{
//         const {data} = await axios.get(`${url}/daily`);

//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             recovered: dailyData.recovered.total,
//             date: dailyData.reportDate,
//         }))
//         return modifiedData
//     }catch(error) {
//         console.log(error)
//     }
// }

// export const fetchCountries = async () => {
//     try {
//         const { data: { countries } } = await axios.get(`${url}/countries`)
//         return countries.map((country) => country.name)
//     } catch(error) {
//         console.log(error)
//     }
// }
import axios from "axios";

const servicekey = process.env.REACT_APP_ServiceKey;
console.log(servicekey);
const date = new Date();
date.setHours(date.getHours() - 1);

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

const url = `/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=${process.env.REACT_APP_ServiceKey}s&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

export const countryPicker = async () => {
  const data = await axios.get(url);
  const items = data.data.response.body.items.item;
  let country = [];

  for (const keys in items) {
    country[keys] = items[keys].nationNm;
  }

  country = Array.from(country);
  return country;
};

export const numbers = async (country) => {
  try {
    const data = await axios.get(url);
    const items = data.data.response.body.items.item;
    const info = {
      numbers: {
        DPN: 0,
        Death: 0,
        Rate: 0,
      },
      date: "",
    };

    info.numbers.DPN = items[country].natDefCnt;
    info.numbers.Death = items[country].natDeathCnt;
    info.numbers.Rate = items[country].natDeathRate;

    info.date = items[country].createDt.slice(0, 11);

    console.log(items);
    console.log(info);
    return info;
  } catch (e) {}
};
