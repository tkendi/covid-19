import React, { useEffect } from "react";
import styled from "styled-components";

//api
import { getKorea } from "api/Korea/Get";
import { getWorld } from "api/World/Get";

//components
import { Container } from "components/Container";
import { Line } from "react-chartjs-2";

const Main = () => {
  useEffect(() => {
    console.log(getKorea());
    console.log(getWorld());
  }, []);

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
    scales: {
      xAxes: [
        {
          //   position: "top", //default는 bottom
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Step",
            fontFamily: "Montserrat",
            fontColor: "black",
          },
          ticks: {
            // beginAtZero: true,
            maxTicksLimit: 10, //x축에 표시할 최대 눈금 수
          },
        },
      ],
      yAxes: [
        {
          display: true,
          //   padding: 10,
          scaleLabel: {
            display: true,
            labelString: "Coverage",
            fontFamily: "Montserrat",
            fontColor: "black",
          },
          ticks: {
            beginAtZero: true,
            stepSize: 20,
            min: 0,
            max: 100,
            //y축 scale 값에 % 붙이기 위해 사용
            callback: function (value) {
              return value + "%";
            },
          },
        },
      ],
    },
  };

  const data = {
    labels: "test",
    datasets: [
      //원소 1
      {
        label: "Classes",
        data: [...new Array(7)],
        lineTension: 0,
        backgroundColor: "rgba(15, 107, 255, 0.1)",
        borderWidth: 1,
        borderColor: "#0f6bff",
        fill: true,
      },
      //원소2
      {
        label: "Methods",
        data: 0,
        lineTension: 0,
        backgroundColor: "rgba(242, 184, 113, 0.1)",
        borderWidth: 1,
        borderColor: "#f2b471",
        fill: true,
      },
    ],
  };

  const legend = {
    display: true,
    labels: {
      fontColor: "black",
    },
    position: "top", //label를 넣어주지 않으면 position이 먹히지 않음
  };

  return (
    <Container>
      <Wrap>
        <Line data={data} legend={legend} options={options} />
      </Wrap>
    </Container>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100%;
`;
