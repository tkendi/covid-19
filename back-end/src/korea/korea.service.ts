import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KoreaService {
  async getKorea(): Promise<any> {
    const date = new Date();
    date.setHours(date.getHours() - 1);
    //const hours = date.getHours();
    let startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
      -2,
    )}${('0' + date.getDate()).slice(-2)}`;

    let endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
      -2,
    )}${('0' + date.getDate()).slice(-2)}`;

    if (date.getHours() < 12) {
      startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
        -2,
      )}${('0' + (date.getDate() - 1)).slice(-2)}`;

      endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
        -2,
      )}${('0' + (date.getDate() - 1)).slice(-2)}`;
    }

    const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${process.env.CovidOpenDataKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

    let data;

    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        data = res.data.response.body.items;
      })
      .catch((e) => console.log(e));
    return data.item;
  }

  // 달 별로 나오는 구간설정
  async getKoreaMonth(): Promise<any> {
    const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${process.env.CovidOpenDataKey}&pageNo=1&numOfRows=10&startCreateDt=20210811&endCreateDt=20210911&_type=json`;

    let data;

    await axios
      .get(url)
      .then((res) => (data = res.data.response.body.items))
      .catch((e) => console.log(e));
    return data.item.filter((cur) => cur.gubun === "합계");
  }
}
