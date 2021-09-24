import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KoreaService {
  //today korea data
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

    let data: any = [];

    await axios
      .get(url)
      .then((res) => {
        data = res.data.response.body.items;
      })
      .catch((e) => console.log('error: ', e));
    return data.item;
  }

  //Per Month data setting
  async getKoreaMonth(): Promise<any> {
    const date = new Date();
    date.setHours(date.getHours() - 1);
    let startDt = `${date.getFullYear()}${('0' + date.getMonth()).slice(-2)}${(
      '0' + date.getDate()
    ).slice(-2)}`;

    let endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
      -2,
    )}${('0' + date.getDate()).slice(-2)}`;

    if (date.getHours() < 12) {
      startDt = `${date.getFullYear()}${('0' + date.getMonth()).slice(-2)}${(
        '0' +
        (date.getDate() - 1)
      ).slice(-2)}`;

      endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
        -2,
      )}${('0' + (date.getDate() - 1)).slice(-2)}`;
    }

    const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${process.env.CovidOpenDataKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

    let data: any = [];

    await axios
      .get(url)
      .then((res) => (data = res.data.response.body.items))
      .catch((e) => console.log('error: ', e));
    // console.log("data", data?.item.filter((cur: any) => cur?.gubun === '합계').slice(0, 32))
    return data?.item.filter((cur: any) => cur?.gubun === '합계').slice(0, 32);
  }
}
