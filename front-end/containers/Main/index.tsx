import React, { useEffect, useState } from "react";
import styled from "styled-components";

//api
import { getKorea } from "api/Korea/Get";
import { getWorld } from "api/World/Get";

//components
import { Container } from "components/Container";
import { Bar } from "react-chartjs-2";

const Main = () => {
  const [koreaData, setKoreaData] = useState<any>();

  useEffect(() => {
    getKorea().then((res) => setKoreaData(res.data));
    console.log(getWorld());
  }, []);

  console.log(koreaData?.gubun);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    //tooltips 사용시
    tooltips: {
      enabled: true,
      mode: "nearest",
      position: "average",
      intersect: false,
    },
    // scales: {
    //   xAxes: [
    //     {
    //       //   position: "top", //default는 bottom
    //       display: true,
    //       scaleLabel: {
    //         display: true,
    //         labelString: "Step",
    //         fontFamily: "Montserrat",
    //         fontColor: "black",
    //       },
    //       ticks: {
    //         // beginAtZero: true,
    //         maxTicksLimit: 10, //x축에 표시할 최대 눈금 수
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       display: true,
    //       //   padding: 10,
    //       scaleLabel: {
    //         display: true,
    //         labelString: "Coverage",
    //         fontFamily: "Montserrat",
    //         fontColor: "black",
    //       },
    //       ticks: {
    //         beginAtZero: true,
    //         stepSize: 20,
    //         min: 100,
    //         max: 100,
    //       },
    //     },
    //   ],
    // },
  };

  const data = {
    labels: koreaData?.slice(0, 18).map((cur: any) => cur.gubun),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: koreaData?.map((cur: any) => cur.deathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "감염자",
        data: koreaData?.map((cur: any) => cur.incDec),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "완치자",
        data: koreaData?.map((cur: any) => cur.isolIngCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  return (
    <Container>
      <Wrap>
        <Bar data={data} options={options} />
      </Wrap>
    </Container>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100%;
`;
