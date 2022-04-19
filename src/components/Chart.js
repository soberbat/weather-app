import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import moment from "moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  TimeScale
);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
} from "chart.js";

//STYLED COMPONENTS
const Container = styled.div`
  padding: 1.6rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme.grayTextTone};
    font-weight: 500;
    margin-bottom: 1.4rem;
  }
`;

//STYLED COMPONENTS

export const options = {
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  responsive: true,
};

export const Chart = ({ list }) => {
  const currentDay = moment().format("YYYY-MM-DD");

  const forecast = list
    .filter((item) => item.dt_txt.split(" ")[0] === currentDay)
    .map((item) => Math.round(item.main.temp - 272));

  const labels = list
    .filter((item) => item.dt_txt.split(" ")[0] === currentDay)
    .map((item) => item.dt_txt.split(" ")[1].split(":")[0] + ":00");

  const data = {
    labels,
    datasets: [
      {
        label: "Weather Forecast",
        data: forecast,
        borderColor: "#EBEBEB",
        tension: 0.4,
        fill: false,
        backgroundColor: "#5f5f5f",
      },
    ],
  };

  return (
    <Container>
      <h1>Temparature</h1>
      {<Line options={options} data={data} />}
    </Container>
  );
};
