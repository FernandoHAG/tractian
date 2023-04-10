import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

function MachineStatusChart(props) {
  const { theme } = useSelector((state) => state.config);

  const backgroundColor = theme === "light" ? "#FFFFFF" : "#1C1C1E";
  const textColor = theme === "light" ? "#000000" : "#FFFFFF";

  const options = {
    chart: {
      backgroundColor,
    },
    title: {
      text: "Machine Status",
      style: {
        color: textColor,
      },
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Timestamp",
        style: {
          color: textColor,
        },
      },
      labels: {
        style: {
          color: textColor,
        },
      },
    },
    yAxis: {
      title: {
        text: "Machine Status",
        style: {
          color: textColor,
        },
      },
      categories: ["off", "inAlert", "inOperation"],
      labels: {
        style: {
          color: textColor,
        },
      },
    },
    series: [
      {
        name: "Machine Status",
        data: props.data.map((item) => [
          new Date(item.timestamp).getTime(),
          item.status === "off" ? 0 : item.status === "inAlert" ? 1 : 2,
        ]),
      },
    ],
  };

  const pieOptions = {
    chart: {
      backgroundColor,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Machine Status Percentage",
      style: {
        color: textColor,
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: [
          {
            name: "off",
            y: props.data.filter((item) => item.status === "off").length,
          },
          {
            name: "inAlert",
            y: props.data.filter((item) => item.status === "inAlert").length,
          },
          {
            name: "inOperation",
            y: props.data.filter((item) => item.status === "inOperation").length,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <HighchartsReact highcharts={Highcharts} options={pieOptions} />
    </div>
  );
}

export default MachineStatusChart;
