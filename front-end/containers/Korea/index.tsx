import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

//api
import { getKorea } from "api/Korea/Get";

const Korea = () => {
  const [koreaData, setKoreaData] = useState<any>();

  useEffect(() => {
    getKorea().then((res) => setKoreaData(res.data));
  }, []);

  const data = {
    labels: koreaData?.slice(0, 18).map((cur: any) => cur.gubun),
    datasets: [
      //원소 1
      {
        label: "사망자",
        data: koreaData?.slice(0, 18).map((cur: any) => cur.deathCnt),
        lineTension: 0,
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "확진자",
        data: koreaData?.slice(0, 18).map((cur: any) => cur.incDec),
        lineTension: 0,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "완치자",
        data: koreaData?.slice(0, 18).map((cur: any) => cur.isolIngCnt),
        lineTension: 0,
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  return <Bar data={data} options={options} />;
};

export default Korea;
