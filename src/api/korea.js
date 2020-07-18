import axios from "axios";

const serviceKey = '74REYyJLVit8%2FMqDgIEqeWBrkgwvzDaXdrosL%2FmucKAtoFSxDvPLLHvRw8To1wHaeeW%2Br%2FHNoYByL48bgkb7Nw%3D%3D'

const date = new Date();
date.setHours(date.getHours() - 1);
const startDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`;
const endDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`;

const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}`;

export const koreaData = async () => {
  try {
    await axios.get(url)
    .then(res => {
        console.log(res)
    })
  } catch (err) {
    console.log(err);
  }
};

