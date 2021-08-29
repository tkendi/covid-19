import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WorldService {
  async getWorld(): Promise<any> {
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

    const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=${process.env.CovidOpenDataKey}&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

    let data;
    const result = {
      africa: [],
      oceania: [],
      europe: [],
      america: [],
      middleEast: [],
      asia: [],
    };

    await axios
      .get(url)
      .then((res) => (data = res.data.response.body.items))
      .catch((e) => console.log(e));

    data.item?.map((cur) => {
      switch (cur.areaNm) {
        case '아프리카':
          result.africa.push(cur);
          break;
        case '유럽':
          result.europe.push(cur);
          break;
        case '아메리카':
          result.america.push(cur);
          break;
        case '중동':
          result.middleEast.push(cur);
          break;
        case '아시아':
          result.asia.push(cur);
          break;
        case '오세아니아':
          result.oceania.push(cur);
          break;
      }
    });
    return result;
  }
}
