import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

//api
import { getWorld } from "api/World/Get";

const World = () => {
  const [worldData, setWorldData] = useState<any>();

  useEffect(() => {
    getWorld().then((res) => setWorldData(res.data));
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  const data2 = {
    labels: worldData?.africa?.map((cur: any) => cur.nationNm),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: worldData?.africa?.map((cur: any) => cur.natDeathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: worldData?.africa?.map((cur: any) => cur.natDefCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const data3 = {
    labels: worldData?.america?.map((cur: any) => cur.nationNm),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: worldData?.america?.map((cur: any) => cur.natDeathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: worldData?.america?.map((cur: any) => cur.natDefCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const data4 = {
    labels: worldData?.asia?.map((cur: any) => cur.nationNm),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: worldData?.asia?.map((cur: any) => cur.natDeathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: worldData?.asia?.map((cur: any) => cur.natDefCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const data5 = {
    labels: worldData?.europe?.map((cur: any) => cur.nationNm),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: worldData?.europe?.map((cur: any) => cur.natDeathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: worldData?.europe?.map((cur: any) => cur.natDefCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const data6 = {
    labels: worldData?.middleEast?.map((cur: any) => cur.nationNm),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: worldData?.middleEast?.map((cur: any) => cur.natDeathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: worldData?.middleEast?.map((cur: any) => cur.natDefCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const data7 = {
    labels: worldData?.oceania?.map((cur: any) => cur.nationNm),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: worldData?.oceania?.map((cur: any) => cur.natDeathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: worldData?.oceania?.map((cur: any) => cur.natDefCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  return (
    <>
      <Bar data={data2} options={options} />
      <Bar data={data3} options={options} />
      <Bar data={data4} options={options} />
      <Bar data={data5} options={options} />
      <Bar data={data6} options={options} />
      <Bar data={data7} options={options} />
    </>
  );
};

export default World;
