import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./styles.css";
import { Container } from "react-bootstrap";
/**
 * @author
 * @function DashboardAnalytics
 **/

/**
 * @author
 * @function ChartComponent
 **/

const ChartComponent = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      chart: {
        backgroundColor: "#1a1f36",
        type: "line",
      },

      title: {
        style: {
          color: "#53b9ea",
          fontFamily: "blenderProBook",
          fontSize: "25px",
        },
        text: props?.title,
      },
      yAxis: {
        gridLineColor: "rgba(255, 255, 255, 0.2)",
        gridLineWidth: 0.1,
        className: "highcharts-color-0",
        title: {
          text: props?.xAxisTitle,
        },
      },
      xAxis: {
        gridLineWidth: 0.1,
        className: "highcharts-color-0",
        gridLineColor: "#197F07",
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      series: [
        {
          name: "Monthly",
          data: props?.graphData,
          color: "#FB49C0",
        },
      ],
    });
  }, [props?.graphData]);

  return (
    <Container className="analytics-chart-container-style p-2">
      <HighchartsReact
        highcharts={Highcharts}
        options={data}
        containerProps={{ className: "chart-styling" }}
      />
    </Container>
  );
};

export default ChartComponent;
