import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

//api
import { getKorea } from "api/Korea/Get";
import { Container } from "components/Container";

const Korea = () => {
  const [koreaData, setKoreaData] = useState<any>();

  useEffect(() => {
    getKorea().then((res) => setKoreaData(res.data));
  }, []);

  const data = {
    labels: koreaData?.map((cur: any) => cur.gubun),
    datasets: [
      //원소 1
      {
        label: "누적 사망자",
        data: koreaData?.map((cur: any) => cur.deathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: koreaData?.map((cur: any) => cur.incDec),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "치료중",
        data: koreaData?.map((cur: any) => cur.isolIngCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 1,
        fill: true,
      },
      // { label: new Date(), data: 0, backgroundColor: "transparent" },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  return (
    <Container>
      <h3>Korea Data</h3>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default Korea;
