import React, { useEffect, useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { Line } from "react-chartjs-2";

//api
import { getKoreaMonth } from "api/Korea/Get";

const KoreaMonth = () => {
  const [perMonthData, setPerMonthData] = useState<any>([]);

  useEffect(() => {
    getKoreaMonth()
      .then((res) => setPerMonthData(res.data))
      .catch((err) => console.log(err.data.response));
  }, []);

  const data = {
    labels: perMonthData?.map((cur: any) => cur.stdDay.slice(6, -3)),
    datasets: [
      {
        label: "사망자",
        data: perMonthData.map((cur: any) => cur.deathCnt),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "확진자",
        data: perMonthData.map((cur: any) => cur.defCnt),
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <ThemeConsumer>
      {() => (
        <Wrap>
          <Line data={data} />
        </Wrap>
      )}
    </ThemeConsumer>
  );
};

export default KoreaMonth;

const Wrap = styled.div``;
